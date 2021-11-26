import React from 'react'
import css from './CSS/Header.module.css'

export const Header = ({darkTheme}) => {
    return (
        <div className={css.header}>
            <h1> Notes</h1>
            <button onClick={darkTheme} className={css.button}> Toggle Theme </button>
        </div>
    )
}
