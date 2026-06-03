const mediaBaseUrl =
  process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? "";

export function mediaUrl(path?: string) {
  if (!path) {
    return "";
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  if (path.startsWith("/media/")) {
    return path;
  }

  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  // ویدئوها → مسیر نسبی
  if (
    cleanPath.endsWith(".mp4") ||
    cleanPath.endsWith(".webm") ||
    cleanPath.endsWith(".ogg")
  ) {
    return `/media${cleanPath}`;
  }

  // تصاویر → URL کامل
  return `${mediaBaseUrl}${cleanPath}`;
}