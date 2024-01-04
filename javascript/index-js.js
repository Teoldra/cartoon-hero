$(document).ready(function () {
  Accordion();
  Slider();
});

function Accordion() {

  $(".accordion").click(function () {

    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).next().removeClass("show");
    } 

    else{
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
  let index = 0;
  function ShowSlide(){                         //Blendet Slide ein anhand des aktuellen Index 
    $(slides[index]).show();
    $(currentDot[index]).addClass("active");
  }
  function HideSlide(){                         //Blendet alle Slides aus
    $(".slides").hide();
    $(".dot").removeClass("active");
  }

  function NextSlide(){
    HideSlide();
    ShowSlide();
  }
  ShowSlide();

  //Hier Startet die Click Funktion!

  $(".next").click(function () {                //Click auf den Next Button
    index++;
    if (index + 1 > $(".slides").length) {      //Zurücksetzen des Index wenn letztes Element Erreicht
      index = 0
    }
    NextSlide();
  });

  $(".prev").click(function () {                //Click auf den Prev Button
    index--;
    if (index < 0) {                            //Zurücksetzen des Index wenn erstes Element Erreicht
      index = slides.length - 1;
    }
    NextSlide();
  });
}
