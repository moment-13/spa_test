import React from "react";
import Header2 from "./Compornents/Header2";
import { TodoList } from "./Compornents/TodoList";

const Testpage = (props) => {

    return (
        <>
          <Header2 exname={props.exname} />
          <p>{props.exname}</p>

          <ul>
          {props.categories.map((category) => (
            <li>{category.name}</li>
          ))}
          </ul>
          <br />
          <br />
          <TodoList todos={props.todos} />


        </>
    );

};


export default Testpage;

