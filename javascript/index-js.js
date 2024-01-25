$(document).ready(function () {
  Accordion();
  Slider();
});

function Accordion() {

  $(".accordion").click(function () {

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().removeClass("show");
    } else {
      $(".panel").removeClass("show");
      $(".accordion").removeClass("active");
      $(this).addClass("active");
      $(this).next().addClass("show");
    }
  });
}

function Slider() {


  let slides = $(".slides").toArray();
  let currentDot = $(".dot").toArray();
  let currentDesc = $(".titelSlider").toArray();
  let index = 0;
  let slidevw = 0;
  function activeCrurrent() {

    $(currentDot[index]).addClass("active");
    $(currentDesc[index]).addClass("test");
    $(currentDesc[index]).next().addClass("test");
  }
  activeCrurrent();

  function slideAnim() {
    $(".headerSlider").css("transform", "translateX(-" + slidevw + "vw) ");
    $(".dot").removeClass("active");
    $(".titelSlider").removeClass("test");
    $(".titelSlider").next().removeClass("test");
    activeCrurrent();
  }

  $(".next").click(function () {                //Click auf den Next Button
    index++;
    slidevw += 100;
    if (index + 1 > $(".slides").length) {      //Zurücksetzen des Index wenn letztes Element Erreicht
      index = 0;
      slidevw = 0;
    }
    slideAnim();
  });

  $(".prev").click(function () {                //Click auf den Prev Button
    index--;
    slidevw -= 100;
    if (index < 0) {                            //Zurücksetzen des Index wenn erstes Element Erreicht
      index = slides.length - 1;
      slidevw = (100 * (slides.length - 1));
    }
    slideAnim();
  });
}