import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="container main-nav flex">
                <div className="company-logo">
                    <Link to="/" className="logo">
                        <h2>Vansa</h2>
                        <p>छिटो र मिठो</p>
                    </Link>
                </div>
                <div className="search flex">

                    <input type="text" placeholder="Search food items" />

                    <a href="#" className="flex"><i className="fa-solid fa-magnifying-glass flex"></i></a>
                </div>
                <div className="nav-links flex">
                    <ul className="flex">
                        <li><Link to="/" className="hover-links present-nav">Home</Link></li>
                        <li><Link to="/menu" className="hover-links">Menu</Link></li>
                        <li><Link to="/offer" className="hover-links"><span><i className="fa-solid fa-percent"></i></span>Offer</Link></li>
                        <li><Link to="/signin" className="hover-links primary-btn">Sign in</Link></li>
                        <li><Link to="/cart" className="hover-links"><span><i className="fa-solid fa-cart-shopping"></i></span>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
