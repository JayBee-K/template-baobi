(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const sliderHero = () => {
		if ($('#slider-hero .swiper').length > 0) {
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

	const sliderFeedback = () => {
		if ($('#slider-feedback .swiper').length) {
			new Swiper('#slider-feedback .swiper', {
				slidesPerView: 1.5,
				spaceBetween: 30,
				speeds: 750,
				pagination: {
					el: '#slider-feedback .feedback-pagination',
					type: 'bullets',
					bulletClass: 'custom-bullet',
					clickable: true,
				},
				breakpoints: {
					576: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3.5
					},
					1200: {
						slidesPerView: 4
					}
				}
			});
		}
	}

	const sliderPartner = () => {
		if ($('#slider-partner .swiper').length) {
			new Swiper('#slider-partner .swiper', {
				slidesPerView: 1.5,
				spaceBetween: 15,
				speeds: 750,
				autoplay: {
					delay: 4000,
				},
				breakpoints: {
					576: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3.5
					},
					1200: {
						slidesPerView: 5
					}
				}
			});
		}
	}

	$(function () {
		$(window).resize(() => windowWidth = $(window).width());
		sliderHero();
		sliderFeedback();
		sliderPartner();
	});
})(jQuery);
