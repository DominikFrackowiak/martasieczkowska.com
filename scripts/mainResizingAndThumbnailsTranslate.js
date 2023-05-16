export const handleMainResizingAndThumbnailsWrapperTranslate = (
	section,
	main,
	thumbnails
) => {
	let thumbnailsWrapperHeight = thumbnails.offsetHeight
	let sectionHeight = section.offsetHeight

	if (section.classList.contains('active')) {
		main.style.height = `${thumbnailsWrapperHeight} + ${sectionHeight}px`
		thumbnails.style.transform = `translateY(${sectionHeight}px)`
	} else {
		main.style.height = `${thumbnailsWrapperHeight}px`
		thumbnails.style.transform = `translateY(0)`
	}
}

