import * as React from 'react';

import TextField from '@mui/material/TextField';
import { useForm } from '@inertiajs/react';
import Checkbox from '@mui/material/Checkbox';


export const MuiField = () => {
    
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
      })

      function submit(e) {
        e.preventDefault()
        post('/login')
      }

    return (
        <>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={e => setData('email', e.target.value)} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" type='password' onChange={e => setData('password', e.target.value)} />
          <Checkbox checked={data.remember} onChange={e => setData('remember', e.target.value)} />
          <p>{data.email}{data.password}{data.remember}</p>
        </>
    )
}
