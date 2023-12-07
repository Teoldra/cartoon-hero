$(document).ready(function () {
  Accordion();
  Slider();
});

function Accordion(){

  $(".accordion").click(function () {
    var acc = $(this);
    var panel = $(this).next();
    if (panel.hasClass('show')) {
      panel.removeClass('show');
      acc.removeClass("active");
    } else {
      var active_panel = $('.panel.show');
      var active_acc = $(".accordion.active");
      active_acc.removeClass("active");
      active_panel.removeClass('show');
      panel.addClass("show");
      acc.addClass("active");
    }
    
  });
}

function Slider(){

  let slides = $(".slides").toArray();
  let currentDot = $(".dot").toArray();
  let index = 0;
  $(slides[0]).css("display","block");
  $(currentDot[0]).addClass("active");

  $(".next").click(function(){


    
    if(index +1  < slides.length){
      $(currentDot[index]).removeClass("active")
      $(slides[index]).css("display","none")
      index++;
      $(currentDot[index]).addClass("active")
      $(slides[index]).css("display","block")
    }
    else{
      $(currentDot[index]).removeClass("active")
      $(slides[index]).css("display","none")
      index = 0
      $(currentDot[index]).addClass("active")
      $(slides[index]).css("display","block")
    }

  });

  $(".prev").click(function(){

    if(index  > 0){
      $(currentDot[index]).removeClass("active")
      $(slides[index]).css("display","none")
      index--;
      $(currentDot[index]).addClass("active")
      $(slides[index]).css("display","block")
    }
    else{
      $(currentDot[index]).removeClass("active")
      $(slides[index]).css("display","none")
      index = 2
      $(currentDot[index]).addClass("active")
      $(slides[index]).css("display","block")
    }
  });

  
}

