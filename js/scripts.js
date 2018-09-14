$(document).ready(function() {
    
    //Sidenav
    $('.button-collapse').sideNav();
    
    //Sidenav Scrollbar Init
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    Ps.initialize(sideNavScrollbar);
    
    //$('#processLinks a:hover').addClass('animated rubberBand');
});