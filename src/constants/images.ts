/**
 * IDs de Google Drive para las imágenes.
 * El usuario puede actualizar estos IDs desde el panel de Google Drive.
 * Para obtener el ID: clic derecho en el archivo -> Compartir -> Copiar enlace.
 * El ID es la parte larga alfanumérica entre '/d/' y '/view'.
 */
export const DRIVE_FOLDER_ID = '1RLb7b8XYsPF8jsAtay4kVBFSkG0OowFu';

// Estructura base para enlaces directos de Drive
const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/u/0/d/${id}`;

// Mapa de imágenes (Local vs Drive)
// Mientras no tengamos los IDs reales, usaremos los locales por defecto,
// pero la estructura está lista para cambiar a Drive.
export const IMAGES = {
  logos: {
    main: '/img/moto-zone.png',
    // Ejemplo de cómo sería con Drive una vez se tengan los IDs:
    // main: getDriveUrl('ID_DE_MOTO_ZONE'),
  },
  products: {
    matrix: {
      thumb: '/img/matrix1.png',
      gallery: ['/img/matrix1.png', '/img/matrix2.png']
    },
    rk: {
      thumb: '/img/rk1.png',
      gallery: ['/img/rk1.png', '/img/rk2.png']
    },
    xpress: {
      thumb: '/img/xpress1.png',
      gallery: ['/img/xpress1.png', '/img/xpress2.png']
    },
    owen: {
      thumb: '/img/owen1.png',
      gallery: ['/img/owen1.png', '/img/owen2.png']
    }
  }
};
