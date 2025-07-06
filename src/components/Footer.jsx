import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCallSharp } from 'react-icons/io5'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container flex">
                <div className="left-footer">
                    <h1>Vansa</h1>
                    <p>छिटो र मिठो</p>
                </div>
                <div className="right-footer flex">
                    <div>
                        <h4>ABOUT</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Delivery Charges</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>GET HELP</h4>
                        <ul>
                            <li><a href="#">How to Order?</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQS</a></li>
                            <li><a href="#">Help & Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>LEGAL</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="contact-details flex">
                        <div>
                            <h4>GET IN TOUCH</h4>
                        </div>
                        <div className="details flex">
                           <FaLocationDot />
                            <p>College Road 10, Biratnagar 56613, Nepal</p>
                        </div>
                        <div className="details flex">
                            <IoCallSharp />
                            <p>9874561230, 9812365470</p>
                        </div>
                        <div className="details flex">
                            <FaEnvelope />
                            <p>vansa123@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
