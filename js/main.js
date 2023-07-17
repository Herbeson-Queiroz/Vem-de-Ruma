jQuery(document).ready(function($) {
    //FIXAR O HEADER
    window.onscroll = function(){
        if (window.pageYOffset > 140) {
            $('#header').addClass('ativo')
        } else {
            $('#header').removeClass('ativo')
        }
    }
});

// ==================ANIMAÇÃO QUE MOSTRA OS ATINGIMENTOS DA SEÇÃO ABAICO DE AÇÕES=============
const animatedNumber1 = document.getElementById('animatedNumber1');
const animatedNumber2 = document.getElementById('animatedNumber2');
const animatedNumber3 = document.getElementById('animatedNumber3');
const animatedNumber4 = document.getElementById('animatedNumber4');

function animaNumero(animatedNumber, numeroFinal) {
// const animatedNumber = document.getElementById(animatedNumber);
const finalNumber = numeroFinal;
const duration = 3000; // 3 segundos
const interval = 10; // intervalo de tempo entre cada incremento

let currentNumber = 0;
let increment = (finalNumber / duration) * interval;
let count = 0;

function updateNumber() {
  if (count >= duration) {
    clearInterval(timer);
  }
  currentNumber += increment;
  animatedNumber.textContent = Math.round(currentNumber);
  count += interval;
}

const timer = setInterval(updateNumber, interval);
}

animaNumero(animatedNumber1, 598);
animaNumero(animatedNumber2, 73);
animaNumero(animatedNumber3, 4);
animaNumero(animatedNumber4, 7);

// ========================CARROSSEL DE DEPOIMENTOS=============

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });