import * as React from 'react';

import TextField from '@mui/material/TextField';
import { useForm } from '@inertiajs/react';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import { DatepickField } from './DatepickField';


export const TodoForm = () => {
    
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        detail: '',
        due_time: null,
        priority: '',
        image_path: '',
        status: '',
        category_id: '',
      })

      function submit(e) {
        e.preventDefault()
        post('/todo/store')
      }

    return (
        <>
          <TextField id="outlined-basic" label="title" variant="outlined" onChange={e => setData('title', e.target.value)} />
          <TextField id="outlined-basic" label="detail" variant="outlined"  onChange={e => setData('detail', e.target.value)} />
          <input type='date' onChange={e => setData('due_time', e.target.value)} />
          <DatepickField   label="due_time"  onChange={(newValue) => setData('due_time', newValue)} />
          <p>{data.title}{data.detail}{data.due_time}</p>
          <Button onClick={() => {console.log(data.due_time);}}>コンソール</Button>

        </>
    )
}
