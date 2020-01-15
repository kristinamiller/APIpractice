import React, { Fragment } from "react";
import "./App.css";
import TodosIndex from './components/TodosIndex';
import Counter from './components/Counter'

const App = () => (
  <Fragment>
    <h1>App</h1>
    <TodosIndex/>
    <Counter/>
  </Fragment>
);

export default App;
