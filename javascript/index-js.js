$(document).ready(function () {
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
  justin();
});


let index = 1;
$(".prev").click(function () {
  index++;
  justin();
})


/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
*/













function justin(){
  let slides = $(".slides").toArray()
  let slideZaehler = 0;
  slides.forEach((slide) => {
    slideZaehler++;
    if(index == zaehler){
      $(slide).show();
    }else{
      $(slide).hide();
      }
    }
  )
}
