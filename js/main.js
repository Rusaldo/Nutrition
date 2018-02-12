$(document).ready(function(){

  // HEADER MENU
  $(".hamburger").click(function(){
    $(this).toggleClass("hamburger_active");
    $(".menu__link").toggleClass("menu__link_active");
  });

  $(".menu__link").click(function(){
    $(".menu__link").removeClass("menu__link_active");
    $(".hamburger").removeClass("hamburger_active");
  });

});
