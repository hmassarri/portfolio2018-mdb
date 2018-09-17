$(document).ready(function() {
    
    //Sidenav
    $('.button-collapse').sideNav();
    
    //Sidenav Scrollbar Init
    var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    Ps.initialize(sideNavScrollbar);
    
    $('.sticky').sticky({
        topSpacing: 168,
        zIndex: 2,
        stopper: ""
    });
    
});