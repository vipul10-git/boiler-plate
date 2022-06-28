import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home2 from '../pages/Home2';
import componentMapper from './componentMapper';
const RouterConfig = () =>{
    return(
        <>
        <BrowserRouter>
            <Routes>
            <Route
                    path='/'
                    caseSensitive={true}
                    element={<Home2/>}
                    />
            {
                React.Children.toArray(componentMapper.map(nav => (
                    <Route
                    path={nav.path}
                    caseSensitive={nav.exact}
                    element={nav.component}
                    />
                )))
            }
            </Routes>
        </BrowserRouter>
        </>

    )
}

export default RouterConfig;
