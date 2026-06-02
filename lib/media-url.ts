const mediaBaseUrl = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? "";

export function mediaUrl(path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${mediaBaseUrl}${cleanPath}`;
}