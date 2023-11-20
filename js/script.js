new Swiper('.values-slider', {
	touchRatio: 2,
	slideToClickedSlide: true,
	mousewheel: {
		sensitivity: 1,
		// eventsTarget: '.values-slider',
	},
	// autoHeight: true,
	slidesPerView: 3,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 1200,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	speed: 1000,
	effect: 'slide',
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	// Доступность
	ally: {
		// Включить/Выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
})
