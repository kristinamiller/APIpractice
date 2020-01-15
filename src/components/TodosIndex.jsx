import React, { useState, useEffect } from "react";
import axios from "axios";

const TodosIndex = () => {
  const [data, setData] = useState({ posts: "" });

  const { posts } = data;

  const onClick = async e => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts/1");
    console.log(res);
    setData({ ...data, posts: res });
  };

  //rewrite this with a promise ^^

  return (
    <div>
      <h1>Todos Index</h1>
      <button onClick={e => onClick(e)}>Click Me</button>
      {posts.title}
    </div>
  );
};

export default TodosIndex;
