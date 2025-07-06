import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'
import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner'

const Layout = () => {
    return (
        <>
            <Navbar />

            <Outlet />
            <Banner />
            <Footer />
            <SubFooter />
        </>
    )
}

export default Layout
