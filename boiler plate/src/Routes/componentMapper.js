import React from 'react';
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
const ComponentList = [
    {
        component: <Home/>,
        path: '/home',
        exact:true
    },
    {
        component: <Home2/>,
        path: '/home2',
        exact:true
    }
]
export default ComponentList