
import { Outlet,Link } from 'react-router-dom'
import Aboutus from './Aboutus'
import './App.css'
import Contactus from './Contactus'
import Home from './Home'

function App() {


  return (
    <div className='p-2 m-2 border border-success'>
      <h1>Welcome to ReactJS App Development base practice</h1>
      <Link to="/home">Home</Link>
      &nbsp; &nbsp;
      <Link to="/aboutus">Aboutus</Link>
      &nbsp; &nbsp;
      <Link to="/contactus">Contactus</Link>
      &nbsp; &nbsp;
      <Link to="/products">Products</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App
