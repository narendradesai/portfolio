// Preloader JS
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#main-preloader").style.visibility = "visible";
  } else {
    // setTimeout(function() {
    document.querySelector("#main-preloader").style.display = "none";
    document.querySelector("#particles-js").style.zIndex = 0;
    document.querySelector("body").style.visibility = "visible";
    // }, 1000);
  }
};
$(document).ready(function() {
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
  var mySwiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pager",
      clickable: true
    },
    // centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    // },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar"
    // },
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 3000,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    mousewheel: false,
    shortSwipes: true
    // mousewheel: {
    //   sensitiwity: 0.5,
    // }
  });

  // Smooth scrolling
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
        }
      }
    });

  // Maps
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, "load", init);

  function init() {
    var mapOptions = {
      zoom: 12,
      // Map Center
      center: new google.maps.LatLng(15.6885175, 73.922147), // Pernem
      // Maps style
      styles: [
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#000000"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#e5c163"
            }
          ]
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c4c4c4"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#e5c163"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 21
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.business",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#e5c163"
            },
            {
              lightness: "0"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#e5c163"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#575757"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#2c2c2c"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#999999"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            }
          ]
        }
      ]
    };
    var mapElement = document.getElementById("contact-map");
    var map = new google.maps.Map(mapElement, mapOptions);
    // Add marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(15.6877849, 73.8180324), // Virnoda Goa
      map: map,
      title: "Snazzy!"
    });
  }
  
  // Particle Js
  var particleJson = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": false,
          "value_area": 400
        }
      },
      "color": {
        "value": "#f7ac54"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(particleJson));
  particlesJS.load('particles-js', jsonUri, function() {
  });
});
