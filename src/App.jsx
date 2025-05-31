
import './App.css'
import Counter from './Counter'
function App() {


  return (
    <div className='p-5 border border-success'>
      <h1>Welcome to ReactJS App Development base practice</h1>
      <h2>Vishnu</h2>
      <Counter i={10} iv={5} dv={13}></Counter>
      <Counter i={30} iv={20} dv={15}></Counter>
    </div>
  )
}

export default App
