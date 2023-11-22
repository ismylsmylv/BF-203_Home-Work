import React from 'react'
import style from "../../style/recent.module.css"

function Recent() {
    return (
        <div className="container">
            <div className={style.recent}>
                <p className={style.header}>PORTFOLIO</p>
                <h2 className={style.head}>Recent Projects</h2>
                <div className={style.prodRow}>
                    <div className={style.prod}>
                        <h3 className={style.prodHead}>STATIONARY</h3>
                        <p className={style.prodText}>A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <div className={style.prod}>
                        <h3 className={style.prodHead}>ICE CREAM</h3>
                        <p className={style.prodText}>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                    </div>
                    <div className={style.prod}>
                        <h3 className={style.prodHead}>STRAWBERRIES</h3>
                        <p className={style.prodText}>Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                    </div>
                    <div className={style.prod}>
                        <h3 className={style.prodHead}>WORKSPACE</h3>
                        <p className={style.prodText}>A yellow workspace with some scissors, pencils, and other objects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent