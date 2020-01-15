import React, { useState } from "react";
import axios from "axios";

const TodosIndex = () => {
  // const [data, setData] = useState({ posts: "" });

  // const { posts } = data;

  const onClickAxios = async e => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts/1");
    console.log(res);
    // setData({ ...data, posts: res });
  };

  const onClickFetch = (e) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        const fetchResponse = response.json();
        return fetchResponse;
      }) //turns response into json object?
      .then(json => console.log(json)); //prints it
  }

  //rewrite this with a promise ^^

  return (
    <div>
      <h1>Todos Index</h1>
      <button onClick={e => onClickAxios(e)}>Click Me Axios</button>
      <br/>
      <button onClick={e => onClickFetch(e)}>Click Me Fetch</button>
      {/* {fetchResponse.title} */}
      {/* {posts.title} */}
    </div>
  );
};

export default TodosIndex;
