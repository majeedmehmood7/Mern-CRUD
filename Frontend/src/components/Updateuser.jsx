import React, { useEffect, useState } from 'react'
import './Adduser.css'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function Updateuser() {


    const users = {
        fname:"",
        lname:"",
        email:"",
    }

    const {id} = useParams();
    const [user , setuser] = useState(users);
    const navigate = useNavigate();

    const inputchangehandler = (e) => {
        const {name , value} = e.target;
        setuser({...user, [name]:value});
        console.log(user);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            setuser(response.data)

        }).catch((error)=>{
            console.log(error);
        })
    },[id])

    const submitform = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`,user)
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
        <h2>Update User </h2>
        <form className='Adduserform' onSubmit={submitform}>
          <div className='inputgroup'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' value={user.fname} onChange={inputchangehandler} id='fname' name='fname' autoComplete='off' placeholder='Enter Your First Name'/>
          </div>
          <div className='inputgroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' value={user.lname} onChange={inputchangehandler} id='lname' name='lname' autoComplete='off' placeholder='Enter Your last Name'/>
          </div>
          <div className='inputgroup'>
            <label htmlFor='email'>Email</label>
            <input type='email' value={user.email} onChange={inputchangehandler} id='email' name='email' autoComplete='off' placeholder='Enter Your Email'/>
          </div>
          <div className='inputgroup'>
            <button type='submit'>Update User</button>
          </div>
        </form>

    </div>
  )
}

export default Updateuser