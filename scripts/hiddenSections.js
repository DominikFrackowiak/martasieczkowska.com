import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleHiddenSections = (sections, index, main, thumbnails) => {
	sections.forEach(section => section.classList.remove('active'))
	sections[index].classList.add('active')
	handleMainResizingAndThumbnailsWrapperTranslate(sections[index], main, thumbnails)
}
