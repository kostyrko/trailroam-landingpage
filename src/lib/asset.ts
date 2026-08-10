/**
 * Prefix a root-absolute asset path (e.g. "/screenshots/foo.png") with the
 * configured Astro/Vite `base`, so assets resolve correctly under GitHub
 * Pages project sites (which live at <host>/<repo>/, not the host root).
 *
 * `base` defaults to `import.meta.env.BASE_URL`, which Astro sets from the
 * `base` option in `astro.config.mjs`. (Astro 4 does NOT expose `Astro.base`
 * in component frontmatter — this is the supported way to read it.)
 *
 * Use for any <img src> / <link href> / og:image that points at a file in /public.
 */
export function withBase(path: string, base: string = import.meta.env.BASE_URL): string {
  if (!path.startsWith("/")) return path; // leave relative/absolute URLs alone
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}
