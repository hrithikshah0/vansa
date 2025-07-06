import React from 'react'
import '../../css/SignIn.css'

const SignIn = () => {
    return (
        <div className="signin-form ">
            <form action="">
                <div className="container form-container flex">
                    <div className="left flex">
                        <div className="image">
                            <img src="Image/Form/tandoori_chicken.png" alt="" />
                        </div>
                        <h1>Vansa</h1>
                        <p>छिटो र मिठो</p>
                    </div>
                    <div className="right flex">
                        <div className="signin-head">
                            <h2>Sign in</h2>
                        </div>
                        <div className="signin-details flex">
                            <div className="signin flex">
                                <div>
                                    <input type="text" placeholder="Email or Mobile Number" />
                                </div>
                                <div>
                                    <input type="Password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="check-sign flex">
                                <div className="checkbox">
                                    <input type="checkbox" />
                                    <label for="rememberme">Remember me</label>
                                </div>
                                <div>
                                    <a href="#" className="hover-links secondary-btn">Sign in</a>
                                </div>
                            </div>
                        </div>
                        <div className="login-platform flex">
                            <p>OR LOGIN USING</p>
                            <div className="platform flex">
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                            </div>
                        </div>
                        <div className="sign-up">
                            <p>Don't have an account?<a href="Signup.html" className="hover-links"><b>Signup</b></a></p>
                        </div>
                        <div className="forgot">
                            <a href="#" className="hover-links">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
