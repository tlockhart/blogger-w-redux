// import logo from './logo.svg';
// import './App.css';
import Post from "./components/Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts/Posts";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "./redux/actions/index";


function App() {

  const posts = useSelector((state)=> state.articles);

  //Create dipatch with useDispatch
  const dispatch = useDispatch();

  async function getData() {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    /* filter unwanted posts */
    const filteredPosts = response.data.filter(post => post.userId === 1);
    setMyPosts(filteredPosts);

    return response;
  }

  // const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  // Call GET_ARTICLES DISPATCHER, when function loads
  useEffect(() => {
    dispatch(getArticles());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  /*useEffect(async () => {
    try {
      const response = await getData();
      // axios puts the response in data key
      // console.log(response.data);
      
      // set posts to respose.data
      setPosts(response.data);

    } catch (err) {
      console.log(err);
    }
  }, []);*/

  return (
    <div className="container">
      <div className="row">
        <Posts posts={posts} title="All Posts"/>
        {/* Duplicate */}
        {/* <Posts posts={myPosts} title="My Posts"/>*/}
      </div> 
    </div>
  );
}

export default App;
