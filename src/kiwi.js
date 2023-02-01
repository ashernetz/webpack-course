import Heading from './components/heading/heading';
import KeyboardImg from './keyboard/keyboard-img'
import _ from "lodash";


const heading = new Heading();
const keyboard = new KeyboardImg();
heading.render(_.upperFirst('Keyboard'));
keyboard.render();
