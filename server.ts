import express from 'express';
import path from 'path';
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
    // Modo Producción: Servimos los archivos estáticos de /dist
    const distPath = path.resolve(process.cwd(), 'dist');
    
    console.log(`[Server] Project Root: ${process.cwd()}`);
    console.log(`[Server] Dist Folder: ${distPath}`);
    
    // Middleware de logging para ver qué archivos se están pidiendo y si existen
    app.use((req, res, next) => {
      if (req.url.startsWith('/img/')) {
        console.log(`[Image Request] ${req.url}`);
      }
      next();
    });

    // Servir archivos estáticos con opciones específicas para evitar fallos
    app.use(express.static(distPath, {
      index: 'index.html',
      dotfiles: 'ignore',
      etag: true,
      fallthrough: true
    }));

    // Fallback manual para la carpeta img por si acaso
    app.use('/img', express.static(path.join(distPath, 'img'), {
      fallthrough: false // Si no está aquí, que tire 404 para las imágenes
    }));

    // SPA Fallback
    app.get('*', (req, res) => {
      // Si parece un archivo y llegó aquí, es que no existe
      if (path.extname(req.path)) {
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
