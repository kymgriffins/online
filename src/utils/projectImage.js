export function getProjectImage(title) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#111111"/>
    <text x="400" y="250" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="NeueMontreal, sans-serif" font-size="32" font-weight="300">${escapeXml(title)}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
