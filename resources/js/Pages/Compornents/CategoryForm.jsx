import { useForm } from '@inertiajs/react'


export const CategoryForm = () => {

const { data, setData, post, processing, errors } = useForm({
  name: '',
})

function submit(e) {
  e.preventDefault()
  post('/category/store')
}

return (
  <form onSubmit={submit}>
    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
    {errors.name && <div>{errors.name}</div>}
    
    <button type="submit" disabled={processing}>カテゴリー作成</button>
  </form>
)
}