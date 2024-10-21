export const getHeaderNavLinkTextColor = (
  href: string,
  isCurrentPage: boolean,
  isHamburger: boolean,
  currentUrl: string
) => {
  if (href === "/") {
    if (isHamburger) {
      return currentUrl.includes("barna") ? "text-black" : "";
    }
    if (currentUrl.includes("thriftstudio")) {
      return "text-black";
    }
    return currentUrl.includes("barna") ? "text-white" : "text-[#e296f5]";
  }
  if (currentUrl.includes("thriftstudio")) {
    return "text-black";
  }
  if (isHamburger) {
    return isCurrentPage ? "text-white" : "text-black";
  }
  if (href.includes("evelin")) {
    return isCurrentPage ? "text-[#efd6f5]" : "text-[#e296f5]";
  }
  if (href.includes("barna")) {
    return isCurrentPage ? "text-[#D9D62D]" : "text-white";
  }
};

