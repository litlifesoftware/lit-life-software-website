export default function openBlankLink(url) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) { newWindow.opener = null; }
}