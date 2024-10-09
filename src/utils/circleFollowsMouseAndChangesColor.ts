export const circleFollowsMouseAndChangesColor = (e: MouseEvent, circle: HTMLDivElement) => {
  const { clientX: mouseX, clientY: mouseY } = e;

  if (circle) {
    followsMouse(circle, mouseX, mouseY)
    changeBackgroundColor(circle)
  }
}

const followsMouse = (circle: HTMLDivElement, mouseX: number, mouseY: number) => {
  circle.style.left = `${mouseX}px`;
  circle.style.right = `${mouseX}px`;
  circle.style.top = `${mouseY}px`;
  circle.style.bottom = `${mouseY}px`;
}

const changeBackgroundColor = (circle: HTMLDivElement) => {
  circle.style.background = `#ffe551`;
  circle.style.mixBlendMode = "exclusion";
}
