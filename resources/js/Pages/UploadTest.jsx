import * as React from 'react';
import { useRef } from 'react';
import { useForm } from '@inertiajs/react';




export const UploadTest = () => {
const fileRef = useRef(null);
    const { data, setData, post, processing, errors } = useForm({
        image_path: '',
      });

      function submit(e) {
        e.preventDefault()
        post('/todo/store')
      };

    return (
        <>
        <form onSubmit={submit}>


            <div className='flex justify-center items-center'>
            <label htmlFor="image_path" className='block text-sm text-gray-500 dark:text-gray-300'>画像</label>
            <input type="file" ref={fileRef} className="relative m-0 block min-w-0 w-1/2 cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-blue-400 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" 
            onChange={e => setData('image_path', fileRef.current.files[0])} />

            </div>

            <button type="submit" disabled={processing} >タスク作成</button>

          </form>

        </>
    )
}
