const slides = document.querySelectorAll('.service-slide');
let i = 0;

setInterval(() => {
  slides[i].classList.remove('active');
  slides[i].classList.add('exit');
  i = (i + 1) % slides.length;
  slides[i].classList.remove('exit');
  slides[i].classList.add('active');
}, 10000);
