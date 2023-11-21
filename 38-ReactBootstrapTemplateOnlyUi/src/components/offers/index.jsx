import React from 'react';
import style from '../../style/offers.module.css';

import MobileScreenIcon from '../../assets/img/mobile-screen-solid.svg';
import PenIcon from '../../assets/img/pen-solid.svg';
import ThumbsUpIcon from '../../assets/img/thumbs-up-regular.svg';
import GlassesIcon from '../../assets/img/glasses-solid.svg';

function Offers() {
    return (
        <div className={style.offers}>
            <p className={style.header}>SERVICES</p>
            <h2 className={style.head}>What We Offer</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.cardImg}><img className={style.cardImgs} src={MobileScreenIcon} alt="" /></div>
                    <strong className={style.cardHead}>Responsive</strong>
                    <p className={style.cardText}>Looks great on any screen size!</p>
                </div>
                <div className={style.card}>
                    <div className={style.cardImg}><img className={style.cardImgs} src={PenIcon} alt="" /></div>
                    <strong className={style.cardHead}>Redesigned</strong>
                    <p className={style.cardText}>Freshly redesigned for Bootstrap 5.</p>
                </div>
                <div className={style.card}>
                    <div className={style.cardImg}><img className={style.cardImgs} src={ThumbsUpIcon} alt="" /></div>
                    <strong className={style.cardHead}>Favorited</strong>
                    <p className={style.cardText}>Millions of users Start Bootstrap!</p>
                </div>
                <div className={style.card}>
                    <div className={style.cardImg}><img className={style.cardImgs} src={GlassesIcon} alt="" /></div>
                    <strong className={style.cardHead}>Question</strong>
                    <p className={style.cardText}>I mustache you a question...</p>
                </div>
            </div>
        </div>
    );
}

export default Offers;
