// Scroll animation
ScrollOut({});

// Mega Menu
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });
  return false;
});

$(".dropdown-toggle").click(function(){
  $(this).toggleClass("crosser");
});

// Mega Menu
$(".bar").click(function(){
  $(".nav ul").toggleClass("open");
  $(".nav").toggleClass("nav-height");
});


// Gallery option
$(document).ready(function() {
  $(".lightgallery").lightGallery();
});

// Map loader
$(document).ready(function() {
  $(".header-load").load("header.html");
  $(".footer-load").load("footer.html");
  $(".s-loader").load("./includes/images/svg/s.svg");
});

// Add class on scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 600) {
    $("header").addClass("fixed-header");
  }
  else {
    $("header").removeClass("fixed-header");
  }
});

$(".chat-option").click(function(){
  $(".popup").toggleClass("d-none");
});


// Slider
$('.carousel').carousel({
  interval: 6000,
  pause: false
})

// Remove Preloader
$(document).ready(function () {
  setTimeout(function() {
      $(".loader").addClass("d-none");
  }, 2000);
});
