import React, { Fragment } from "react";
import "./App.css";
import TodosIndex from "./components/TodosIndex";
import Counter from "./components/Counter";
import GithubData from "./components/GithubData";


const App = () => (
  <Fragment>
    <h1>App</h1>
    {/* <TodosIndex/> */}
    <Counter />
    <GithubData/>
  </Fragment>
);

export default App;
