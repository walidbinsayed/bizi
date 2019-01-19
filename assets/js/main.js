jQuery(document).ready(function($){

  //Header fixed JS
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 1){
      $(".header-section").addClass("sticky");
    }
    else {
      $(".header-section").removeClass("sticky");
    }
  });

  //AOS init
  AOS.init({
    duration: 1200,
  })


})
// End of jquery
