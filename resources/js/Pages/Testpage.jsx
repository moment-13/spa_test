import React from "react";
import Header2 from "./Compornents/Header2";


const Testpage = (props) => {

    return (
        <>
          <Header2 exname={props.exname} />
          <p>{props.exname}</p>
          <p>{props.category.name}</p>
          <p>{props.category.user_id}</p>

        </>
    );

};


export default Testpage;

