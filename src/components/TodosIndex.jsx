import React, { useState, useEffect } from "react";
import axios from "axios";

const TodosIndex = () => {
  const [data, setData] = useState(null);
  const [todos, setTodos] = useState(null)

  // const { posts } = data;

  const onClickAxios = async e => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts/1");
    // console.log(res);
    // setData({ ...data, posts: res });
  };

  const onClickFetch = (e) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(response => response.json())
          .then(json => setTodos(json)); 
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("http://jsonplaceholder.typicode.com/posts/2");
  //     res
  //       .json()
  //       .then(res => setData(res))
  //   }
  //   fetchData();
  // })

    useEffect(() => {
      axios
        .get("http://jsonplaceholder.typicode.com/posts/2")
        .then(response => console.log(response))
    })

  //rewrite this with a promise ^^

  return (
    <div>
      <h1>Todos Index</h1>
      <button onClick={e => onClickAxios(e)}>Click Me Axios</button>
      <br />
      <button onClick={e => onClickFetch(e)}>Click Me Fetch</button>
      <div>Todo Title: {!todos ? null : todos.title}</div>
      <div>Data: {!data ? null : data.title}</div>

      {/* {fetchResponse.title} */}
      {/* {posts.title} */}
    </div>
  );
};

export default TodosIndex;
