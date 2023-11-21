import React from 'react'
import style from "../../style/footer.module.css"
import Facebook from "../../assets/img/facebook-f.svg"
import Twitter from "../../assets/img/twitter.svg"
import Github from "../../assets/img/github.svg"
function Footer() {
    return (
        <div className={style.footer}>
            <div className="container">
                <div className={style.icons}>
                    <a href='#' className={style.icon}><img className={style.iconImg} src={Facebook} alt="" /></a>
                    <a href='#' className={style.icon}><img className={style.iconImg} src={Twitter} alt="" /></a>
                    <a href='#' className={style.icon}><img className={style.iconImg} src={Github} alt="" /></a>
                </div>
                <p className={style.copyright}>Copyright © Your Website 2023</p>
            </div>


        </div>
    )
}

export default Footer