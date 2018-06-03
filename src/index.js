import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();