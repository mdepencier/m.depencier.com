var navbar = $('nav');
var didScroll = false;
var menuOpen = false;

$(window).scroll(function(){
    didScroll = true;
});

$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    console.log("setting opacity 1");
    navbar.css("opacity", "1");
    navbar.css("background", "#111");
    menuOpen = true;
});

$('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
    didScroll = true;
    menuOpen = false;
});

$('.navbar-toggle').on('click', function(){
    navbar.css("opacity", "1");
});

setInterval(function(){
    if(didScroll){
        var offset = $('h1').offset().top;
        if($(window).scrollTop() >= offset - 70){
            navbar.css("background-color", "#222");
        } else {
            navbar.css("background-color", "transparent");
        }

        didScroll = false;
    }
}, 250);