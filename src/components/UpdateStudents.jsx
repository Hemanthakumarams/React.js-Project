
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'




const UpdateStudents = () => {

  let {id}=useParams();

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
    axios.put(`http://localhost:4000/ports/${id}`,payload);
    toast.success(`User ${name} Updated !`);
    navigate("/viewstudents")
  }

  useEffect(()=>{
    let x=axios.get(`http://localhost:4000/ports/${id}`)
    .then(({data})=>{
            
            console.log(x)
      
            setname(data.name)
            setemail(data.email)
            setcourse(data.course)
          })
   

  },[])

  
  return (
    <div>
      <form onSubmit={handlesubmit}>
        
            <h2>Update Student</h2>
          <div className='items1'>
          <label htmlFor='name'>STUDENT NAME</label><br/>
          <input value={name} onChange={(e)=>{
            setname(e.target.value)
          }} type='text'/><br/>
          </div><br/>
          <div className='items'>
          <label htmlFor='email'>Email</label><br/>
          <input value={email} onChange={(e)=>{
            setemail(e.target.value)
          }}type='email'/><br/>
          </div>
          <div className='items'>
          <label htmlFor='course'>Course</label><br/>
          <input value={course} onChange={(e)=>{
            setcourse(e.target.value)
          }}type='text'/><br/>
          </div>
          <div className='items'>
          <label htmlFor='photo'>Photo</label><br/>
          <input type='file'/>
          </div>
          <div className='click'>
          <button>Update Student</button>
          </div>
          

      </form>
    </div>
  )
}

export default UpdateStudents
