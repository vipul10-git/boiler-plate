import React from 'react';
import loadable from '@loadable/component'
const Home = loadable(() => import("../pages/Home"));
const Home2 = loadable(() => import("../pages/Home2"));
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