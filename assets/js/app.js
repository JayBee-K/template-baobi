(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleNavigationMobile = () => {
		if (windowWidth < 992) {
			if ($("#header .header-navigation > ul > li > ul").length) {
				$("#header .header-navigation").attr('id', 'hasMenu');
				$("#header .header-navigation > ul > li > ul").each(function (index) {
					$(this).prev().attr({
						"href": "#subMenu" + index, "data-bs-toggle": "collapse"
					});
					$(this).attr({
						"id": "subMenu" + index, "class": "collapse list-unstyled mb-0", "data-bs-parent": "#hasMenu"
					});
				})
			}

			$('#call-navigation').click(function () {
				if (!$('body').hasClass('is-navigation')) {
					$('body').addClass('is-navigation');
				} else {
					$("#header .header-navigation > ul > li > .navigation-sub").collapse('hide');
					$('body').removeClass('is-navigation');
				}
			});

			$('#close-navigation, #header-overlay').click(function () {
				$('body').removeClass('is-navigation');
			});
		}
	}

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
					375: {
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

	const handleInitFancyBoxArticle = () => {
		const imgList = $('#article-detail_content img');
		if (imgList.length > 0) {
			imgList.each((index, elm) => {
				$(elm).wrap(`<a style="cursor: zoom-in" href="${$(elm).attr('src')}" data-caption="${$(elm).attr('alt')}" data-fancybox="images"></a>`);
			});

			$('[data-fancybox="images"]').fancybox({
				thumbs: {
					autoStart: true,
				},
			});
		}
	}
	const handleInitFancyBoxProduct = () => {
		const imgList = $('#product-detail_content img');
		if (imgList.length > 0) {
			imgList.each((index, elm) => {
				$(elm).wrap(`<a style="cursor: zoom-in" href="${$(elm).attr('src')}" data-caption="${$(elm).attr('alt')}" data-fancybox="images"></a>`);
			});

			$('[data-fancybox="images"]').fancybox({
				thumbs: {
					autoStart: true,
				},
			});
		}
	}

	let [avatarThumb, avatarPhoto] = [];
	let handleSlideProduct = function () {
		if ($('#detail-avatar_thumb').length > 0) {
			avatarThumb = new Swiper('#detail-avatar_thumb .swiper', {
				loopAdditionalSlides: 0,
				spaceBetween: 15,
				slidesPerView: 4,
				breakpoints: {
					320: {
						slidesPerView: 2.5,
					},
					600: {
						slidesPerView: 3.5,
					},
					1199: {
						slidesPerView: 4,
					},
				},
			});

			avatarPhoto = new Swiper('#detail-avatar_photo .swiper', {
				thumbs: {
					swiper: avatarThumb,
				},
				slidesPerView: 1,
			});

			avatarPhoto.on('slideChangeTransitionStart', function () {
				avatarThumb.slideTo(avatarPhoto.activeIndex);
			});
		} else {
			avatarPhoto = new Swiper('#detail-avatar_photo .swiper', {
				slidesPerView: 1,
			});
		}
		handleZoomImageProduct($('#detail-avatar_photo [data-fancybox=product-image]'), avatarPhoto, avatarThumb);
	}

	const handleZoomImageProduct = function (elm, avatarPhoto, avatarThumb) {
		let i = 0;
		elm.click(function () {
			i = 0;
		});

		elm.fancybox({
			touch: true,
			beforeShow: function (instance, current) {
				let index = $(`[data-fancybox='product-image'][href='${current.src}']`).attr('data-index');
				avatarPhoto.slideTo(index - 1);
				if ($('#detail-thumb_photo').length > 0) {
					avatarThumb.slideTo(index - 1);
				}
			},
		});
	}

	const handleFrm = () => {
		$('#formTemp').submit(function () {
			let form = $(this);
			if (!form[0].checkValidity()) {
				form.addClass('was-validated');
			}
			return false;
		});
	}

	$(function () {
		$(window).resize(() => windowWidth = $(window).width());
		handleNavigationMobile();
		sliderHero();
		sliderFeedback();
		sliderPartner();
		handleInitFancyBoxArticle();
		handleInitFancyBoxProduct();
		handleSlideProduct();
		handleFrm();
	});
})(jQuery);
