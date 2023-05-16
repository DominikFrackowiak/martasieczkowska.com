import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const toggleButtonActive = (btns, sections, main, thumbnails) => {
	console.log(btns, sections)
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			sections.forEach(section => {
				section.classList.remove('active')
				handleMainResizingAndThumbnailsWrapperTranslate(
					section,
					main,
					thumbnails
				)
			})
			const isActive = btn.classList.contains('active')

			btns.forEach(btn => btn.classList.remove('active'))

			if (!isActive) {
				btn.classList.add('active')
			}
		})
	})
}
