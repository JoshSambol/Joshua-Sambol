// Builds a live homepage-screenshot URL for a given site using WordPress's
// free mShots service (no API key, server-side cached). The first request for
// a new URL may briefly return a "generating" placeholder, then the real shot.
export const screenshotUrl = (url, w = 1200, h = 750) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;

// Pick the best link to screenshot for a project (prefer the live website).
export const previewSite = (project) => {
  if (!project.links?.length) return null;
  const web = project.links.find((l) => l.label === 'Website');
  return (web || project.links[0]).url;
};
