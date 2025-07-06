import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import '../css/Offer.css'

const Offer = () => {
    return (
        <>
            <Breadcrumb current="Offer" />
            <section className="offer-details-section flex">
                <div className="container offer-container flex">
                    <div className="offer-details flex">
                        <div>
                            <h2>No Offers Available</h2>
                            <p>You can go to home page to view more Vansa delights</p>
                        </div>
                        <div>
                            <Link to="/Home" className="hover-links primary-btn">Go Back To Homepage</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer
