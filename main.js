import './sass/style.scss'
import { handleSectionAbout } from './scripts/about'
import { toggleMenuDisplay } from './scripts/menu'
import { removeActiveOnResize } from './scripts/menu'
import { handleActionsOnLogoClick } from './scripts/logo'
import { handleHiddenSections } from './scripts/hiddenSections'
import { handleMainResizingAndThumbnailsWrapperTranslate } from './scripts/mainResizingAndThumbnailsTranslate'
import { handleGraphicDesignIllustrationThumbnailsFiltering } from './scripts/graphicDesignIllustration'
import { toggleButtonActive } from './scripts/buttonsToggleActive'
import { handleBackwardsOnIconClicked } from './scripts/backwardsForwardsIcons'
import { handleForwardsOnIconClicked } from './scripts/backwardsForwardsIcons'
import { handleScrollToTopOnArrowClicked } from './scripts/arrow'

const init = () => {
	const htmlElements = {
		document: document.defaultView,
		body: document.body,
		myWindow: window,
		logo: document.querySelector('#logo'),
		menuBtn: document.querySelector('#menu-btn'),
		navMobile: document.querySelector('.nav-mobile'),
		allBtns: document.querySelectorAll('.btn'),
		aboutBtns: document.querySelectorAll('.btn-about'),
		allSections: document.querySelectorAll('.section'),
		aboutSection: document.querySelector('.about-me'),
		allSingleThumbnails: document.querySelectorAll('.single-thumbnail'),
		thumbnailsWrapper: document.querySelector('.all-thumbnails'),
		main: document.querySelector('.main'),
		fullSizeImagesHiddenSections: document.querySelectorAll('.hidden'),
		closeIcons: document.querySelectorAll('.fa-th-large'),
		forwardIcons: document.querySelectorAll('.fa-angle-right'),
		backwardIcons: document.querySelectorAll('.fa-angle-left'),
		arrows: document.querySelectorAll('.section__arrow'),
		sectionsIllustration: document.querySelectorAll('.illustration'),
		sectionsGraphicDesign: document.querySelectorAll('.graphic-design'),
		frwrdIconsIllustrations: document.querySelectorAll('.frwd-illustration'),
		bckwrdIconsIllustrations: document.querySelectorAll('.bckwrd-illustration'),
		frwrdIconsDesigns: document.querySelectorAll('.frwd-design'),
		bckwrdIconsDesigns: document.querySelectorAll('.bckwrd-design'),
	}

	toggleMenuDisplay(htmlElements.menuBtn, htmlElements.navMobile)

	window.addEventListener('resize', () => {
		removeActiveOnResize(htmlElements.menuBtn, htmlElements.navMobile)
		htmlElements.allSections.forEach(section => {
			if (section.classList.contains('active')) {
				handleMainResizingAndThumbnailsWrapperTranslate(
					section,
					htmlElements.body,
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
				[
					...htmlElements.fullSizeImagesHiddenSections,
					htmlElements.aboutSection,
				],
				index,
				htmlElements.main,
				htmlElements.thumbnailsWrapper,
				htmlElements.allBtns,
				htmlElements.myWindow
			)
		)
	)

	handleGraphicDesignIllustrationThumbnailsFiltering(
		htmlElements.allBtns,
		htmlElements.allSingleThumbnails
	)

	toggleButtonActive(
		htmlElements.allBtns,
		htmlElements.allSections,
		htmlElements.main,
		htmlElements.thumbnailsWrapper
	)

	handleSectionAbout(
		htmlElements.aboutBtns,
		htmlElements.aboutSection,
		htmlElements.main,
		htmlElements.thumbnailsWrapper,
		htmlElements.fullSizeImagesHiddenSections
	)

	htmlElements.closeIcons.forEach(closeIcon =>
		closeIcon.addEventListener('click', () => {
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
		})
	)

	handleBackwardsOnIconClicked(
		htmlElements.allBtns,
		htmlElements.backwardIcons,
		htmlElements.fullSizeImagesHiddenSections,
		htmlElements.main,
		htmlElements.thumbnailsWrapper
	)

	handleForwardsOnIconClicked(
		htmlElements.allBtns,
		htmlElements.forwardIcons,
		htmlElements.fullSizeImagesHiddenSections,
		htmlElements.main,
		htmlElements.thumbnailsWrapper
	)

	handleScrollToTopOnArrowClicked(htmlElements.arrows, htmlElements.myWindow)
}

document.addEventListener('DOMContentLoaded', init)
