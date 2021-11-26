import React from 'react'
import { useState } from 'react'
import css from './CSS/AddNote.module.css'
import { UC } from './NoteMain'


export const AddNote = () => {

    const {addNote} = React.useContext(UC) // Use Context

    const [noteText, setnoteText] = useState('') // State

    const characterLimit = 200 ;

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0 ) {
            setnoteText(e.target.value)
        } else {
            alert('Character Limit')
        }
    }
    
    // Save Button in ADD Note
    const saveBtn = () => {
        // trim() delete the whitespace
        if (noteText.trim().length > 0 ) {
            addNote(noteText)
        }
        setnoteText('')
    }
    return (
        <div className={css.addNote}>
            <textarea
            className={css.textarea}
            rows='8'
            cols='10'
            placeholder='Type to add new Note!'
            onChange={handleChange}
            value={noteText}>
            </textarea>

            <div className={css.footer}> 
                <small className={css.small}> {characterLimit - noteText.length} Remaining  </small>
                <button className={css.button}
                onClick={saveBtn}> Save</button>
            </div>
        </div>
    )
}
