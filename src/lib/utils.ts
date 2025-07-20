import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Automated image path detection using Vite's import.meta.glob
const imageManifest = import.meta.glob('/public/mira-images/*', { as: 'url', eager: true });

// Returns the correct image path for a given image name, checking all supported extensions
export function getImagePath(imageName: string) {
  const extensions = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];
  const base = imageName.replace(/\.(png|jpg|jpeg)$/i, '');
  for (let ext of extensions) {
    // Vite's import.meta.glob returns URLs starting with /mira-images/
    const relPath = `/public/mira-images/${base}${ext}`;
    const publicPath = `/mira-images/${base}${ext}`;
    if (imageManifest[relPath]) {
      // Return the public URL (without /public)
      return publicPath;
    }
  }
  // fallback
  return '/mira-images/placeholder.png';
}
