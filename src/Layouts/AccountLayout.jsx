import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'

const AccountLayout = () => {
    const location = useLocation();
    
    // Helper function to determine if a link is active
    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <>
            <Navbar />
            <Breadcrumb current={"Account"} />
            <section className="account">
                <div className="container account-container flex">
                    <div className="left-account-section">
                        <div className="my-profile flex">
                            <div className=" bottom-border">
                                <h3>MY ACCOUNT</h3>
                            </div>
                            <div>
                                <ul className="account-option flex">
                                    <li>
                                        <Link 
                                            to='/account/profile' 
                                            className={`hover-links bottom-border ${isActive('/account/profile') ? 'active-status' : ''}`}
                                        >
                                            MY PROFILE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to='/account/my-orders' 
                                            className={`hover-links bottom-border ${isActive('/account/my-orders') ? 'active-status' : ''}`}
                                        >
                                            MY ORDERS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to='/account/change-password' 
                                            className={`hover-links bottom-border ${isActive('/account/change-password') ? 'active-status' : ''}`}
                                        >
                                            CHANGE PASSWORD
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to='/account/my-address' className="hover-links bottom-border">
                                            MY ADDRESS
                                        </Link>
                                    </li> */}
                                    <li>
                                        <a href="/home" className="hover-links bottom-border">LOGOUT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </section>
            <Banner />
            <Footer />
            <SubFooter />
        </>
    )
}

export default AccountLayout
