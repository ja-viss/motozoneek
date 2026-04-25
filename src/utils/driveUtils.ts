export const getDriveUrl = (driveUrl: string) => {
  if (!driveUrl || !driveUrl.includes('drive.google.com')) return driveUrl;
  
  let id = '';
  if (driveUrl.includes('/d/')) {
    id = driveUrl.split('/d/')[1]?.split('/')[0] || '';
  } else if (driveUrl.includes('id=')) {
    id = driveUrl.split('id=')[1]?.split('&')[0] || '';
  }
  
  // Usamos el servicio de miniaturas de Google Drive que es más fiable para tags <img> directos
  return id ? `https://lh3.googleusercontent.com/d/${id}` : driveUrl;
};
