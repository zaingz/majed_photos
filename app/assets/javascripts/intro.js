
$(document).on('ready page:load', function () {
   $(".icon").click(function () {
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });

new WOW().init();
   //end od ready
});
