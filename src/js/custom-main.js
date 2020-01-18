$(document).ready(function() {
  // $("body").jpreLoader({
  //   preMainSection: "#main-preloader",
  //   prePerText: ".preloader-percentage-text",
  //   preBar: ".preloader-bar"
  // });
  // console.log('sfsf');
  var $win = $(window);
  var winH = $win.height() - 20;

  // Nav toggle js
  $("nav .navbar-toggle").on("click", function() {
    $("nav .navbar-content").slideToggle();
    $(this)
      .find("span")
      .toggleClass("fa-times");
    $(this)
      .find("span")
      .toggleClass("fa-bars");
  });
  var nav = $("nav.top-fixed-nav");
  // On scroll show nav
  $win.on("scroll", function() {
    var scrollPos = $(document).scrollTop();
    $(this).scrollTop() > winH
      ? nav.removeClass("hide-nav")
      : nav.addClass("hide-nav");
    $("nav.top-fixed-nav .nav-link").each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("nav.top-fixed-nav .nav-item").removeClass("active");
        currLink.parents(".nav-item").addClass("active");
      } else {
        currLink.parents(".nav-item").removeClass("active");
      }
    });
  });
  // Nav Js Ends

  // Portfolio slider js
  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 400,
    spaceBetween: 100
});
});
