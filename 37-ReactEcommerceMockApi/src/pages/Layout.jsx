import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Search from '../components/search';
import { getUsers } from '../../middleware/api/users'
import style from "../assets/style/Layout.module.css";
library.add(fas, faTwitter, faFontAwesome)


function Layout({ setprods }) {
    let loginId = localStorage.getItem("loginId")
    const [isLogged, setisLogged] = useState(false);
    useEffect(() => {
        setisLogged(loginId)
    }, []);
    const [cartCount, setcartCount] = useState(0);
    const [favCount, setfavCount] = useState(0);

    useEffect(() => {
        getUsers().then(res => {
            const cartLength = res.cart ? res.cart.length : 0;
            const favLength = res.cart ? res.favorites.length : 0;
            setfavCount(favLength)
            setcartCount(cartLength);
        })
    }, []);





    return (
        <div className={style.containerNav}>
            <nav className={`${style.nav} container ${style.containerNav}`}>
                <ul className={style.ul}>
                    <li className={style.logo}>
                        <Link to="/">Indexer</Link>
                    </li>
                    <li>
                        <Search setprods={setprods} />
                    </li>
                    <li>
                        <Link to="/Cart"><div className={style.countContainer}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> <div className={style.count}>{cartCount}</div></div></Link>
                    </li>
                    <li>
                        <Link to="/Wishlist"><div className={style.countContainer}><FontAwesomeIcon icon="fa-solid fa-heart" /> <div className={style.count}>{favCount}</div></div> </Link>
                    </li>
                    <li><button>
                        <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" onClick={(e) => {
                            // console.log(e.target)
                            localStorage.removeItem("loginId");
                            setisLogged(false);
                            window.location.reload()
                        }} />
                    </button>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Layout;
