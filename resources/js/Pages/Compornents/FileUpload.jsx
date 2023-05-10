import React, {useState, useRef} from 'react';
import {Inertia} from "@inertiajs/inertia";


export const FileUpload = (props) => {
    
    // Data
    const [title, setTitle] = useState('');
    const [due_time, setDue_time] = useState(null);
    const [file, setFile] = useState('');
    const errors = props.errors;

    const inputFileRef = useRef();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleConsole= () => {
        const data = {
            title, due_time, file,
        };
        console.log(title, due_time, file);
    };

    return (
        <>
          <input type='text' 
          value={title} 
          onChange={e => setTitle(e.target.value)} />
        </>
    )


}



