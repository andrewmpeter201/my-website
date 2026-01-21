const cards = document.querySelectorAll('.slide-card');
let index = 0;
function showCard() {
  cards.forEach(c => c.classList.remove('active'));
  cards[index].classList.add('active');
  index = (index + 1) % cards.length;
}
setInterval(showCard, 3000);
