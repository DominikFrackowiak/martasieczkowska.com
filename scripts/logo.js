import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleActionsOnLogoClick = (
	htmlElements,
	sections,
	main,
	thumbnails,
	allSingleThumbnails
) => {
	htmlElements.forEach(el => {
		if (el.classList.contains('active')) {
			el.classList.remove('active')
		}
	})
	allSingleThumbnails.forEach(thumbnail => {
		if (thumbnail.classList.contains('notDisplay')) {
			thumbnail.classList.remove('notDisplay')
		}
	})

	sections.forEach(section =>
		handleMainResizingAndThumbnailsWrapperTranslate(section, main, thumbnails)
	)
}
