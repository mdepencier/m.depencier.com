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

$("#scroll-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("#footerscroll").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("#projectsbutton").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#scroll-to-projects").offset().top + offset
    }, "slow");
});

$("#aboutbutton").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#scroll-to-about").offset().top + offset
    }, 2000);
});

$("#contactbutton").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#scroll-to-contact").offset().top + offset
    }, 2000);
});

$(document).ready(function() {
    $('.carousel').carousel({
      interval: 5000
    })
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