import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const SubFooter = () => {
    return (
        <footer className="subfooter-section">
            <div className="container subfooter-content flex">
                <div>©2025 Vansa®. All Rights Reserved</div>

                <div className="subfooter-social-icon flex">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
            </div>
        </footer>
    )
}

export default SubFooter
