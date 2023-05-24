import * as React from 'react';




export const TodoList = (props) =>  {

  const todos = props.todos;


  return (
    <div style={{ height: 400, width: '100%' }}>
      <button onClick={() => console.log(props.todos)}>Todos</button>
      <button onClick={() => console.log(props.todos[0])}>Todos2</button>

      <br />
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='px-4 py-2'>ステータス</th>
            <th className='px-4 py-2'>タイトル</th>
            <th className='px-4 py-2'>期日</th>
            <th className='px-4 py-2'>優先度</th>
            <th className='px-4 py-2'>詳細</th>
            <th className='px-4 py-2'>編集</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({status, title, due_date, priority, id}) => (
            <tr>
              <td className='border px-4 py-2'>{status}</td>
              <td className='border px-4 py-2'>{title}</td>
              <td className='border px-4 py-2'>{new Date(due_date).toLocaleDateString()}</td>
              <td className='border px-4 py-2'>{priority}</td>
              <td className='border px-4 py-2'>詳細Link: {id}</td>
              <td className='border px-4 py-2'>編集Link: {id}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}


