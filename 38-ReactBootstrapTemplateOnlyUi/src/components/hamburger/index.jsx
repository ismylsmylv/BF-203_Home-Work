import React from 'react'
import style from "../../style/hamburger.module.css"
import Bars from "../../assets/img/bars-solid.svg"

function Hamburger() {
    return (
        <div className={style.hamburger}>
            <img className={style.hambBar} src={Bars} alt="" />
        </div>
    )
}

export default Hamburger