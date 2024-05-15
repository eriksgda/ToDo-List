import { FormEvent, useState } from 'react'
import './App.css'

export default function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  function AddTask(event: FormEvent){
    event.preventDefault();

    setTodoList((oldTodoList) => [...oldTodoList, task]);
  }
  
  return (
      <form className='container' onSubmit={AddTask}>
        <div className='menu'>
          <input type="text" placeholder='Digite aqui'
          onChange={(event) => setTask(event.target.value)}/>
          <button className='button-add' type='submit'>Adicionar</button>

        </div>
        <div className='list'>
          <ul className='total-list'>
            {todoList.map((todo) =>{
              return <li key={todo}>{todo}</li>
            })}
          </ul>
        </div>
      </form>
  )
}


