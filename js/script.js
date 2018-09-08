$(function() {
  // Current year for the footer copyright
  $('#year').text(new Date().getFullYear());

  // animate on scroll
  new WOW().init();
});

/* =========================================
               BS Popover    
============================================ */
$(function() {
  $('[data-toggle="popover"]').popover({
    placement: 'top',
    trigger: 'hover',
    html: true,
    content:
      '<div class="media"><img src="img/services/medicinary.jpg" class="media-object" alt="Medicinary Box"></div>'
  });
});

/* =========================================
               Navigation   
============================================ */
// Smooth Scrolling
$(function() {
  $('a.nav-link').click(function(event) {
    event.preventDefault();

    var section_id = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1250,
      'easeInOutExpo'
    );
  });
});

// Close mobile menu on click
$(function() {
  $('.navbar-collapse ul li a').on('click touch', function() {
    $('.navbar-toggler').click();
  });
});

/* =========================================
               Responsive Tabs
============================================ */
$(function() {
  $('#naturopathic-medcine-tabs').responsiveTabs({
    animation: 'slide'
  });
});

/* =========================================
               Home Owl Carousel
============================================ */
$(function() {
  $('#home-carousel').owlCarousel({
    autoHeight: true,
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 1
      }
    }
  });
});

/* =========================================
               Testimonials
============================================ */
$(function() {
  $('#testimonial-slider').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoHeight: true,
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left fa-2x"></i>',
      '<i class="fas fa-angle-right fa-2x"></i>'
    ]
  });
});

/* =========================================
            Magnifier
============================================ */
$(function() {
  $('#office-photos-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});
