import './App.css'

// const button: any = document.querySelector('.button-add')
// const input: any = document.querySelector('input')
// const totallist: any = document.querySelector('.total-list')

// let items: Array<any> = []

// function AddTask() {
//    items.push({
//      task: input.value,
//      check: false,
//    })

//   input.value = ''

//   showTasks()
// }

// function showTasks(){
//   let newLi= ''

//   items.forEach((item) =>{
//    newLi = newLi + 
//     `
//     <li class="${item.check}">
//       ${item.tarefa}
//     </li>
//     `

//   })

//   totallist.innerHTML = newLi

//   localStorage.setItem('list', JSON.stringify(items))
// }

// function reloadTasks(){
//   const tasks = localStorage.getItem('list')

//   if (tasks) {
//     items = JSON.parse(tasks)
//   }

//   showTasks()
// }

// reloadTasks()
// button.addEventListener('click', AddTask)






export default function App() {
  
  return (
      <div className='container'>
        <div className='menu'>
          <input type="text" placeholder='Digite aqui'/>
          <button className='button-add'>Adicionar</button>

        </div>
        <div className='list'>
          <ul className='total-list'>
            <li>texto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto testetexto teste</li>
            <li>texto teste</li>

          </ul>
        </div>
      </div>
  )
}


