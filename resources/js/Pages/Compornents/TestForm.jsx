import React from "react";
import {useState} from "react";


export const TestForm = () => {
    const [name, setName] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {

    }

    return (
        <>
          <p>入力された値：{name}</p>
          <form onSubmit={handleSubmit} method="get">
            <input type="text" name="name" value={name} onChange={handleChangeName} />
          </form>
        </>
    )
}


