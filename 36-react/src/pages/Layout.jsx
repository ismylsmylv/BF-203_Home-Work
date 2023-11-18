import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from "../style/Layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/search';
import axios from 'axios';

function Layout() {
    let loginId = localStorage.getItem("loginId") || [];
    const [cartCount, setcartCount] = useState(0);

    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId)
            .then(res => {
                const cartLength = res.data.cart ? res.data.cart.length : 0;
                setcartCount(cartLength);
            });
    }, [loginId]);

    console.log(cartCount);

    return (
        <div className={style.containerNav}>
            <nav className={`${style.nav} container ${style.containerNav}`}>
                <ul className={style.ul}>
                    <li className={style.logo}>
                        <Link to="/index">Indexer</Link>
                    </li>
                    <li>
                        <Search />
                    </li>
                    <li>
                        <Link to="/Cart">Cart {cartCount}</Link>
                    </li>
                    <li>
                        <Link to="/Wishlist">Wishlist</Link>
                    </li>
                    <li>logout</li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Layout;
