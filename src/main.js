const btnShare = document.querySelector ('.button__share');
const cardShare = document.querySelector(".card__share")

btnShare.addEventListener ('click' , () => {
  cardShare.classList.toggle('hidden');
})