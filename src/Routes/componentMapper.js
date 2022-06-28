import React,{lazy} from 'react';
// import Home from '../pages/Home';
const Home = lazy(() => import("../pages/Home"));
const Home2 = lazy(() => import("../pages/Home2"));
// import Home2 from '../pages/Home2';
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