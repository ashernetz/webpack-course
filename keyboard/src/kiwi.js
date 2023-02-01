import Heading from './components/heading/heading';
import KeyboardImg from './components/keyboard/keyboard-img'
import _ from "lodash";

const heading = new Heading();
const keyboard = new KeyboardImg();
heading.render(_.upperFirst('Keyboard'));
keyboard.render();
import ('HelloworldApp/helloWorldButton').then(HelloWorldButtonModule=>{
  console.log(HelloWorldButtonModule)
})

/*fetch('HelloworldApp/helloWorldButton')
    .then((data) => console.log(data));*/
