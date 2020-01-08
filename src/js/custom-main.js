$(document).ready(function() {
  // $("body").jpreLoader({
  //   preMainSection: "#main-preloader",
  //   prePerText: ".preloader-percentage-text",
  //   preBar: ".preloader-bar"
  // });
  // console.log('sfsf');
  var body = $('body');
  var $win = $(window);
  var winH = $win.height();  

  $('nav .navbar-toggle').on('click', function() {
    $('nav .navbar-content').slideToggle();
    $(this).find('span').toggleClass('fa-times');
    $(this).find('span').toggleClass('fa-bars');
  });
  // .slideToggle($(this).scrollTop() > winH );
  var nav = $('nav.top-fixed-nav');
  $win.on("scroll", function () {
    nav.slideToggle($(this).scrollTop() > winH );
});
// .on("resize", function(){ // If the user resizes the window
//    winH = $(this).height(); // you'll need the new height value
// });
  // var item = document.getElementsByClassName('nav-wrapper')[0];
  // var parallaxInstance = new Parallax(item, {
  //   relativeInput: true
  // });
  // parallaxInstance.friction(0.2, 0.2);
});
