import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleSectionAbout = (...htmlElements) => {
	const [btns, about, main, thumbnails, sections] = htmlElements

	btns.forEach(btn =>
		btn.addEventListener('click', () => {
			sections.forEach(section => section.classList.remove('active'))
			about.classList.toggle('active')
			handleMainResizingAndThumbnailsWrapperTranslate(about, main, thumbnails)
		})
	)
}
