import * as React from 'react';

import TextField from '@mui/material/TextField';
import { useForm } from '@inertiajs/react';
import { Button } from "@mui/material";
import {Box, Grid} from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


export const TodoForm = () => {
    
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        detail: '',
        due_time: '',
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
           <Grid container alignItems='center' justifyContent='center' direction="column">
           <Grid xs={8}>
            <TextField id="outlined-basic" label="title" variant="outlined" onChange={e => setData('title', e.target.value)} />
            </Grid>
            <TextField id="outlined-basic" label="detail" variant="outlined"  onChange={e => setData('detail', e.target.value)} />
            <input type='date' onChange={e => setData('due_time', e.target.value)}  />
            <Button onClick={() => {console.log(data.due_time);}}>コンソール</Button>

            <FormControl >
              <InputLabel id="demo-simple-select-label">優先度</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.priority}
                label="priority"
                onChange={e => setData('priority', e.target.value)}
              >
                <MenuItem value={1}>低</MenuItem>
                <MenuItem value={2}>中</MenuItem>
                <MenuItem value={3}>高</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          

        </>
    )
}
