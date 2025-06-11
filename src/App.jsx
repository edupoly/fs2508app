
import './App.css'
import Counter from './Counter'
import Todolist from './Todolist'

function App() {


  return (
    <div className="border border-5 border-danger p-3 m-3">
      <h1>Welcome to ReactJS App Development</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  )
}

export default App
