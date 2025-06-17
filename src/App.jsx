
import { Outlet } from 'react-router-dom'
import './App.css'
import Counter from './features/counter/Counter'
import Products from './features/products/Products'
import Todolist from './features/todolist/Todolist'
import Navbar from './shared/Navbar'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
