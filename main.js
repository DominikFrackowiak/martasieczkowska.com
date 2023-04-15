import './sass/style.scss'
import { handleSectionAbout } from './scripts/about'
import { toggleMenuDisplay } from './scripts/menu'
import { removeActiveOnResize } from './scripts/menu'
import { handleActionsOnLogoClick } from './scripts/logo'
import { handleHiddenSections } from './scripts/hiddenSections'
// import { handleMainResizingAndThumbnailsWrapperTranslate } from './scripts/mainResizingAndThumbnailsTranslate'
import { handleGraphicDesignIllustrationThumbnailsFiltering } from './scripts/graphicDesignIllustration'
import { toggleButtonActive } from './scripts/buttonsToggleActive'

const init = () => {
	const htmlElements = {
		document: document.defaultView,
		body: document.body,
		logo: document.querySelector('#logo'),
		menuBtn: document.querySelector('#menu-btn'),
		navMobile: document.querySelector('.nav-mobile'),
		allBtns: document.querySelectorAll('.btn'),
		allSections: document.querySelectorAll('.section'),
		aboutSections: document.querySelector('.about-me'),
		allSingleThumbnails: document.querySelectorAll('.single-thumbnail'),
		thumbnailsWrapper: document.querySelector('.all-thumbnails'),
		main: document.querySelector('.main'),
		fullSizeImagesHiddenSections: document.querySelectorAll('.hidden'),
	}

	handleSectionAbout(
		htmlElements.allBtns,
		htmlElements.aboutSections,
		htmlElements.main,
		htmlElements.thumbnailsWrapper,
		htmlElements.fullSizeImagesHiddenSections
	)

	toggleMenuDisplay(htmlElements.menuBtn, htmlElements.navMobile)

	window.addEventListener('resize', () => {
		removeActiveOnResize(htmlElements.menuBtn, htmlElements.navMobile)
		htmlElements.allSections.forEach(section => {
			if (section.classList.contains('active')) {
				handleMainResizingAndThumbnailsWrapperTranslate(
					section,
					htmlElements.main,
					htmlElements.thumbnailsWrapper
				)
			}
		})
	})

	htmlElements.logo.addEventListener('click', () =>
		handleActionsOnLogoClick(
			[
				...htmlElements.allBtns,
				htmlElements.navMobile,
				...htmlElements.allSections,
			],
			htmlElements.allSections,
			htmlElements.main,
			htmlElements.thumbnailsWrapper,
			htmlElements.allSingleThumbnails
		)
	)

	htmlElements.allSingleThumbnails.forEach((thumbnail, index) =>
		thumbnail.addEventListener('click', () =>
			handleHiddenSections(
				htmlElements.fullSizeImagesHiddenSections,
				index,
				htmlElements.main,
				htmlElements.thumbnailsWrapper
			)
		)
	)

	handleGraphicDesignIllustrationThumbnailsFiltering(
		htmlElements.allBtns,
		htmlElements.allSingleThumbnails
	)

	toggleButtonActive(htmlElements.allBtns)
}

document.addEventListener('DOMContentLoaded', init)
