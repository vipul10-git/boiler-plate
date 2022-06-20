import React from 'react';
require('webpack-hot-middleware/client');
import App from './appContainer'
import store from './store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App store={store}/>);

if (process.env.NODE_ENV === 'development' && module['hot']) {
    module['hot'].accept();
}
