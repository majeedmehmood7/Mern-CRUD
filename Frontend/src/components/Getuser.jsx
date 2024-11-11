import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Adduser from './Adduser'
import './Getuser.css'
import { MdAdd } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';
function Getuser() {

    const [user , setuser] = useState([]);


    useEffect(()=>{
        const fetchdata = async()=>{
            const res = await axios.get("http://localhost:8000/api/getall")
            setuser(res.data);
        }
        fetchdata();
    },[])


    const deleteuser = async (userId) => {
        await axios.delete(`http://localhost:8000/api/delete/${userId}`)
        .then((res)=>{
            setuser((prevUser)=> prevUser.filter((user)=>user._id !== userId))
            toast.success(res.data.msg,{position:"top-right"});

        }).catch((error)=>{
            console.log(error);
        })

    }

return (
    <div className='userTable'>
        <Link to={"/add"} className='addbutton'><MdAdd />Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((user , index)=>{
                        return(
                            <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.fname} {user.lname}</td>
                            <td>{user.email}</td>
                            <td >
                                <button onClick={()=>deleteuser(user._id)} className='actionbtn'  > <MdAutoDelete/></button>
                                <Link to={`/update/`+user._id} className='actionbtn1'><FaPencilAlt/></Link>
                            </td>
                        </tr>
                        )
                    })
                }
              
            </tbody>
        </table>
    </div>
  )
}

export default Getuser