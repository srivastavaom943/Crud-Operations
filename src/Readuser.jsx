import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import"./form.css"

import axios from 'axios';

const Readuser = () => {
    const [data,setData]=useState([])
    
      function getData(){
        axios.get('https://64e49de5c555638029138091.mockapi.io/crud').then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
      
    }
    useEffect(()=>{
  getData();
    },[]);
    const handleDelete=(id)=>{
      axios.delete(`https://64e49de5c555638029138091.mockapi.io/crud/${id}`).then(()=>{
        getData();
      })
    }
    const handleEdit=(id,name,company,number)=>{
          localStorage.setItem("id",id)
          localStorage.setItem("name",name)
          localStorage.setItem("company",company)
          localStorage.setItem("number",number)

    }
     
  return (
<table className="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Number</th>
    </tr>
  </thead>
  <tbody>
  {
    data.map((eachdata)=>{
        return(
            <>
              <tr>
      <th scope="row">{eachdata.id}</th>
      <td>{eachdata.name}</td>
      <td>{eachdata.company}</td>
      <td>{eachdata.number}</td>
      <Link to="/update">    
      <button type="button"  id='btn-edit'onClick={()=>handleEdit(eachdata.id,eachdata.name,eachdata.company,eachdata.number)}>Edit </button>
      </Link>
      
      <button type="button" id='btn-delete' onClick={()=>handleDelete(eachdata.id)} >Delete</button>

    </tr>
  
            </>
        )
    })
  }
  
  </tbody>
  <Link to="/"><button type="button" class="btn btn-link">Go To Home</button></Link>
  
</table>

  )
}

export default Readuser