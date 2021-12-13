import axios from "axios";
import {
  SET_LOADING,
  SET_ERROR,
  GET_ARTICLES,
} from "../constants/action-types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
async function getData() {
  let response = await axios.get(BASE_URL);

  /* filter unwanted posts */
  // const filteredPosts = response.data.filter(post => post.userId === 1);
  // setMyPosts(filteredPosts);

  return response;
}

export function getArticles() {
  /* 911 dispatcher: someone that can listen to your request, process it, and call the right people */

  return async function (dispatch) {
    // dispatch loading event
    dispatch({ type: SET_LOADING, payload: true });
    let response;
    try {
      response = await getData();
      // axios puts the response in data key

      // dispatch a GET_ARTICLES event, which will be accepted by the reducer
      dispatch({ type: GET_ARTICLES, payload: response.data });
    } catch (err) {
      console.log(err.message);
      //dispatch a SET_ERROR event, which will be accepted by the reducer
      dispatch({ type: SET_ERROR, payload: err.message });
    }
  };
}

export function getArticlesById(userId) {
  return function(dispatch) {
/* TODO: Without making a new API call, return only the articles, that match the userId provided.*/

  };
}
