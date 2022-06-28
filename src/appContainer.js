import React from 'react';
import RouterConfig from './Routes';
import {Provider} from 'react-redux';
const appContainer = ({store})=>{
    return(
        <Provider store={store}>
            <RouterConfig />
        </Provider>
    )   
}
export default appContainer;
