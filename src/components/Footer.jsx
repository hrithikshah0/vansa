import React from 'react'

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
                            <i className="fa-solid fa-location-dot"></i>
                            <p>College Road 10, Biratnagar 56613, Nepal</p>
                        </div>
                        <div className="details flex">
                            <i className="fa-solid fa-phone"></i>
                            <p>9874561230, 9812365470</p>
                        </div>
                        <div className="details flex">
                            <i className="fa-solid fa-envelope"></i>
                            <p>vansa123@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
