
import './App.css'
import Counter from './features/counter/Counter'
import Todolist from './features/todolist/Todolist'

function App() {


  return (
    <div className='border border-5 border-danger p-2 m-2'>
      <h1>Welcome to ReactJS App Development</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  )
}

export default App
