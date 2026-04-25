# MotoZone EK - Showroom Digital

Showroom digital oficial de **MotoZone EK**, especialistas en motocicletas **Empire Keeway**. Esta plataforma permite a los usuarios explorar los últimos modelos, consultar especificaciones técnicas y realizar solicitudes de financiamiento a través de un proceso digital fluido.

## 🚀 Tecnologías

- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animaciones)
- **React Router** (Navegación)
- **Lucide React** (Iconografía)

## 🛠️ Instalación y Desarrollo

1. Clona el repositorio:
   ```bash
   git clone <tu-url-de-github>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Construye para producción:
   ```bash
   npm run build
   ```

## 🌐 Despliegue en Render (IMPORTANTE)

Para que las imágenes y rutas funcionen correctamente, sigue estos pasos en el panel de Render:

1. Crea un nuevo **Static Site**.
2. Conecta tu repositorio de GitHub.
3. Configura los siguientes campos:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **No** selecciones "Web Service", ya que eso te pedirá un "Start Command" que este proyecto no necesita por ser un sitio estático.

El archivo `render.yaml` incluido en el proyecto configurará automáticamente las reglas de redirección para que las imágenes se carguen correctamente.
