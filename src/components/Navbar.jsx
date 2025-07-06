import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignIn from './Modals/SignIn'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';

const Navbar = () => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

    const openSignInModal = () => {
        setIsSignInModalOpen(true);
    };

    const closeSignInModal = () => {
        setIsSignInModalOpen(false);
    };

    // Close modal with Escape key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isSignInModalOpen) {
                closeSignInModal();
            }
        };

        if (isSignInModalOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isSignInModalOpen]);
    return (
        <>
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
                            <li><Link to="/offer" className="hover-links"><BiSolidOffer /> Offer</Link></li>
                            {!isLoggedIn && (
                                <li>
                                    <button type='button' className="hover-links primary-btn" onClick={openSignInModal}>
                                        Sign in
                                    </button>
                                </li>
                            )}

                            <li><Link to="/cart" className="hover-links"><span><AiOutlineShoppingCart /></span> Cart</Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link to="/account" class="hover-links">
                                        <span>
                                            <i class="fa-solid fa-user"></i>
                                        </span>
                                        Account
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav >

            {/* Sign In Modal */}
            {
                isSignInModalOpen && (
                    <div className="modal-overlay" onClick={closeSignInModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeSignInModal}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <SignIn />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navbar
