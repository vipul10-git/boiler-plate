require('webpack-hot-middleware/client');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './appContainer'
import store from './store';

const rootNode = document.getElementById('app');
ReactDOM.render(<App store={store}/>, rootNode);


if (process.env.NODE_ENV === 'development' && module['hot']) {
    module['hot'].accept();
}
