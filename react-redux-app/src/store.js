import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

const initState = () => {
    return createStore(
        rootReducer
    );
};

export default initState;