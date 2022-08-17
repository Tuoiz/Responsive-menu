let hamburger= document.querySelector('.hamburger');
let sliding= document.querySelector('.menu');
let close=document.querySelector('#close');


hamburger.addEventListener('click',slider);
let show=true;
function slider() {
  if (show) {
    // first.style.display='none';
    sliding.style.left=`${0}px`;
    close.classList.toggle('is-active')
    show=false;
  } else {
    sliding.style.left=`${-300}px`;
    close.classList.toggle('is-active')
    show=true;
  }
};









