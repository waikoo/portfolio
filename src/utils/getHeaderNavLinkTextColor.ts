export const getHeaderNavLinkTextColor = (
  isCurrentPage: boolean,
  isHamburger: boolean,
  currentUrl: string
) => {
  if (currentUrl === "/") {
    return getHomeTextColor(isHamburger, currentUrl);
  }

  if (currentUrl.includes("thriftstudio") || currentUrl.includes('quizzical')) {
    return getProjectSpecificTextColor(currentUrl);
  }
  if (isHamburger) {
    return isCurrentPage ? "text-white" : "text-black";
  }

  if (currentUrl.includes('evelin') || currentUrl.includes('barna')) {
    return getEvelinOrBarnaTextColor(currentUrl, isCurrentPage);
  }
};

const getHomeTextColor = (isHamburger: boolean, currentUrl: string) => {
  if (isHamburger) {
    return currentUrl.includes("barna") ? "text-black" : "";
  }
  return currentUrl.includes("barna") ? "text-white" : "text-[#e296f5]";
};

const getEvelinOrBarnaTextColor = (href: string, isCurrentPage: boolean) => {
  if (href.includes("evelin")) {
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
    return "text-[#090909]";
  }
}
