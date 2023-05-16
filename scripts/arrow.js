export const handleScrollToTopOnArrowClicked = (arrows, window) => {
  arrows.forEach(arrow => arrow.addEventListener('click', () => {
   window.scrollTo(0, 0)
  }))
}