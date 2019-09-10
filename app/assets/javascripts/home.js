$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });

  $("#home").on('click', function() {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(".home").offset().top
    },'slow');
  });

  $("#services").on('click', function() {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(".services").offset().top
    },'slow');
  });

  $("#events").on('click', function() {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(".events").offset().top
    },'slow');
  });

  $("#gallery").on('click', function() {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(".gallery").offset().top
    },'slow');
  });

  $("#about_us").on('click', function() {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(".about_us").offset().top
    },'slow');
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})