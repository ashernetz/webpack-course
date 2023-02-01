import { helloWorld } from './components/hello-world';
import { addImage } from './components/add-image';
import HelloWorldBtn from './components/hello-world-button/hello-world-btn';
import Heading from './components/heading/heading';
import _ from 'lodash';

// helloWorld();
addImage();

const heading = new Heading();
const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render();
heading.render(_.upperFirst('hello World'));

if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
} else {
  console.log('development mode');
}
