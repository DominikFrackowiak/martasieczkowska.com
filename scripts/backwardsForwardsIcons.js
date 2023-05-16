import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleBackwardsOnIconClicked = (
	btns,
	icons,
	sections,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) =>
		icon.addEventListener('click', () => {
			console.log(sections)
			if (index > 0) {
				sections[index].classList.remove('active')
				sections[index - 1].classList.add('active')
				handleMainResizingAndThumbnailsWrapperTranslate(
					sections[index - 1],
					main,
					thumbnailsWrapper
				)
			}
		})
	)
}

export const handleForwardsOnIconClicked = (
	btns,
	icons,
	sections,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) =>
		icon.addEventListener('click', () => {
			console.log('test forwards')
			if (index < icons.length - 1) {
				sections[index].classList.remove('active')
				sections[index + 1].classList.add('active')
				handleMainResizingAndThumbnailsWrapperTranslate(
					sections[index + 1],
					main,
					thumbnailsWrapper
				)
			}
		})
	)
}
