import React from 'react'
import {MdDeleteForever} from "react-icons/md"

export const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className="note">
    <span>{text}</span>
   <div className='footer_note'>
   <small>{date}</small>
   <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='delete_note' size="1.3em"/>
   </div>
    
    
    </div>
  )
}
