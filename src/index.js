import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Data from './Data';

ReactDOM.render(<App data={Data} />, document.getElementById('root'));
registerServiceWorker();