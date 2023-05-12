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


export const TodoForm = (props) => {
    
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        detail: '',
        due_time: '',
        priority: '',
        image_path: '',
        category_id: '',
      })

      function submit(e) {
        e.preventDefault()
        post('/todo/store')
      }

    return (
        <>
        <form onSubmit={submit}encType='multipart/form-data' >
          <Box sx={{ flexGrow: 1 }}>
           <Grid container alignItems='center' justifyContent='center' direction="column" spacing={2}>
            <Grid xs={4} md={4}>
              <TextField id="outlined-basic" label="タスクのタイトル" variant="outlined" onChange={e => setData('title', e.target.value)} fullWidth />
            </Grid>
            <Grid xs={4} md={4}>
              <TextField id="outlined-basic" label="タスクの詳細" variant="outlined"  onChange={e => setData('detail', e.target.value)} multiline fullWidth  minRows={3} />
            </Grid>
            <Grid xs={6} md={6} >
              {/* Gridの中で中央寄せにならなかったのでdivにtailwindで中央寄せさせる */}
              <div className='flex justify-center items-center'>
                <label htmlFor='due_time' className='block text-gray-500  md:text-right mb-1 md:mb-0 pr-4'>タスクの期日</label>
              <input id='due_time' className='w-6/12' type='date' onChange={e => setData('due_time', e.target.value)}  />
              </div>
            </Grid>
              <Button onClick={() => {console.log(data.due_time);}}>コンソール</Button>
            <Grid xs={6} md={6} >
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
              <Grid xs={6} md={6} >
              <div className='flex justify-center items-center'>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-label">カテゴリー</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.category_id}
                  label="category_id"
                  onChange={e => setData('category_id', e.target.value)}
                >
                  {props.categories.map((category) => (
                    <MenuItem value={category.id}>{category.name}</MenuItem>
                  ))}

                </Select>
              </FormControl>
              </div>
            </Grid>
            <Grid xs={6} md={6} >
            <div className='flex justify-center items-center'>
            <label htmlFor="image_path" className='block text-sm text-gray-500 dark:text-gray-300'>画像</label>
            <input type="file" value={data.image_path} className="relative m-0 block min-w-0 w-1/2 cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-blue-400 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" onChange={(e) => setData('image_path', e.target.files[0])} />
            {errors.image_path && <div>{errors.image_path}</div>}
            </div>
            </Grid>
            <Grid xs={6} md={6} >
            <button type="submit" disabled={processing}>タスク作成</button>
            </Grid>
          </Grid>
          </Box>
          </form>

        </>
    )
}
