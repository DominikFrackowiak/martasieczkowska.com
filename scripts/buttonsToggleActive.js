export const toggleButtonActive = btns => {
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			const isActive = btn.classList.contains('active')

			btns.forEach(btn => btn.classList.remove('active'))

			if (!isActive) {
				btn.classList.add('active')
			}
		})
	})
}
