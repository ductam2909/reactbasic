import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const test = () =>{
    toast("🦄 Wow so easy!");
}

export default function Student({info}) {
  return (
    <div>Student {info.name} fff {info.address}
    <div>
    <button onClick={test}>HHHH</button>
    <ToastContainer 
    autoClose={2000} 
    style
    />
    </div>
    </div>
    
  )
}
