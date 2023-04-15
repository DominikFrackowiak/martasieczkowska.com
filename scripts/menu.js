export const toggleMenuDisplay = (btn, menu) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('active')
		menu.classList.toggle('active')
	})
}

export const removeActiveOnResize = (btn, menu) => {
	if (menu.classList.contains('active' || btn.classList.contains('active'))) {
		menu.classList.remove('active')
		btn.classList.remove('active')
	}
}
