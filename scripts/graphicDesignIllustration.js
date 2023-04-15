export const handleGraphicDesignIllustrationThumbnailsFiltering = (
	btns,
	thumbnails
) => {
	btns.forEach(btn => {
		const isGraphicDesignBtn = btn.classList.contains('btn-graphic-design')
		const isIllustrationBtn = btn.classList.contains('btn-illustration')

		if (isGraphicDesignBtn || isIllustrationBtn) {
			btn.addEventListener('click', () => {
				thumbnails.forEach(thumbnail => {
					const isThumbIllustration =
						thumbnail.classList.contains('thumb-illustration')

					if (
						(isGraphicDesignBtn && isThumbIllustration) ||
						(isIllustrationBtn && !isThumbIllustration)
					) {
						thumbnail.classList.toggle('notDisplay')
					} else {
						thumbnail.classList.remove('notDisplay')
					}
				})
			})
		}
	})
}
