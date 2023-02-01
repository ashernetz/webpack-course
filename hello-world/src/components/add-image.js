import Keychron from '../assets/keychronk8.webp'
import altText from './altText.txt'

export function addImage() {
  const img =document.createElement('img');
  img.alt = altText;
  img.width = 300;
  img.src = Keychron;
  const body = document.querySelector('body');
  body.appendChild(img);
}
