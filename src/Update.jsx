import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import"./form.css"
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
    const[id,setID]=useState(0)
    const[name,setName]=useState(0)
    const[company,setCompany]=useState(0)
    const[number,setNumber]=useState(0)
    const history=useNavigate();
    useEffect(()=>{
        setID(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setCompany(localStorage.getItem("company"))
        setNumber(localStorage.getItem("number"))
    },[])
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://64e49de5c555638029138091.mockapi.io/crud/${id}`, {
            name:name,
            company:company,
            number:number
           }).then(()=>{setTimeout(()=>{
            history("/read")
          },2000)
          });
    }
return (
    <div id='update-box'>
      <h1 className='heading'>WELCOME TO</h1>
      <h1 className='heading'>Details Updation Page</h1>
      
    <Box
      component="form"
    oValidate
      autoComplete="off"
      className='box'
    
    >
    <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter Name"
          className='Text'
          size='Normal'
          value={name}
          color='warning'
          onChange={(e)=>setName(e.target.value)}
        />
         <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter Your Company"
          variant="filled"
          className='Text'
          value={company}
          color='warning'
          onChange={(e)=>setCompany(e.target.value)}

          
        />
         <TextField
          id="filled-required"
          label="PhnoneNumber"
          type="number"
          color='warning'
          value={number}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className='Text'
          onChange={(e)=>setNumber(e.target.value)}
        />
       
         <button type="button" className="btn btn-primary" id='btn-update' onClick={handleUpdate}>Update User</button>
          </Box>
   </div>
  )
}

export default Update;