$(document).ready(function(){
	/* ====WOW JS  ===== */
	new WOW().init();
	/* ====COUNTERJS  ===== */
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	/* ====OWL CAROUSEL  ===== */
	$("#client-owl-carousel").owlCarousel({
			items:4,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			animateOut: 'slideOutDown',
			animateIn: 'flipInX',
			smartSpeed:1000,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:false,
				},
				576:{
					items:3,
					nav:false,
				},
				768:{
					items:4,
					nav:false,
				},
				1100:{
					items:5,
				}
			}
		});
		var owl = $('#testimonial-owl-carousel');
			owl.owlCarousel({
				items:1,
				loop:true,
				margin:10,
				autoplay:true,
				autoplayTimeout:5000,
				smartSpeed:2000,
			});
			var owl = $('#loan-owl-carousel-1');
			owl.owlCarousel({
				items:6,
				loop:true,
				margin:10,
				URLhashListener:true,
				startPosition: 'URLHash',
				responsiveClass:true,
				responsive:{
					0:{
						items:2,
						nav:false,
					},
					768:{
						items:4,
						nav:false
					},
					992:{
						items:6,
						nav:false
					}
				}
			});
			var owl = $('#loan-owl-carousel-2');
			owl.owlCarousel({
				items:1,
				margin:10,
				autoplay:true,
				autoplayTimeout:6000,
				autoplayHoverPause:true,
				URLhashListener:true,
				startPosition: 'URLHash',
			});			
		/* ====Active Start ===== */
		$('#loan-owl-carousel-1').on('click', 'a',function(){
			$('#loan-owl-carousel-1 a.active').removeClass('active');
			$(this).addClass('active');
		});
		/* ====Active Start ===== */
		$('#main-manu').on('click', 'ul li a',function(){
			$('#main-manu ul li a.active').removeClass('active');
			$(this).addClass('active');
		});
		/* === UPPER BUTTON SCROLL START === */
		$(window).scroll(function(){
			var x = $(window).scrollTop();
			
			if(x >1000){
				$('#upper').fadeIn(1000);
				
			}else{
				$('#upper').fadeOut(1000);
			}
		});
		$('#upper').click(function(){
			$('html').animate({scrollTop: 0},2000);
		});
});