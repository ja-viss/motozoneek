/**
 * Utility to resolve image URLs. 
 * Allows switching between local /img/ path and Google Drive hosting.
 */

// If you have a Google Drive Direct Link ID, put it here to override local.
// Format: { 'filename_without_ext': 'DRIVE_ID' }
const DRIVE_OVERRIDES: Record<string, string> = {
  // 'moto-zone': '1A2B3C4D5E6F...',
  // 'matrix1': '...',
};

/**
 * Normalizes a path to either the local /img/ or a Google Drive direct link.
 * @param path The local path (e.g., '/img/moto-zone.png')
 */
export const resolveImageUrl = (path: string): string => {
  if (!path) return '';
  
  // Extract filename without extension
  const filename = path.split('/').pop()?.split('.')[0] || '';
  
  // Check if there's a Drive override
  const driveId = DRIVE_OVERRIDES[filename];
  
  if (driveId) {
    // Return direct link format for Google Drive
    return `https://drive.google.com/uc?export=view&id=${driveId}`;
  }
  
  // Default to local path
  return path;
};
