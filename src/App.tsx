import { FormEvent, useState } from 'react'
import './App.css'
import InputTasks from './components/InputTask';
import Todo from './components/Todo';

export default function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  function AddTask(event: FormEvent){
    event.preventDefault();

    if (!task){return;}

    setTodoList((oldTodoList) => [...oldTodoList, task]);

    setTask('');
  }
  
  return (
      <form className='container' onSubmit={AddTask}>
        <div className='menu'>
          <InputTasks type="text" value={task} placeholder='Digite aqui'
          onChange={(event) => setTask(event.target.value)}/>
          <button className='button-add' type='submit'>Adicionar</button>

        </div>
        <div className='list'>
          <ul className='total-list'>
            {todoList.map((todo) =>{
              return <Todo key={todo}>{todo}</Todo>
            })}
          </ul>
        </div>
      </form>
  )
}


