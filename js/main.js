(function($) {
	'use strict';
	
		$(document).ready(function(){
			/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
			/*END PRELOADER JS*/
				
			// jQuery Lightbox
			jQuery('.lightbox').venobox({
				numeratio: true,
				infinigall: true
			});	
			
			
			$(window).scroll(function() {
				
				  if ($(this).scrollTop() > 100) {
					$('#header').addClass('menu-shrink');
				  } else {
					$('#header').removeClass('menu-shrink');
				  }
				});
				
				
				/*	Mobile Menu
				------------------------*/
				$('#mobile_menu').meanmenu({
					meanScreenWidth: "767",
					meanMenuContainer: ".menu_wrap.col-md-8.col-sm-9",
				});
	
				// one page nav
				$('#main_menu').onePageNav({
					currentClass: 'current',
					changeHash: true,
					scrollSpeed: 4000,
					scrollThreshold: 0.5,
					filter: '',
					easing: 'swing',
					begin: function() {
						//I get fired when the animation is starting
					},
					end: function() {
						//I get fired when the animation is ending
					},
					scrollChange: function(jQuerycurrentListItem) {
						//I get fired when you enter a section and I pass the list item of the section
					}
				});	
	
			
			
			// Main slider
			$('.slider_active').owlCarousel({
				loop:true,
				navText:['<i class="ti-angle-double-left"></i>','<i class="ti-angle-double-right"></i>'],
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				mouseDrag:false,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})	
			


			// testimonial slider
			$('.test_slide_area').owlCarousel({
				loop:true,	
				autoplay:true,
				nav:false,
				dots:true,
				navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
				items: 3,
				margin: 30,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:3
					}
				}
			})
			
			
			
			// client slider 
			$('.client_slide_area').owlCarousel({
				loop:true,	
				autoplay:true,			
				autoplay:true,
				margin: 80,
				responsive:{
					0:{
						items:2
					},
					600:{
						items:4
					},
					1000:{
						items:6
					}
				}
			})
			
			
			// Counter 
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});


			// jQuery MixItUp
			$('.portfolio_item').mixItUp();		
			
		})
		

		 $('.video-popup').venobox({
			framewidth: '700px',        // default: ''
			frameheight: '450px',       // default: ''
			border: '10px',             // default: '0'
			bgcolor: '#000',         // default: '#fff'
			titleattr: 'data-title',    // default: 'title'
			numeratio: true,            // default: false
			infinigall: true            // default: false
		});

	// WOW
	new WOW().init();
	
	// Typed
	$(".typed").each(function() {
		var $this = $(this);
		$this.typed({
			strings: $this.attr('data-elements').split(','),
			typeSpeed: 100,
			backDelay: 3000
		});
	});
		
})(jQuery);	
