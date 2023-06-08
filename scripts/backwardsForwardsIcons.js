import { handleMainResizingAndThumbnailsWrapperTranslate } from './mainResizingAndThumbnailsTranslate'

export const handleBackwardsOnIconClicked = (
	icons,
	sections,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) =>
		icon.addEventListener('click', () => {
			if (index > 0) {
				window.scrollTo(0, 0)
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
	icons,
	sections,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) =>
		icon.addEventListener('click', () => {
			if (index < icons.length - 1) {
				window.scrollTo(0, 0)
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

export const handleForwardsIllustrations = (
	btns,
	sectionsIllustrations,
	sectionsDesign,
	icons,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) => {
		icon.addEventListener('click', () => {
			btns.forEach(btn => {
				if (btn.classList.contains('active')) {
					sectionsDesign.forEach(section => section.classList.remove('active'))
					if (index < icons.length - 1) {
						window.scrollTo(0, 0)
						sectionsIllustrations[index].classList.remove('active')
						sectionsIllustrations[index + 1].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsIllustrations[index + 1],
							main,
							thumbnailsWrapper
						)
					} else {
						sectionsIllustrations[index].classList.remove('active')
						window.scrollTo(0, 0)
						sectionsIllustrations[0].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsIllustrations[0],
							main,
							thumbnailsWrapper
						)
					}
				}
			})
		})
	})
}

export const handleForwardsGraphicDesigns = (
	btns,
	sectionsIllustrations,
	sectionsDesign,
	icons,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) => {
		icon.addEventListener('click', () => {
			btns.forEach(btn => {
				if (btn.classList.contains('active')) {
					sectionsIllustrations.forEach(section =>
						section.classList.remove('active')
					)
					if (index < icons.length - 1) {
						window.scrollTo(0, 0)
						sectionsDesign[index].classList.remove('active')
						sectionsDesign[index + 1].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsDesign[index + 1],
							main,
							thumbnailsWrapper
						)
					} else {
						sectionsDesign[index].classList.remove('active')
						window.scrollTo(0, 0)
						sectionsDesign[0].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsDesign[0],
							main,
							thumbnailsWrapper
						)
					}
				}
			})
		})
	})
}

export const handleBackwardsIllustrations = (
	btns,
	sectionsIllustrations,
	sectionsDesign,
	icons,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) => {
		icon.addEventListener('click', () => {
			btns.forEach(btn => {
				if (btn.classList.contains('active')) {
					sectionsDesign.forEach(section => section.classList.remove('active'))
					if (index > 0) {
						window.scrollTo(0, 0)
						sectionsIllustrations[index].classList.remove('active')
						sectionsIllustrations[index - 1].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsIllustrations[index - 1],
							main,
							thumbnailsWrapper
						)
					} else {
						sectionsIllustrations[index].classList.remove('active')
						window.scrollTo(0, 0)
						sectionsIllustrations[
							sectionsIllustrations.length - 1
						].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsIllustrations[sectionsIllustrations.length - 1],
							main,
							thumbnailsWrapper
						)
					}
				}
			})
		})
	})
}

export const handleBackwardsGraphicDesigns = (
	btns,
	sectionsIllustrations,
	sectionsDesign,
	icons,
	main,
	thumbnailsWrapper
) => {
	icons.forEach((icon, index) => {
		icon.addEventListener('click', () => {
			btns.forEach(btn => {
				if (btn.classList.contains('active')) {
					sectionsIllustrations.forEach(section =>
						section.classList.remove('active')
					)
					if (index > 0) {
						window.scrollTo(0, 0)
						sectionsDesign[index].classList.remove('active')
						sectionsDesign[index - 1].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsDesign[index - 1],
							main,
							thumbnailsWrapper
						)
					} else {
						sectionsDesign[index].classList.remove('active')
						window.scrollTo(0, 0)
						sectionsDesign[sectionsDesign.length - 1].classList.add('active')
						handleMainResizingAndThumbnailsWrapperTranslate(
							sectionsDesign[sectionsDesign.length - 1],
							main,
							thumbnailsWrapper
						)
					}
				}
			})
		})
	})
}

// export const handleBackwardsForwardsOnArrowKeydown = (
// 	sections,
// 	main,
// 	thumbnailsWrapper
// ) => {
// 	document.addEventListener('keydown', event => {
// 		sections.forEach((section, index) => {
// 			if (section.classList.contains('active')) {
// 				if (event.key === 'ArrowLeft') {
// 					if (index > 0) {
// 						window.scrollTo(0, 0)
// 						sections[index].classList.remove('active')
// 						sections[index - 1].classList.add('active')
// 						handleMainResizingAndThumbnailsWrapperTranslate(
// 							sections[index - 1],
// 							main,
// 							thumbnailsWrapper
// 						)
// 					}
// 				} else if (event.key === 'ArrowRight') {
// 					if (index < sections.length - 1) {
// 						window.scrollTo(0, 0)
// 						sections[index].classList.remove('active')
// 						sections[index + 1].classList.add('active')
// 						handleMainResizingAndThumbnailsWrapperTranslate(
// 							sections[index + 1],
// 							main,
// 							thumbnailsWrapper
// 						)
// 					}
// 				}
// 			}
// 		})
// 	})
// }

export const handleBackwardsForwardsOnArrowKeydown = (
	sections,
	main,
	thumbnailsWrapper
) => {
	document.addEventListener('keydown', event => {
		let activeSectionIndex = -1

		sections.forEach((section, index) => {
			if (section.classList.contains('active')) {
				activeSectionIndex = index
				return // Zakończ pętlę, gdy znaleziono aktywną sekcję
			}
		})

		if (activeSectionIndex !== -1) {
			if (event.key === 'ArrowLeft') {
				if (activeSectionIndex > 0) {
					window.scrollTo(0, 0)
					sections[activeSectionIndex].classList.remove('active')
					sections[activeSectionIndex - 1].classList.add('active')
					handleMainResizingAndThumbnailsWrapperTranslate(
						sections[activeSectionIndex - 1],
						main,
						thumbnailsWrapper
					)
				}
			} else if (event.key === 'ArrowRight') {
				if (activeSectionIndex < sections.length - 1) {
					window.scrollTo(0, 0)
					sections[activeSectionIndex].classList.remove('active')
					sections[activeSectionIndex + 1].classList.add('active')
					handleMainResizingAndThumbnailsWrapperTranslate(
						sections[activeSectionIndex + 1],
						main,
						thumbnailsWrapper
					)
				}
			}
		}
	})
}
