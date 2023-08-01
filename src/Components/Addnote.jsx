import React, { useState } from 'react'

export const Addnote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("")
    const charaterLimit = 300;


    const handleChange = (e) => {
        if(charaterLimit - e.target.value.length>=0){
        setNoteText(e.target.value)
        }
    }

    const handleClickSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className='note new'>

            <textarea rows="8" cols="10" placeholder='Type to add a note....'
                value={noteText}
                onChange={handleChange} />
            <div className='footer_note'>
                <small>{charaterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleClickSave}>Save</button>
            </div>

        </div>
    )
}
