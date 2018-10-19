$(document).ready(function() {
    
    //Sidenav
    $('.button-collapse').sideNav();
    
    // ScrollSpy Sidenav Scrollbar Init
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    Ps.initialize(sideNavScrollbar);
    
    $('.sticky').sticky({
        topSpacing: 168,
        zIndex: 2,
        stopper: ""
    });
    
    $('.process-spacer-start').hide();
	
	$(window).scroll(function() {
		if ( $(this).scrollTop() <= 0 ) {
			//alert("true");
			$('#startPosition').removeClass('active').addClass('active');
		}
	});
    

    // Change color on the nav bar
    $(window).scroll(function() {
        //$('.carousel, .carousel-slider').css('opacity', 1 - $(window).scrollTop() / 250);
        //$('.card1').css('opacity', 1 - $(window).scrollTop() / $('.card1').height() / 2);

        if ($(window).scrollTop() > 30) {
            $('#topnav').removeClass('white').addClass('black').fadeIn(100);
            $('.fa-linkedin, .fa-apple, .fa-github, .fa-instagram, .fa-bandcamp, .fa-soundcloud').removeClass('black-text').addClass('white-text').fadeIn(100);
            $('.breadcrumb-dn').removeClass('black-text').addClass('white-text').fadeIn(100);
            //$('.link').removeClass('black-text').addClass('white-text');
            //$('.button-collapse').removeClass('black-text').addClass('white-text');
            //$('.side-nav').removeClass('white').addClass('pink accent-2');
        } else {
            $('#topnav').addClass('white').removeClass('black').fadeIn(100);
            $('.fa-linkedin, .fa-apple, .fa-github, .fa-instagram, .fa-bandcamp, .fa-soundcloud').removeClass('white-text').addClass('black-text').fadeIn(100);
            $('.breadcrumb-dn').removeClass('white-text').addClass('black-text').fadeIn(100);
            //$('.link').removeClass('white-text').addClass('black-text');
            //$('.button-collapse').removeClass('white-text').addClass('black-text');
            //$('.side-nav').removeClass('pink accent-2').addClass('white');
        }

    });
    
});