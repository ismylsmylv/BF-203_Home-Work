import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from "../style/Layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/search';
function Layout() {
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
                        <Link to="/Cart">Cart</Link>
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
