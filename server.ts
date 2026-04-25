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
    const possiblePaths = [
      path.resolve(process.cwd(), 'dist'),
      path.resolve(__dirname, 'dist'),
      process.cwd()
    ];
    
    let distPath = possiblePaths.find(p => fs.existsSync(path.join(p, 'index.html'))) || possiblePaths[0];

    console.log(`[Server] serving static files from: ${distPath}`);
    
    // Servir archivos estáticos del build (Vite coloca contents de public/ en la raíz de dist/)
    app.use(express.static(distPath, {
      index: 'index.html',
      etag: true,
      fallthrough: true
    }));

    // Soporte para rutas que aún usen /img/ como prefijo (mapeo a la raíz de estáticos)
    app.use('/img', express.static(distPath));
    
    // Si por alguna razón la carpeta public no se mezcló en el build (fallo raro de build)
    const publicPath = path.resolve(process.cwd(), 'public');
    if (fs.existsSync(publicPath)) {
      app.use(express.static(publicPath));
    }

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
