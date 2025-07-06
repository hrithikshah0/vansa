import React from 'react'
import '../css/Cart.css'

const Cart = () => {
    return (
        <>
            <section class="order-details-system">
                <div class="container">
                    <div class="order-details">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Details</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th><a href="#">Clear All</a></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="Image/Billing-section/menu2_img_1.jpg" alt="" /></td>
                                    <td>
                                        <strong>Chicken Biryani</strong>
                                    </td>
                                    <td><strong>NRS 350.00</strong></td>
                                    <td>
                                        <div class="quantity-btn">
                                            <button class="btn-minus">−</button>
                                            <input type="text" placeholder="1" />
                                            <button class="btn-plus">+</button>
                                        </div>
                                    </td>
                                    <td><strong>NRS 350.00</strong></td>
                                    <td><a href="#"><i class="fa-solid fa-xmark"></i></a></td>
                                </tr>
                                <tr>
                                    <td><img src="Image/Billing-section/menu2_img_1.jpg" alt="" /></td>
                                    <td class="item-details">
                                        <strong>Chicken Burger</strong>
                                    </td>
                                    <td><strong>NRS 285.00</strong></td>
                                    <td>
                                        <div class="quantity-btn">
                                            <button class="btn-minus">−</button>
                                            <input type="text" placeholder="1" />
                                            <button class="btn-plus">+</button>
                                        </div>
                                    </td>
                                    <td><strong>NRS 285.00</strong></td>
                                    <td><a href="#"><i class="fa-solid fa-xmark"></i></a></td>
                                </tr>
                                <tr>
                                    <td><img src="Image/Billing-section/menu2_img_1.jpg" alt="" /></td>
                                    <td class="item-details">
                                        <strong>Panner Pizza</strong>
                                    </td>
                                    <td><strong>NRS 500.00</strong></td>
                                    <td>
                                        <div class="quantity-btn">
                                            <button class="btn-minus flex">−</button>
                                            <input type="text" placeholder="1" />
                                            <button class="btn-plus flex">+</button>
                                        </div>
                                    </td>
                                    <td><strong>NRS 500.00</strong></td>
                                    <td><a href="#"><i class="fa-solid fa-xmark"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


            <section class="order-billing-system">
                <div class="container billing-system-container flex">
                    <div class="left-billing">
                        <img src="Image/Billing-section/Billing-section.jpg" alt="Food Image" />
                    </div>
                    <div class="right-billing">
                        <div class="right-billing-content">
                            <h3>Order Cart</h3>
                            <div class="bill-amount">
                                <div class="cart-line">
                                    <span>Subtotal:</span>
                                    <span>NRS 124.00</span>
                                </div>
                                <div class="cart-line">
                                    <span>Delivery:</span>
                                    <span>NRS 00.00</span>
                                </div>
                                <div class="cart-line">
                                    <span>Discount:</span>
                                    <span>NRS 10.00</span>
                                </div>
                            </div>
                            <div class="cart-line total">
                                <strong>Total:</strong>
                                <strong>NRS 134.00</strong>
                            </div>
                            <form class="coupon-form">
                                <input type="text" placeholder="Coupon Code" />
                                <button type="submit">Apply</button>
                            </form>
                            <a href="" class="checkout-btn">Checkout</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
