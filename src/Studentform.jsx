import { useFormik } from 'formik'
import React from 'react'

function Studentform() {
  var sform = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      age:""
    },
    onSubmit:(values)=>{
      console.log(values);
    }
  });
  return (
    <div className='p-3 border-4 border border-success'>
        <h1>Studentform</h1>
        <form onSubmit={sform.handleSubmit}>
          <input type="text" name="firstname" onChange={sform.handleChange}/>
          <br />
          <input type="text" name="lastname" onChange={sform.handleChange}/>
          <br />
          <input type="text" name="age" onChange={sform.handleChange}/>
          <br />
          <button>See</button>
        </form>
    </div>
  )
}

export default Studentform