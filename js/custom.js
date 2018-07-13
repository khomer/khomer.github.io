/*====================================================
                        SERVICES
====================================================*/
$(function() {
  // animate on scroll
  new WOW().init();
});

/*====================================================
                        TEAM LEADERS
====================================================*/
$(function() {
  $('#team-members').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});

/*====================================================
                        PRODUCTS
====================================================*/
// $(function () {
//
//     $("#carousel-products").owlCarousel({
//         items: 1,
//         autoplay: true,
//         smartSpeed: 700,
//         loop: true,
//         autoplayHoverPause: true
//     });
// });

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      // hide nav
      $('nav').removeClass('cafe-slowly-top-nav');
      $('#back-to-top').fadeOut();
    } else {
      // show nav
      $('nav').addClass('cafe-slowly-top-nav');
      $('#back-to-top').fadeIn();
    }
  });
});
// Smooth scrolling
$(function() {
  $('a.smooth-scroll').click(function(event) {
    event.preventDefault();

    // get/return id like #about, #team and etc
    var section = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(section).offset().top - 84
      },
      1250,
      'easeInOutExpo'
    );
  });
});

// Close mobile menu on click
$(function() {
  $('.navbar-collapse ul li a').on('click touch', function() {
    $('.navbar-toggle').click();
  });
});
