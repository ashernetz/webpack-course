import Keychron from '../../assets/keychronk8.webp';
import './kiwi.scss';
class KeyboardImg {
  render() {
    const img = document.createElement('img');
    img.src = Keychron;
    img.alt = 'keychron K8 the best keyboard';
    img.classList.add('keyboard-image');
    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default KeyboardImg;
