import React from "react";
import Header2 from "./Compornents/Header2";
import { TodoForm } from "./Compornents/TodoForm";

const Testpage2 = (props) => {

    return (
        <>
          <Header2 exname={props.exname} />
          <TodoForm categories={props.categories} />

        </>
    );

};


export default Testpage2;
