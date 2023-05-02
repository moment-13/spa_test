import * as React from 'react';

import TextField from '@mui/material/TextField';
import { useForm } from '@inertiajs/react';
import { Button } from "@mui/material";
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
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
          <Box sx={{ flexGrow: 1 }}>
           <Grid container alignItems='center' justifyContent='center' direction="column" spacing={2}>
            <Grid xs={8}>
              <TextField id="outlined-basic" label="タスクのタイトル" variant="outlined" onChange={e => setData('title', e.target.value)} fullWidth />
            </Grid>
            <Grid xs={8} md={8}>
              <TextField id="outlined-basic" label="タスクの詳細" variant="outlined"  onChange={e => setData('detail', e.target.value)} multiline fullWidth  minRows={3} />
            </Grid>
            <Grid xs={8} md={8} >
              {/* Gridの中で中央寄せにならなかったのでdivにtailwindで中央寄せさせる */}
              <div className='flex justify-center items-center'>
                <label htmlFor='due_time' className='block text-gray-500  md:text-right mb-1 md:mb-0 pr-4'>タスクの期日</label>
              <input id='due_time' className='w-6/12' type='date' onChange={e => setData('due_time', e.target.value)}  />
              </div>
            </Grid>
              <Button onClick={() => {console.log(data.due_time);}}>コンソール</Button>
            <Grid xs={8} md={8} >
            <div className='flex justify-center items-center'>
              <FormControl sx={{ m: 1, width: 300 }}>
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
              </div>
            </Grid>
          </Grid>
          </Box>

        </>
    )
}
