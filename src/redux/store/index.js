/* Grab methods from redux*/
import{createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

/*storeEnhancers allows us to use the redux Devtools chrome extension */
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* create store, with store Enhancer and redux thunk */
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));

export default store;
