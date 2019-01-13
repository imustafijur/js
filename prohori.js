jQuery(document).ready(function(){
    
// Mobile Menu
var $menu = jQuery('header#main_header #menus > .menu');
jQuery(document).mouseup(function (e) {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('active');
  }
 });
jQuery('#main_header #menus .menu .mobile_menu i.fas').click(function () {
  $menu.toggleClass('active');
});




// Popup Video
jQuery("div#video_section .video_image").click(
  function () {
     var Yourubevideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MPGzrR4WLfs?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
     var newDiv = Yourubevideo;
     jQuery("div#video_section #video_popup").append(newDiv);
		jQuery('div#video_section').addClass('active');
  }
)
var $video_iframe = jQuery('div#video_section div#video_popup iframe');
var $video_popup = jQuery('div#video_section');
jQuery(document).mouseup(function (e) {
   if (!$video_iframe.is(e.target) // if the target of the click isn't the container...
   && $video_iframe.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $video_popup.removeClass('active');
     jQuery('div#video_section div#video_popup iframe').remove();
  }
});






// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('#main_header').outerHeight();
jQuery(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = jQuery(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        jQuery('#main_header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('#main_header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}







// Our Client Carousel
jQuery('#our_client-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
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
});


// top_client-carousel
jQuery('#top_client-carousel').owlCarousel({
    loop:true,
    margin:27,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});



jQuery(function() {
    var header =jQuery("#scrollto_top");
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('hide').addClass("show");
        } else {
            header.removeClass("show").addClass('hide');
        }
    });
});




});



