import React from 'react'

const Banner = () => {
    return (
        <section className="app-banner-section">
            <div className="container banner-container flex">
                <div className="left-section flex">
                    <div className="left-upper">
                        <h2>Fresh & Fast, Just for You!</h2>
                        <p>Order your favorite meals now and enjoy lightning-fast delivery!</p>
                    </div>
                    <div className="left-mid">
                        <h3>Vansa App</h3>
                        <h2>Download Now!!</h2>
                    </div>
                    <div className="left-lower flex">
                        <h4>Available now on</h4>
                        <div className="store flex">
                            <a href="#"><img src="Image/Store/Appstore.png" alt="" /></a>
                            <a href="#"><img src="Image/Store/Playstore.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <img src="Image/App-banner/app-banner.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner
