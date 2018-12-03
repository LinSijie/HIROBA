import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { fetchPostsMiddleware, fetchPostMiddleware } from './middlewares/fetchMiddleware';
// import fetchPost from './middlewares/fetchPost';

const initStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(fetchPostsMiddleware, fetchPostMiddleware))
    );
};

export default initStore;