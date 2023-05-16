import React, {useRef, useState} from "react";


const RefTest = () => {
    const fileEl = useRef(null);
    const [value, setValue] = useState("");

    const handleClick = () => {
        fileEl.current.focus();
        console.log("fileEl.current.files[0]", fileEl.current.files[0]);
        console.log("fileEl.current.files[0].name", fileEl.current.files[0].name);
        console.log("fileEl.current.value", fileEl.current.value);
    };

    return (
        <>
          <input ref={fileEl} type="file" />
          <button onClick={handleClick}>Focus the input</button><br></br>
          <button onClick={() => setValue(fileEl.current.files[0].name)}>setValue</button><br></br>
          {value}
        </>

    );

};





export default RefTest;
