export const getHeaderNavLinkTextColor = (
  href: string,
  isCurrentPage: boolean,
  isHamburger: boolean,
  currentUrl: string
) => {
  if (href === "/") {
    return getHomeTextColor(isHamburger, currentUrl);
  }

  if (href.includes("thriftstudio") || href.includes('quizzical')) {
    return getProjectSpecificTextColor(href);
  }
  if (isHamburger) {
    return isCurrentPage ? "text-white" : "text-black";
  }

  if (href.includes('evelin') || href.includes('barna')) {
    return getEvelinOrBarnaTextColor(href, isCurrentPage);
  }
};

const getHomeTextColor = (isHamburger: boolean, currentUrl: string) => {
  if (isHamburger) {
    return currentUrl.includes("barna") ? "text-black" : "";
  }
  if (currentUrl.includes("thriftstudio")) {
    return "text-black";
  }
  if (currentUrl.includes("quizzical")) {
    return "text-[#EBD302]";
  }
  return currentUrl.includes("barna") ? "text-white" : "text-[#e296f5]";
};

const getEvelinOrBarnaTextColor = (href: string, isCurrentPage: boolean) => {
  if (href.includes("evelin")) {
    if (href.includes('quizzical')) {
      return "text-[#EBD302]"
    }
    return isCurrentPage ? "text-[#efd6f5]" : "text-[#e296f5]";
  }
  if (href.includes("barna")) {
    return isCurrentPage ? "text-[#D9D62D]" : "text-white";
  }
}

const getProjectSpecificTextColor = (href: string) => {
  if (href.includes("thriftstudio")) {
    return "text-black";
  }
  if (href.includes("quizzical")) {
    return "text-[#EBD302]";
  }
}
