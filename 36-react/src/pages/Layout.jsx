import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/index">Product</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/Wishlist">Wishlist</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Layout;
