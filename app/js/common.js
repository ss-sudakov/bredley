$(function() {

	function burger_menu()
	{
		var $BURGER = $('.header__burger')
		var $MENU = $('.header__menu')

		$BURGER.click(function(event) {
			if($BURGER.hasClass('close') && $MENU.hasClass('active')){
				$BURGER.removeClass('close')
				$MENU.removeClass('active')
			}else{
				$BURGER.addClass('close')
				$MENU.addClass('active')
			}
			
		})
	}

	burger_menu()

	function hero_slider()
	{
		var $SLIDER_CONTAINER = $('.hero__inner')
		var $SLIDER = $SLIDER_CONTAINER.find('.hero__slider')
		var $SLIDER_NAV = $SLIDER_CONTAINER.find('.slider__nav')
		$SLIDER.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			arrows: true,
			prevArrow: $SLIDER_NAV.find('.prev'),
			nextArrow: $SLIDER_NAV.find('.next')
		})

		set_counter_slider($SLIDER, $SLIDER_NAV)

	}

	hero_slider()

	function set_counter_slider($slider, $slider_nav)
	{
		var slides = $slider.find('.slick-slide:not(.slick-cloned)')

		if(slides.length > 0)
		{
			var slideCount = slides.length
			$slider_nav.find('.total').html(slideCount)
		}
		else
		{
			return
		}

		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			
			var currenSlideReal = nextSlide + 1
			
			$slider_nav.find('.current').html(currenSlideReal)

		})
	}

	
})
