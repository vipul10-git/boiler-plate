import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './mainReducer';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import rootEpic from './rootEpic';
let composeEnhancers;

const epicMiddleware = createEpicMiddleware();
if(process.env.NODE_ENV !== 'production'){
    composeEnhancers = compose(composeWithDevTools(applyMiddleware(epicMiddleware,logger)))
}else{
    composeEnhancers = compose(applyMiddleware());
}

const store = createStore(rootReducer, composeEnhancers);

epicMiddleware.run(rootEpic);
if (module.hot) {
    module.hot.accept('./mainReducer', () => {
      store.replaceReducer(rootReducer());
    });
}

export default store;
