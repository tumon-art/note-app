import React from 'react'
import css from './CSS/note.module.css'
import { UC } from './NoteMain'
import { MdDeleteForever } from 'react-icons/md'
export const Note = ({e}) => {

    const {deleteNote} = React.useContext(UC)
    return (
        <div className={css.note}>
            <span className={css.span}> {e.text} </span>
            <div className={css.noteFooter}>
                <small> {e.date} </small>
                <MdDeleteForever className={css.deleteIcon}
                onClick={()=>deleteNote(e.id)}
                size='1.3em'
                />
            </div>
        </div>
    )
}
