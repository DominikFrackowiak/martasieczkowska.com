import './sass/style.scss'
import { handleSectionAbout } from './scripts/about'
// import { handleMainResizing } from './scripts/mainResizingAndThumbnailsTranslate'

const init = () => {
	const htmlElements = {
		document: document.defaultView,
		logo: document.querySelector('#logo'),
		menuBtn: document.querySelector('#menu-btn'),
		navMobile: document.querySelector('.nav-mobile'),
		allBtns: document.querySelectorAll('.btn'),
		allSections: document.querySelectorAll('.section'),
		aboutSections: document.querySelector('.about-me'),
		allSingleThumbnails: document.querySelectorAll('.single-thumbnail'),
		thumbnailsWrapper: document.querySelector('.all-thumbnails'),
		main: document.querySelector('.main'),
	}
	

	handleSectionAbout(
		htmlElements.allBtns,
		htmlElements.aboutSections,
		htmlElements.main,
		htmlElements.thumbnailsWrapper
	)

	//  htmlElements.allSections.forEach(section =>
	// 	handleMainResizing(
	// 		htmlElements.allSections,
	// 		htmlElements.thumbnailsWrapper,
	// 		htmlElements.main
	// 	)
	// )
}

document.addEventListener('DOMContentLoaded', init)
