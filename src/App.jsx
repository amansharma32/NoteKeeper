import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
const App = () => {
  const [old,setNew] = useState([]);


  const addNote = (note) =>{
   setNew((pre)=>{
    return[...pre,note]
   })  
  }
   
  const onDelete=(id)=>{
        setNew((old)=>{
          old.filter((curdata,indx)=>{
            return indx !== id;
          })
        })
  }

  return (
    <>
       <Header/>
       
       <CreateNote passNote={addNote}/>
       
       {old.map((val,index)=>{
        return <Note 
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
       })}
       <Footer/>
    </>
  )
}

export default App