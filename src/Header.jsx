import React from 'react'
import note from './Images/note.png'
const Header = () => {
  return (
    <>
       <div className='header'> 
       <img src={note} alt="logo" width='70' height='90'/>
    <h1 >NoteKeep</h1>
       </div>
    </>
  )
}

export default Header