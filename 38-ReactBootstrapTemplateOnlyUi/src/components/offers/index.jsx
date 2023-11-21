import React from 'react'
import style from "../../style/offers.module.css"

function Offers() {
    return (
        <div className={style.offers}>
            <p className={style.header}>SERVICES</p>
            <h2 className={style.head}>What We Offer</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <img className={style.cardImg} src="https://cdn-icons-png.flaticon.com/512/864/864343.png" alt="" />
                    <strong className={style.cardHead}>Responsive</strong>
                    <p className={style.cardText}>Looks great on any screen size!</p>
                </div>
                <div className={style.card}>
                    <img className={style.cardImg} src="https://cdn-icons-png.flaticon.com/512/864/864343.png" alt="" />
                    <strong className={style.cardHead}>Redesigned</strong>
                    <p className={style.cardText}>Freshly redesigned for Bootstrap 5.</p>
                </div>
                <div className={style.card}>
                    <img className={style.cardImg} src="https://cdn-icons-png.flaticon.com/512/864/864343.png" alt="" />
                    <strong className={style.cardHead}>Favorited</strong>
                    <p className={style.cardText}>Millions of users  Start Bootstrap!</p>
                </div>
                <div className={style.card}>
                    <img className={style.cardImg} src="https://cdn-icons-png.flaticon.com/512/864/864343.png" alt="" />
                    <strong className={style.cardHead}>Question</strong>
                    <p className={style.cardText}>I mustache you a question...</p>
                </div>
            </div>
        </div>
    )
}

export default Offers