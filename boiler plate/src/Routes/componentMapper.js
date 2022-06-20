import React, {lazy} from 'react';
import Home from '../containers/Home';
import Home2 from '../containers/Home2';
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