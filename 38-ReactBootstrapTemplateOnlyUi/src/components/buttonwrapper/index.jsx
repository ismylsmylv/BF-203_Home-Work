import React from 'react'
import style from "../../style/buttonwrapper.module.css"
function ButtonWrapper() {
    return (
        <div className={style.buttonwrapper}>
            <h1 className={style.head}>The buttons below are impossible to resist...</h1>
            <div className={style.btns} >
                <button className={style.btn1}>Click Me!</button>
                <button className={style.btn2}>Look At Me!</button>
            </div>
        </div>
    )
}

export default ButtonWrapper