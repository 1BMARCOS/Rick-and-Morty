import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleare from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleare)) // esta línea es para poder hacer peticiones a un server
);

export default store;