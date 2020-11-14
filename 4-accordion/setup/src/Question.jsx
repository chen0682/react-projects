import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ title, info }) => {
  return (
    <div className='question container'>
      <header className='title header'>{title}</header>

      <p>{info}</p>
    </div>
  )
}

export default Question
