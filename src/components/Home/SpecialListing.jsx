import React from 'react'

const SpecialListing = () => {
    return (
        <div className="vansa-special-product">
            <div className="special-product-header">
                <h3>Vansa Special Products</h3>
            </div>
            <div className="special-item flex">
                <div className="special-item-card flex">
                    <div className="card-container flex">
                        <div className="card-background">
                            <div className="card-item">
                                <img src="Image/Food-Menu/Burger/Chicken-burger.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item-name-description flex">
                        <div className="item-name flex">
                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                <h5>Chicken Burger</h5>
                        </div>
                        <div className="item-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.</p>
                        </div>
                    </div>
                    <div className="price-cart flex">
                        <div>
                            <h5>NRS 285</h5>
                        </div>
                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                    </div>
                </div>
                <div className="special-item-card flex">
                    <div className="card-container flex">
                        <div className="card-background">
                            <div className="card-item">
                                <img src="Image/Food-Menu/Biryani/Chicken-biryani.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item-name-description flex">
                        <div className="item-name flex">
                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                <h5>Chicken Biryani</h5>
                        </div>
                        <div className="item-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.</p>
                        </div>
                    </div>
                    <div className="price-cart flex">
                        <div>
                            <h5>NRS 350</h5>
                        </div>
                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                    </div>
                </div>
                <div className="special-item-card flex">
                    <div className="card-container flex">
                        <div className="card-background">
                            <div className="card-item">
                                <img src="Image/Food-Menu/Pasta/Penne-Alfredo-Pasta-Veg.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item-name-description flex">
                        <div className="item-name flex">
                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                <h5>Penne Alfredo Pasta</h5>
                        </div>
                        <div className="item-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.</p>
                        </div>
                    </div>
                    <div className="price-cart flex">
                        <div>
                            <h5>NRS 300</h5>
                        </div>
                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                    </div>
                </div>
                <div className="special-item-card flex">
                    <div className="card-container flex">
                        <div className="card-background">
                            <div className="card-item">
                                <img src="Image/Food-Menu/Noodles/Veg-Noodles.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item-name-description flex">
                        <div className="item-name flex">
                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                <h5>Veg Hakka Noodles</h5>
                        </div>
                        <div className="item-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.</p>
                        </div>
                    </div>
                    <div className="price-cart flex">
                        <div>
                            <h5>NRS 150</h5>
                        </div>
                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialListing
