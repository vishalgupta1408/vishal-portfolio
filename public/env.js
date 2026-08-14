/**
 * Runtime environment configuration.
 * Set CONFIG_ROOT_URL to the base URL where your portfolio/config.json is hosted.
 *
 * Examples:
 *   Google Drive (direct download link):
 *     CONFIG_ROOT_URL: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
 *   GitHub raw content (recommended):
 *     CONFIG_ROOT_URL: 'https://raw.githubusercontent.com/you/repo/main'
 *   Your own server:
 *     CONFIG_ROOT_URL: 'https://yourserver.com'
 *
 * The app will fetch: CONFIG_ROOT_URL + '/portfolio/config.json'
 * If the URL is empty or the request fails, it falls back to the bundled
 * /portfolio/config.json inside the app's public assets.
 */
window.__env = {
  CONFIG_ROOT_URL: ''
};
