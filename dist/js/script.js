const navToggler=document.getElementById("nav-toggle");navToggler.addEventListener("click",(function(){document.querySelector(".nav-links").classList.toggle("active")}));let slideIndex=0,slider=document.querySelector(".slider"),slides=slider.querySelector(".slides"),slide=slides.querySelectorAll(".slideimg"),dots=slider.querySelectorAll(".dots > span");function currentslide(e){e>slide.length?e=1:e<1&&(e=slide.length);for(let e=0;e<dots.length;e++){dots[e].classList.remove("active")}slides.style.left=`-${e-1}00%`,dots[e-1].classList.add("active"),slideIndex=e}function showslide(){slideIndex++,slideIndex>slide.length?slideIndex=1:slideIndex<1&&(slideIndex=slide.length);for(let e=0;e<dots.length;e++){dots[e].classList.remove("active")}slides.style.left=`-${slideIndex-1}00%`,dots[slideIndex-1].classList.add("active")}showslide();let interval=setInterval((()=>{showslide()}),4e3);slider.addEventListener("mouseover",(()=>{clearInterval(interval)})),slider.addEventListener("mouseout",(()=>{interval=setInterval((()=>{showslide()}),4e3)})),$(document).ready((function(){$(".home-covidupdate__carousel").owlCarousel({margin:25,loop:!0,autoWidth:!0,responsiveClass:!0,dots:!1,nav:!0,navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],responsive:{490:{center:!1},0:{center:!0}}})})),$(document).ready((function(){$(".home-blogs__carousel").owlCarousel({margin:40,loop:!0,autoWidth:!0,responsiveClass:!0,dots:!1,nav:!0,navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],responsive:{490:{center:!1},0:{center:!0}}})})),$(document).ready((function(){$(".panel__carousel").owlCarousel({margin:35,loop:!0,autoWidth:!0,responsiveClass:!0,dots:!1,nav:!0,navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],responsive:{490:{center:!1},0:{center:!0}}})})),$(document).ready((function(){$(".client__carousel").owlCarousel({margin:40,loop:!0,autoWidth:!0,responsiveClass:!0,dots:!1,nav:!0,navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],responsive:{490:{center:!1},0:{center:!0}}})}));
//# sourceMappingURL=script.js.map