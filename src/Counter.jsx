import React from 'react'
import { connect } from 'react-redux'
import { decAction, incAction } from './store/actioncreators';
function Counter(props) {
    console.log("Counter Component Rendered",props);
  return (
    <div className="border border-5 border-success p-3 m-3">
        <h1>Counter:{props.count}</h1>
        <button onClick={()=>{props.increment()}}>Increment</button>
        <button onClick={()=>{props.decrement()}}>Decrement</button>
    </div>
  )
}

function mapStateToProps(state){return state.counterReducer}
function mapDispatchToProps(dispatch){
  return {
    increment:()=>{dispatch(incAction())},
    decrement:()=>{dispatch(decAction())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)