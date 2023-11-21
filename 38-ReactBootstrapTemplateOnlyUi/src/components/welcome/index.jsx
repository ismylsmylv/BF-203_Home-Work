import React from 'react'
import style from "../../style/welcome.module.css"
function Welcome() {
    return (
        <div className={style.welcome}>
            <h1 className={style.head}>Welcome to <i>your</i> next website!</h1>
            <button className={style.btn}>Download Now!</button>
        </div>
    )
}

export default Welcome