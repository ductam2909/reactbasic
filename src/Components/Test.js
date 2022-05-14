import React, { useEffect, useState } from 'react'
import Iteam from './Iteam'

const Test= () => {
 
    const [lists,setlists] = useState([])
    useEffect(()=>{
      fetch("https://627e8e36271f386ceffa5860.mockapi.io/usernam")
      .then(res=>res.json())
      .then(res=>setlists(res))
      .catch(err => console.error(err));
    },[])
    console.log(lists)
    const iteams= lists.map(test=>{
      return (<Iteam key ={test.id} id = {test.id} name={test.name} anh ={test.img} diachi={test.address}/>)
    })

  return (
    <div>
      {iteams}
        
    </div>
  )
}

export default Test;