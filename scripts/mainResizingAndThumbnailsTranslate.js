export const handleMainResizingAndThumbnailsWrapperTranslate = (
	section,
	main,
	thumbnails
) => {
	
		if (section.classList.contains('active')) {
			main.style.height = `${thumbnails.offsetHeight} + ${section.offsetHeight} px`
			thumbnails.style.transform = `translateY(${section.offsetHeight}px)`
		} else {
			main.style.height = `${thumbnails.offsetHeight} px`
			thumbnails.style.transform = `translateY(0)`
		}
	
}
