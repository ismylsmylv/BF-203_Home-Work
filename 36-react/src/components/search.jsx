import React from 'react'
import style from '../style/Layout.module.css'
function Search() {
    return (
        <input className={style.inputSearch} type="text" placeholder='search' />
    )
}

export default Search