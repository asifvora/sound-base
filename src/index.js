import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();