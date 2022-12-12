(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const sliderHero = () => {
		if ($('#slider-hero').length > 0) {
			new Swiper('#slider-hero .swiper', {
				slidesPerView: 1,
				speed: 350,
				loop: true,
				autoplay: {
					delay: 10000,
				},
				navigation: {
					prevEl: '#slider-hero .hero-button_prev',
					nextEl: '#slider-hero .hero-button_next'
				},
			});
		}
	}

	$(function () {
		$(window).resize(() => windowWidth = $(window).width());
		sliderHero();
	});
})(jQuery);
