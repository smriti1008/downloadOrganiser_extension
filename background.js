const FALLBACK_FOLDER = 'Misc';

// Extract a clean, filesystem-safe folder name from a URL string.
function getFolderName(rawUrl) {
  if (!rawUrl) return FALLBACK_FOLDER;

  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return FALLBACK_FOLDER;
  }

  // blob:https://example.com/uuid -> hostname is empty, but the origin holds the site
  if (url.protocol === 'blob:') {
    try {
      url = new URL(url.origin !== 'null' ? url.origin : url.pathname);
    } catch {
      return FALLBACK_FOLDER;
    }
  }

  // Only real websites get their own folder (skips data:, file:, etc.)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return FALLBACK_FOLDER;
  }

  let domain = url.hostname.toLowerCase();

  // Remove 'www.' for cleaner folder names
  if (domain.startsWith('www.')) domain = domain.slice(4);

  domain = domain
    .replace(/[<>:"/\\|?*\x00-\x1f\[\]]/g, '_') // invalid chars (incl. IPv6 colons/brackets)
    .replace(/[. ]+$/g, '');                     // Windows rejects trailing dots/spaces

  return domain || FALLBACK_FOLDER;
}

chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  // If a path is already present (set by something else), don't interfere
  if (/[\\/]/.test(item.filename)) {
    suggest();
    return;
  }

  // Prefer the page where the user clicked download; fall back to the file's own URL
  const sourceUrl = item.referrer || item.finalUrl || item.url;
  const folder = getFolderName(sourceUrl);

  // Chrome creates the folder inside the default Downloads directory.
  // 'uniquify' avoids overwriting: file.zip -> file (1).zip
  suggest({ filename: `${folder}/${item.filename}`, conflictAction: 'uniquify' });
});