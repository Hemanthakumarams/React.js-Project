import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Addstudents = () => {

  let navigate = useNavigate()

  let [name,setname]=useState("")
  let [email,setemail]=useState("")
  let [course,setcourse]=useState("")

  let handlesubmit=(e)=>{
    e.preventDefault();
    let payload={
      name,
      email,
      course
    }
    axios.post("http://localhost:4000/ports",payload)
    toast.success(`User ${name} Added successfully`)
    navigate("/viewstudents")
    
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        
            <h2>ADD STUDENT</h2>
          <div className='items1'>
          <label htmlFor='name'>STUDENT NAME</label><br/>
          <input onChange={(e)=>{
            setname(e.target.value)
          }} type='text'/><br/>
          </div><br/>
          <div className='items'>
          <label htmlFor='email'>Email</label><br/>
          <input onChange={(e)=>{
            setemail(e.target.value)
          }}type='email'/><br/>
          </div>
          <div className='items'>
          <label htmlFor='course'>Course</label><br/>
          <input onChange={(e)=>{
            setcourse(e.target.value)
          }}type='text'/><br/>
          </div>
          <div className='items'>
          <label htmlFor='photo'>Photo</label><br/>
          <input type='file'/>
          </div>
          <div className='click'>
          <button>Add Students</button>
          </div>
          

      </form>
    </div>
  )
}

export default Addstudents
