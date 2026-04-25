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
    const distPath = path.resolve(__dirname, 'dist');
    console.log('Serving static files from:', distPath);
    
    app.use(express.static(distPath, {
      setHeaders: (res, path) => {
        if (path.endsWith('.png') || path.endsWith('.jpg')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000');
        }
      }
    }));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
