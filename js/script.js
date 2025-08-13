// ===================== Header =====================
$(document).scroll(function () {
  if ($(window).scrollTop() > 110) {
    $('header').css({
      'backdrop-filter': 'blur(10px)',
      'background-color': 'rgba(255, 255, 255, 0.300)',
      'position': 'fixed',
      'height': '100px',
      'box-shadow': '0 5px 60px #555'
    });
  } else {
    $('header').css({
      'background-color': 'white',
      'position': 'static',
      'height': '110px',
      'box-shadow': '0 5px 60px #555'
    });
  }
});

// ===================== Slide Menu =====================
$(".menu").mousedown(function () {
  $(this).css('border-radius', '50%');
}).mouseup(function () {
  $(this).css('border-radius', '20%');
});

$(".menu").click(function (e) {
  e.preventDefault();
  $('.menuSide').toggle(500);
});

// ===================== Slider =====================
var slideIndex = 0;
showSlides();

function showSlides() {
  var $slides = $(".mySlides");
  var $dots = $(".dot");

  $slides.hide();
  slideIndex++;
  if (slideIndex > $slides.length) {
    slideIndex = 1;
  }

  $dots.removeClass("active");
  $slides.eq(slideIndex - 1).show();
  $dots.eq(slideIndex - 1).addClass("active");

  setTimeout(showSlides, 10000);
}

// ===================== wow js =====================
new WOW().init();
// ====================== Gallary =============================
$(document).ready(function () {
  $(".myFancyGallery img").click(function () {
    $(".myImageModal").fadeIn();
    $("#myLargeImage").attr("src", $(this).attr("src"));
  });

  $(".myCloseBtn, .myImageModal").click(function (e) {
    if (e.target !== $(".myModalContent")[0]) {
      $(".myImageModal").fadeOut();
    }
  });
});

