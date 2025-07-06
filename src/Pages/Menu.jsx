import React from 'react'
import '../css/Header-appbanner-footer.css'
import '../css/Menu.css'

const Menu = () => {
    return (
        <section className="menu">
            <div className="container menu-container flex">
                <div className="menu-section-left">
                    <div className="menu-list">
                        <ul className="flex">
                            <div className="menu-li-name">
                                <li><a href="#">BIRYANI</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#fried-rice">FRIED RICE</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#naan-roti">NAAN & ROTI</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#curry">CURRY</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#momo">MOMO</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#noodles">NOODLES</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#pizza">PIZZA</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#burger">BURGER</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#pasta">PASTA</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#starter">STARTER</a></li>
                            </div>
                            <div className="menu-li-name">
                                <li><a href="#beverage">BEVERAGE</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div id="biryani" className="menu-section-right">
                    <div className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>BIRYANI</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
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
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 350</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Biryani/Veg-biryani.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Veg Biryani</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="fried-rice" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>FRIED RICE</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Fried-rice/Chicken-fried rice.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Fried Rice</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Fried-rice/mushroom-fried-rice.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Mushroom Fried Rice</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 200</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="naan-roti" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>NAAN & ROTI</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Naan-Roti/Butter-naan.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Butter Naan</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 200</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Naan-Roti/Masala-Kulcha.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Masala Kulcha</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Naan-Roti/Garlic-naan.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Garlic Naan</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 200</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="curry" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>CURRY</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Curry/Aloo-dum.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Aloo Dum</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Curry/Chicken-butter-masala.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Butter Masala</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 350</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Curry/Chicken-Curry.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Curry</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 350</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Curry/Mushroom-matar-curry.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Mushroom Matar Curry</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 300</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="momo" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>MOMO</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Momo/chicken-fried-momo.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Fried Momo</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Momo/veg-kothey-momo.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Veg Kothey Momo</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 200</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Momo/Veg-steam-momo.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Veg Steam Momo</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 120</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Momo/chicken-jhol-momo.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Jhol Momo</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
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
                    </div>

                    <div id="noodles" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>NOODLES</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Noodles/Chicken-noodles.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Noodles</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 200</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
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
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
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
                    </div>

                    <div id="pizza" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>PIZZA</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Pizza/Chicken-pizza.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Pizza</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 500</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Pizza/Veg-pizza.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Panner Pizza</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 500</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="burger" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>BURGER</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Burger/Veg-Burger.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Veg Burger</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
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
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 285</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="pasta" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>PASTA</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
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
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 300</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Pasta/Fried-chicken-pasta.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Fried Chicken Pasta</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 270</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="starter" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>STARTER</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Starter/chicken-timur.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/non-veg.png" alt="" />
                                            <h5>Chicken Timur</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Starter/mushroom-chilli.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Mushroom Chilli</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 200</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Starter/Paneer-chilli 3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Panner Chilli</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 250</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="beverage" className="menu-section flex">
                        <div className="menu-item-header">
                            <h2>BEVERAGE</h2>
                        </div>
                        <div className="menu-card flex">
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Beverage/7up-bev.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>7 up</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 180</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Beverage/Mountaindew-bev.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Mountain Dew</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 180</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Beverage/Mrinda-bev.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Mirinda</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 180</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Beverage/pepsi-bev.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Pepsi</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 180</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item flex">
                                <div className="menu-item-card flex">
                                    <div className="card-container flex">
                                        <div className="card-background">
                                            <div className="card-item">
                                                <img src="Image/Food-Menu/Beverage/Water-bev.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-name-description flex">
                                        <div className="item-name flex">
                                            <img src="Image/Veg-nonveg/veg.png" alt="" />
                                            <h5>Water</h5>
                                        </div>
                                        <div className="item-description">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ducimus.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="price-cart flex">
                                        <div>
                                            <h5>NRS 30</h5>
                                        </div>
                                        <div><a href="#" className="hover-links primary-btn">Add to Cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
