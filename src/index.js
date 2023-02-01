import { helloWorld } from './hello-world';
import {addImage} from './add-image';
import HelloWorldBtn from './components/hello-world-btn';
import Heading from './components/heading/heading';
import _ from 'lodash';
console.log('here?s')

// helloWorld();
addImage();

const heading = new Heading();
const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render();
heading.render(_.upperFirst('hello World'));

if(process.env.NODE_ENV === 'production') {
  console.log('production mode')
} else {
  console.log('development mode')
}
