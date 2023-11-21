import React from 'react'
import style from "../../style/hero.module.css"
function Hero() {
    return (
        <div className={style.hero}>
            <h1 className={style.head}>Stylish Portfolio</h1>
            <p className={style.text}><i>A Free Bootstrap Theme by Start Bootstrap</i></p>
            <button className={style.btn}>Find Out more</button>
        </div>
    )
}

export default Hero