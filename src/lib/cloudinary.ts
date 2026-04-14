/**
 * Injects Cloudinary optimization transforms into a Cloudinary URL.
 * Returns the original URL if it's not a Cloudinary URL.
 */
export function getCloudinaryUrl(
  url: string,
  options: { width?: number; height?: number } = {}
): string {
  if (!url || !url.includes('res.cloudinary.com')) return url;

  const transforms: string[] = [];
  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  // q_auto:good = high visual quality with smart compression
  // f_auto = serve WebP/AVIF when supported
  transforms.push('q_auto:good', 'f_auto');

  const transformString = transforms.join(',');
  return url.replace('/upload/', `/upload/${transformString}/`);
}
