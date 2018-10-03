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
    

});