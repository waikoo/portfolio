export const getHeaderBgOnScroll = (currentUrl: string) => {
  if (currentUrl.includes("barna")) {
    return "bg-[#0D1205]";
  }
  if (currentUrl.includes('thriftstudio')) {
    return "bg-[#d2d62e]";
  }
  if (currentUrl.includes("evelin")) {
    return "bg-[#1c000c]";
  }
  return ""
}

