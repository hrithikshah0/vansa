import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import '../css/Account-section.css'

const Account = () => {
    return (
        <div className="right-account-section">
            <div className="my-profile-content">
                <form action="" className="form-update flex">
                    <div className="account-section-header">
                        <h4>MY PROFILE</h4>
                    </div>
                    <div className="profile-details flex">
                        <div className="input-section flex">
                            <div className="flex input-details">
                                <label htmlFor="firstname">First Name</label>
                                <input id='firstname' type="text" />
                            </div>
                            <div className="flex input-details">
                                <label htmlFor="lastname">Last Name</label>
                                <input id='lastname' type="text" />
                            </div>
                        </div>
                        <div className="input-section flex">
                            <div className="flex input-details">
                                <label htmlFor="email">Email</label>
                                <input id='email' type="text" />
                            </div>
                            <div className="flex input-details">
                                <label htmlFor="phonenumber">Phone Number</label>
                                <input id='phonenumber' type="text" />
                            </div>
                        </div>
                        <div className="update-btn">
                            <a href="#" className="primary-btn">UPDATE</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Account
