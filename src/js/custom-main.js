$(document).ready(function() {
  // $("body").jpreLoader({
  //   preMainSection: "#main-preloader",
  //   prePerText: ".preloader-percentage-text",
  //   preBar: ".preloader-bar"
  // });
  // console.log('sfsf');
  var body = $('body');

  $('nav .navbar-toggle').on('click', function() {
    $('nav .navbar-content').slideToggle();
    $(this).find('span').toggleClass('fa-times');
    $(this).find('span').toggleClass('fa-bars');
  });
  // var item = document.getElementsByClassName('nav-wrapper')[0];
  // var parallaxInstance = new Parallax(item, {
  //   relativeInput: true
  // });
  // parallaxInstance.friction(0.2, 0.2);
});
