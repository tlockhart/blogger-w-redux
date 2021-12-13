import {
  SET_LOADING,
  SET_ERROR,
  GET_ARTICLES,
} from "../constants/action-types";

const initialState = {
  articles: [],
  error: "",
  loading: false,
  // error: "The system is down",
};

/* Takes a state in, manipulates the state, and gets that state out*/
function rootReducer(state = initialState, action) {
  /* If action.type equals "GET_ARTICLES" then create a new state object, take the existing state and add it in and overwirte articles, with the data I gave you.*/
  if (action.type === GET_ARTICLES) {
    console.log(action.payload);
    /* create new state object */
    return Object.assign({}, state, { articles: action.payload, 
    loading: false});
  }
  if (action.type === SET_ERROR) {
    /* create new state object */
    return Object.assign({}, state, { error: action.payload });
  }
  if (action.type === SET_LOADING) {
    /* create new state object */
    return Object.assign({}, state, { loading: action.payload });
  }
  //Executes if state does not equal GET_ARTICLES
  return state;
}

export default rootReducer;
