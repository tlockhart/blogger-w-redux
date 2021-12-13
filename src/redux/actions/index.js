import axios from "axios";
import {GET_ARTICLES} from "../constants/action-types";

async function getData() {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    /* filter unwanted posts */
    // const filteredPosts = response.data.filter(post => post.userId === 1);
    // setMyPosts(filteredPosts);

    return response;
  }
  
  export function getArticles() {
    /* 911 dispatcher: someone that can listen to your request, process it, and call the right people */

    return async function (dispatch){
        let response;
        try {
            response = await getData();
            // axios puts the response in data key
            // console.log(response.data);
            
            // set posts to respose.data
            // setPosts(response.data);
      
          } catch (err) {
            console.log(err);
          }
        //   return response;

        // dispatch a GET_ARTICLES event, which will be accepted by the reducer
        dispatch({type: GET_ARTICLES, payload: response.data});
    };
    
}