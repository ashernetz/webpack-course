import './hello-world-button.scss';
class HelloWorldBtn {
  buttonCssClass = 'hello-world-button';
  render() {
    const button = document.createElement('button');
    button.innerText = 'Hello World';
    button.classList.add('hello-world-button');
    button.onclick = function() {
      const p = document.createElement('p');
      p.innerText = 'hello world';
      console.log(this);
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector('body');
    body.appendChild(button)
  }
}

export default HelloWorldBtn
