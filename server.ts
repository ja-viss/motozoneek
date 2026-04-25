import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  if (process.env.NODE_ENV !== 'production') {
    // Modo Desarrollo: Vite maneja las peticiones
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Modo Producción: Intentamos localizar la carpeta dist de forma robusta
    let distPath = path.resolve(process.cwd(), 'dist');
    
    // Si ya estamos dentro de /dist o si /dist no existe pero estamos en la raíz de los archivos estáticos
    if (!fs.existsSync(distPath) && fs.existsSync(path.join(process.cwd(), 'index.html'))) {
      distPath = process.cwd();
    }
    
    if (!fs.existsSync(distPath)) {
      console.error(`[CRITICAL] Dist folder NOT FOUND. Tried: ${distPath}`);
      console.log('Current working directory:', process.cwd());
      console.log('Files in current directory:', fs.readdirSync(process.cwd()));
    }

    console.log(`[Server] serving static files from: ${distPath}`);
    
    // Middleware de logging para depuración
    app.use((req, res, next) => {
      if (req.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
        console.log(`[Asset Request] ${req.url}`);
      }
      next();
    });

    // Servir archivos estáticos
    app.use(express.static(distPath, {
      index: 'index.html',
      etag: true,
      fallthrough: true
    }));

    // Fallback: si no se encuentra en dist, intentar en el directorio raíz del proyecto
    // (Útil si Render no procesó bien la carpeta public)
    app.use(express.static(process.cwd(), {
      fallthrough: true
    }));

    // SPA Fallback
    app.get('*', (req, res) => {
      const ext = path.extname(req.path);
      if (ext && ext !== '.html') {
        res.status(404).send('Not Found');
        return;
      }
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
