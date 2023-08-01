import React from 'react'
import { Note } from './Note'
import { Addnote } from './Addnote'

const NoteList = ({notes , handleAddNote , handleDeleteNote}) => {
  return (
    <div className='list'>
  {notes.map((note)=> 
    <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
    <Addnote handleAddNote={handleAddNote} />
    </div>
  )
}
export default NoteList;
