import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleHiddenSections = (
	sections,
	index,
	main,
	thumbnails,
	btns,
	myWindow
) => {
	myWindow.scrollTo(0, 0)
	setTimeout(() => {
		sections.forEach(section => section.classList.remove('active'))

		btns.forEach(btn => {
			if (
				btn.classList.contains('btn-about') &&
				btn.classList.contains('active')
			) {
				btn.classList.remove('active')
			}
		})

		sections[index].classList.add('active')
		handleMainResizingAndThumbnailsWrapperTranslate(
			sections[index],
			main,
			thumbnails
		)
	}, 600)
}
