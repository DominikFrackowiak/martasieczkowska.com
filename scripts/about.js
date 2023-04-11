
import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleSectionAbout = (...htmlElements) => {
	const [btns, about, main, thumbnails] = htmlElements
	
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('btn-about')) {
				about.classList.toggle('active')
			}
			
			handleMainResizingAndThumbnailsWrapperTranslate(about, main, thumbnails)
		})
	})
}
