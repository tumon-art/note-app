import { AddNote } from "./AddNote"
import { Note } from "./Note"

export const NotesList = ({notes}) => {
    return (
        <div className='notesList'>
            {notes.map((e)=> {
              return  <Note key={e.id} e={e} />
            })}
            <AddNote />
        </div>
    )
}
