import React, {Suspense} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import componentMapper from './componentMapper';
const RouterConfig = () =>{
    return(
        <>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
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
            </Suspense>
        </BrowserRouter>
        </>

    )
}

export default RouterConfig;
