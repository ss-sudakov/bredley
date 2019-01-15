$(function() {

	function sticky_menu(){
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();

		$(window).scroll(function(event){
		    didScroll = true;
		});

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;
		    
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
		        $('header').removeClass('nav-down').addClass('nav-up');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $('header').removeClass('nav-up').addClass('nav-down');
		        }
		    }
		    
		    lastScrollTop = st;
		}
	}

	sticky_menu()

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
		window.onresize = function(event) {
			if($(window).width() > 999){
				if($BURGER.hasClass('close') && $MENU.hasClass('active')){
					$BURGER.removeClass('close')
					$MENU.removeClass('active')
				}
			}
		}
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

	function employees_slider()
	{
		var $SLIDER_CONTAINER = $('.employees__inner')
		var $SLIDER = $SLIDER_CONTAINER.find('.employees__slider')
		var $SLIDER_NAV = $SLIDER_CONTAINER.find('.slider__nav')
		$SLIDER.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			prevArrow: $SLIDER_NAV.find('.prev'),
			nextArrow: $SLIDER_NAV.find('.next'),
			responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		  ]
		})

		set_counter_slider($SLIDER, $SLIDER_NAV)

	}

	employees_slider()

	function news_slider()
	{
		var $SLIDER_CONTAINER = $('.news__inner')
		var $SLIDER = $SLIDER_CONTAINER.find('.news__slider')
		var $SLIDER_NAV = $SLIDER_CONTAINER.find('.pagination')
		$SLIDER.slick({
			infinite: false,
			arrows: true,
			prevArrow: $SLIDER_NAV.find('.prev'),
			nextArrow: $SLIDER_NAV.find('.next'),
			responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		  ]
		})

		set_counter_slider($SLIDER, $SLIDER_NAV)

	}

	function destroy_news_slider(){
		var $SLIDER_CONTAINER = $('.news__inner')
		var $SLIDER = $SLIDER_CONTAINER.find('.news__slider')

		destroy_slick($SLIDER)
	}

	function destroy_slick($slider)
	{

		if($slider.hasClass('slick-initialized'))
		{

            $slider.slick('unslick');
        }
	}

	if(window.innerWidth < 1000) 
	{

        news_slider()
    }
    else
	{
		destroy_news_slider()
	}


	$(window).resize(function(e)
	{
	    if(window.innerWidth < 1000) 
	    {

	        news_slider()
	    }
	    else
	    {

	       destroy_news_slider()
	    }
	});

	function animateNumbers(){
		var a = 0;
		$(window).on('scroll load',function() {

		if($('.numbers').length){
			var oTop = $('.numbers').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$('.nubmer').each(function() {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
							countNum: countTo
						},

						{

							duration: 2000,
							easing: 'swing',
							step: function() {
								$this.text(Math.floor(this.countNum));
							},
							complete: function() {
								$this.text(this.countNum);
								//alert('finished');
							}

						});
				});
				a = 1;
			}
		}
		});
	
	}
	animateNumbers()

	new WOW().init()

	$(function () {
    var $strucureFirstSlider = $('.structure-slider-first');
    var $strucureSecondSlider = $('.structure-slider-second');
    var $structureSlider = $('.structure-slider');

    function structure_slider($sliderContainer, $slider) {
        var $SLIDER_CONTAINER = $sliderContainer;
        var $SLIDER = $sliderContainer.find($slider);
        var $SLIDER_NAV = $SLIDER_CONTAINER.find('.slider__nav');
        $SLIDER.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            prevArrow: $SLIDER_NAV.find('.prev').addClass('hide'),
            nextArrow: $SLIDER_NAV.find('.next')
        });

        set_counter_slider($SLIDER, $SLIDER_NAV)
    }

    structure_slider($strucureFirstSlider, $structureSlider);
    structure_slider($strucureSecondSlider, $structureSlider);

    function set_counter_slider($slider, $slider_nav) {
        var slides = $slider.find('.slick-slide:not(.slick-cloned)');
        var slidesCount = slides.length;

        if (slides.length > 0) {
            var slideCount = slides.length;
            $slider_nav.find('.total').html(slideCount);
        }
        else {
            return
        }

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var prev = $slider_nav.find('.prev');
            var next = $slider_nav.find('.next');

            var currenSlideReal = nextSlide + 1;

            $slider_nav.find('.current').html(currenSlideReal);

            (currenSlideReal > 1) ? prev.removeClass('hide') : prev.addClass('hide');
            (currenSlideReal == slidesCount) ? next.addClass('hide') : next.removeClass('hide');

        })
    	}
	});

	// собираем все якоря; устанавливаем время анимации и количество кадров
	anchors = $('.header__menu a[href*="#"]')
	$(anchors).each(function(index, anchor) {
	  anchor.addEventListener('click', function (e) {
	    e.preventDefault()
	    
	    blockID = anchor.getAttribute('href')
	    
	    document.querySelector('' + blockID).scrollIntoView({
	      behavior: 'smooth',
	      block: 'start'
	    })
	  })
	})

		// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
	    document.getElementById("scroll-top").style.opacity = 1;
	  } else {
	    document.getElementById("scroll-top").style.opacity = 0;
	  }
	}


	$('#scroll-top').click(function(event) {
		event.preventDefault();
      	$('html, body').stop().animate({scrollTop: 0}, 500);
	});
	
})
