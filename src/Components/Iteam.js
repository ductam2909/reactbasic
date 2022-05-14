import React from 'react'

export default function Iteam(props) {
  return (
    <div>   
        <div className='test'>
        <p> {props.name}</p>
        <img src={props.anh} alt="" />
        </div>
          


    </div>
  )
}
