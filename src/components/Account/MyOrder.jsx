import React from 'react'
import '../../css/My-order-section.css'

function MyOrder() {
    return (
        <div class="right-account-section flex">
            <div class="right-account-container">
                <div class="favorite-details flex">
                    <div>
                        <h2>You haven't placed any orders yet.</h2>
                        <p>You can go to home page to view more Vansa delights</p>
                    </div>
                    <div>
                        <a href="/After-login-Pages/Home-after-login.html" class="hover-links primary-btn">Go Back To Homepage</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrder
