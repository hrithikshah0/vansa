import React from 'react'
import '../../css/Change-password-section.css'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
    return (
        <div class="right-account-section">
            <div class="change-password-content">
                <form action="" class="form-update flex">
                    <div class="account-section-header">
                        <h4>CHANGE PASSWORD</h4>
                    </div>
                    <div class="change-password-details flex">
                        <div class="flex details">
                            <input type="text" placeholder="Old Password" />
                        </div>
                        <div class="flex details">
                            <input type="text" placeholder="New Password" />
                        </div>
                        <div class="flex details">
                            <input type="text" placeholder="Confirm Password" />
                        </div>
                        <div class="flex details">
                            <button class="hover-links primary-btn">UPDATE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
