import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getuser from './components/Getuser';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/" element={<Getuser/>}></Route>
        <Route path="/add" element={<Adduser/>}></Route>
        <Route path="/update/:id" element={<Updateuser/>}></Route>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
