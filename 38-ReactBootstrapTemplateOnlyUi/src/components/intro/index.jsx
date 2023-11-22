import React from 'react'
import style from "../../style/intro.module.css"
function Intro() {
    return (
        <div className="container">
            <div className={style.intro}>
                <h1 className={style.head}>Stylish Portfolio is the perfect theme for your next project!</h1>
                <p className={style.text}>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href="#">Unsplash</a> !</p>
                <button className={style.btn}>What We Offer</button>
            </div>
        </div>
    )
}

export default Intro