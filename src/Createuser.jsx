import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import"./form.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createuser = () => {
  

  const[name,setName]=useState()
  const[company,setCompany]=useState()
  const[number,setNumber]=useState()
  const history=useNavigate();
  const header={"Access-Control-Allow-Origin":"*"}
  const handleSubmit=(e)=>{
 e.preventDefault();
     axios.post(
       'https://64e49de5c555638029138091.mockapi.io/crud',
     {
      name:name,
      company:company,
      number:number
     }
  ).then(()=>{setTimeout(()=>{
    history("/read")
  },2000)
  });

  };
  return (
    <div id='main-home'>
    <div className='create-text'>
      
      <h1>USER CREATING DASHBOARD</h1>
      </div>
      <Link to="/read">
        <button type="button" class="btn btn-dark" id='btn-see-users'>See All User</button>
    </Link>
      
    
   
    
      <div className='Form-box'>
    <Box
      component="form"
      autoComplete="off"
      className='box'
    
    >
    <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Enter Name"
          variant="filled"
          className='Text'
          size='Normal'
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
          color='warning'
          onChange={(e)=>setCompany(e.target.value)}

          
        />
         <TextField
          id="filled-required"
          label="PhnoneNumber"
          type="number"
          color='warning'
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          className='Text'
          onChange={(e)=>setNumber(e.target.value)}
        />
       
         <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add User</button>
          </Box>
          
          </div>
         
  </div>
    )
}

export default Createuser;
