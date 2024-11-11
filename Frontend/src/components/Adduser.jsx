import React, { useState } from 'react'
import './Adduser.css'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Adduser() {

  const users = {
    fname:"",
    lname:"",
    email:"",
    password:""
  }

  const [user , setuser] = useState(users);
  const navigate = useNavigate();

  const inputhandler=(e)=>{
    const {name , value} = e.target;
    setuser({...user,[name]:value});
    }

  const subitform = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create",user)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"})
      navigate("/");
    }).catch(
      error=>console.log(error)
    )
  }



  return (
    <div className='Adduser'>
        <Link to={"/"}>Back</Link>
        <h2>Add New User </h2>
        <form className='Adduserform' onSubmit={subitform}>
          <div className='inputgroup'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' onChange={inputhandler} id='fname' name='fname' autoComplete='off' placeholder='Enter Your First Name'/>
          </div>
          <div className='inputgroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' onChange={inputhandler} id='lname' name='lname' autoComplete='off' placeholder='Enter Your last Name'/>
          </div>
          <div className='inputgroup'>
            <label htmlFor='email'>Email</label>
            <input type='email' onChange={inputhandler} id='email' name='email' autoComplete='off' placeholder='Enter Your Email'/>
          </div>
          <div className='inputgroup'>
            <label htmlFor='password'>Password</label>
            <input type='password' onChange={inputhandler} id='password' name='password' autoComplete='off' placeholder='Enter Your Password'/>
          </div>
          <div className='inputgroup'>
            <button type='submit'>Add User</button>
          </div>
        </form>

    </div>
  )
}

export default Adduser