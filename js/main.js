$(document).ready(function () {
  $(".m22-slide_dots span").click(function () {
    $(this).toggleClass("on");
  });

  $(".password-board li").click(function () {
    $(this).toggleClass("active");
  });

  //KP-APP-D-SC-1001.html
  //Lightslider code
  $(".slide-contain.item").lightSlider({
    mode: "slide",
    autoWidth: false,
    item: 1,
    slideMargin: 0,
    speed: 500,
    loop: false,
    gallery: false,
    controls: false,
  });

  //KP-APP-D-SC-3000.html KP-APP-D-SC-3001.html
  //KP-APP-D-SC-3001-1.html KP-APP-D-SC-3001-2.html
  //앱 바로가기 활성화 비활성화 기능
  // App image Change Code
  $(".app-bg img").on("click", function () {
    $(this).attr("src", $(this).attr("src").replace("_on", "_off"));
  });

  //KP-APP-D-SC-6006.html
  // Mobile Menu Accordion Effect
  $(".notice-icon").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".notice-details").slideUp(200);
      $(this).children(1).removeClass("rotate");
      $(".notice-icon .item-txt").removeClass("rotate");
    } else {
      $(".notice-icon .item-txt").removeClass("active");
      $(".notice-icon .item-txt").removeClass("rotate");
      $(this).addClass("active");
      $(".notice-details").slideUp(200);
      $(this).siblings(".notice-details").slideDown(200);
      $(this).children(1).addClass("rotate");
    }
  });

  //KP-APP-D-SC-6007.html
  // Mobile Menu Accordion Effect
  $(".qna-tit").click(function () {
    console.log($(this).children());
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".qna-txt").slideUp(200);
      $(this).children(1).removeClass("rotate");
      $(".qna-tit").removeClass("rotate");
    } else {
      $(".qna-tit").removeClass("active");
      $(".qna-tit").removeClass("rotate");
      $(this).addClass("active");
      $(".qna-txt").slideUp(200);
      $(this).siblings(".qna-txt").slideDown(200);
      $(this).children(1).addClass("rotate");
    }
  });

  //KP-APP-D-SC-6008.html
  //Lightslider code
  $(".box-slides").lightSlider({
    mode: "slide",
    autoWidth: false,
    item: 1,
    slideMargin: 0,
    speed: 500,
    loop: false,
    gallery: false,
    controls: false,
  });

  // ModalEvent Code
  $(".modal-event").on("click", function () {
    //console.log($(this));
    $(".popup-bg").addClass("on");
  });
});
