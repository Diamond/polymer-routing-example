import './components/base.html';
import './components/main-app.html';
//import './app.css';

const render = (element, target) => {
  document
    .querySelector(target)
    .appendChild(
      document.createElement(element)
    );
};

render('main-app', '#App');
