export const addClass = (elements: IntersectionObserverEntry[]) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("in-view");
    } else {
      element.target.classList.remove("in-view");
    }
  });
}

