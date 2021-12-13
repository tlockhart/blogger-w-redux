import { GET_ARTICLES } from "../constants/action-types";

const initialState = {
  articles: [],
};

/* Takes a state in, manipulates the state, and gets that state out*/
function rootReducer(state = initialState, action) {
  /* If action.type equals "GET_ARTICLES" then create a new state object, take the existing state and add it in and overwirte articles, with the data I gave you.*/
  if (action.type === GET_ARTICLES) {
    console.log(action.payload);
    /* create new state object */
    return Object.assign({}, state, { articles: action.payload });
  }
  //Executes if state does not equal GET_ARTICLES
  return state;
}

export default rootReducer;
