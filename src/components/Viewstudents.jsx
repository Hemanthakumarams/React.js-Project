import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'




const Viewstudents = () => {
  let navigate=useNavigate("");
  let [studentData,setstudentData] = useState([])

  useEffect(()=>{
    let x=axios.get("http://localhost:4000/ports")
    .then(({data})=>setstudentData(data));
    console.log(x);
        
  },[])

  let handleDelete=(id)=>{
    axios.delete(`http://localhost:4000/ports/${id}`)
    
    
    toast(`User Removed !`)
    navigate("/viewstudents")
    
    
  }
  return (
    <div>
      <h1>VIEW STUDENTS</h1>
      <div className='container'>
      {studentData.map((x)=>{
        return(
          <div className='boxes'>
            <h3>Name:{x.name}</h3>
            <h3>email:{x.email}</h3>
            <h3>Course:{x.course}</h3>
            <div>
              <button>
                <Link to={`/updatestudents/${x.id}`}>UPDATE</Link>
              </button>
              
              <button onClick={()=>{
                handleDelete(x.id)
              }}>DELETE</button>
            </div>
          </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Viewstudents
