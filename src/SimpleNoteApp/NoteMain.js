import React, { useEffect } from "react"
import { NotesList } from "./NotesList"
import './CSS/Main.css'
import { useState } from "react"
import { nanoid } from "nanoid"
import { Search } from "./Search"
import { Header } from "./Header"

export const UC = React.createContext() // Use Context

export const NoteMain = () => {
    const [notes, setnotes] = useState([
        {
            id: nanoid(),
            text:'This is my Text',
            date: "19/3/21",
        },
        {
            id: nanoid(),
            text:'This is second Text',
            date: "14/7/21",
        },
        {
            id: nanoid(),
            text:'This is third Text',
            date: "26/4/21",
        },
        {
            id: nanoid(),
            text:'This is fourth Text',
            date: "22/5/21",
        }
    ])
    
    // Search Text State
    const [searchText, setsearchText] = useState('')

    // Dark Mode 
    const [isDark, setisDark] = useState(false)

    // Add Note
    const addNote = (text) => {
        const date = new Date()
        
        const newNote = {
            id:nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        setnotes([...notes,newNote])
    }

    // Delete a Note 
    const deleteNote = (id) => {
        const index = notes.findIndex((e)=> e.id === id)
        const newNotes = [...notes]
        newNotes.splice(index,1)
        setnotes(newNotes)
    }

    // Dark Mode Toggle 
    const darkTheme = () => {
        setisDark(p => !p )
    }

    // Save To the local Host 

    useEffect(()=>{
        const savedNote = JSON.parse(localStorage.getItem('note-app'))

        if (savedNote) {
            setnotes(savedNote)
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('note-app',JSON.stringify(notes))
    },[notes])

    return (
        <div className={`${isDark && 'dark'}`}> 
            <div className='container'>
            
            <UC.Provider
            value={{addNote:addNote,deleteNote:deleteNote}}
            >
            <Header darkTheme={darkTheme} />
            <Search setsearchText={setsearchText} />
            <NotesList 
            notes={notes.filter((e)=> e.text.includes(searchText) ) } />
            </UC.Provider>
    
            </div>
        </div>
    )
}
