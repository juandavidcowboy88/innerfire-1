import React from 'react';
import ReactDOM from 'react-dom';
import data from './api.json'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data = {data} />, document.getElementById('root'));
registerServiceWorker();
