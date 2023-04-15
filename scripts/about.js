import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleSectionAbout = (...htmlElements) => {
	const [btns, about, main, thumbnails, sections] = htmlElements

btns.forEach(btn => {
		if (btn.classList.contains('btn-about')) {
			btn.addEventListener('click', () => {
				sections.forEach(section => section.classList.remove('active'))
				about.classList.toggle('active')
				handleMainResizingAndThumbnailsWrapperTranslate(about, main, thumbnails)
			})
		}
	})
}


