/** Resolves a /public path like "/images/hero-1.jpg" against the site's base URL (the repo subfolder on GitHub Pages). */
export function asset(path: string): string {
  return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path
}
