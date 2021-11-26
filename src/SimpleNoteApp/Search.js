import React from 'react'
import css from './CSS/Search.module.css'
import { MdSearch } from 'react-icons/md'

export const Search = ({setsearchText}) => {
    return (
        <div className={css.search}>
            <MdSearch className={css.mdsearch} size='1.3em' />
            <input onChange={(e)=> setsearchText(e.target.value.toLowerCase())}
            type='text' placeholder='type to search...' />
        </div>
    )
}
