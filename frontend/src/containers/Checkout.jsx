import React from 'react'
import Header from '../components/Common/Header'

export default function Checkout() {
    return (
        <>
        <Header></Header>
            <div class="message-container">
                <div class="message">- Order your items -</div>
            </div>

            <div class="shipment-container">
                <div class="shipment">
                    <div class="details">Shipment Details</div>
                    <div class="item-check">Please check your items and confirm it</div>
                    <div class="item-1-container">
                        <div class="name">Yellow Sea Moss</div>
                        <div class="number">1</div>
                        <div class="price">$380.99</div>
                    </div>
                    <div class="item-2-container">
                        <div class="name">Burdock Root</div>
                        <div class="number">2</div>
                        <div class="price">$124.99</div>
                    </div>

                    <div class="border-container">
                        <div class="header-bottom-border"></div>
                    </div>

                    <div class="total-price-container">
                        <div class="price-name">Total Price</div>
                        <div class="price-number">3</div>
                        <div class="total-price">$649.97</div>
                    </div>
                </div>
            </div>

            <form class="shipment-form-container">
                <div class="shipment-form">

                    <label class="label">Full Name</label>
                    <input class="cart-input" placeholder="Enter Recipients Name" /><br /><br />

                    <label class="label">Phone Number</label>
                    <input class="cart-input" placeholder="Enter Phone Number" /><br /><br />

                    <label class="label">Street address or P.O. Box</label>
                    <input class="cart-input" placeholder="Enter Street Address or P.O. Box" /><br /><br />

                    <label class="label">PIN Code</label>
                    <input class="cart-input" placeholder="Enter PIN code" /><br /><br />

                    <label class="label">Apt, suite, unit, building, floor, etc.</label>
                    <input class="cart-input" placeholder="Enter Apt, Suite, Unit, Building, etc." /><br /><br />

                    <label>City</label>
                    <input class="cart-input" placeholder="Enter City" /><br /><br />

                    <label>State</label>
                    <input class="cart-input" placeholder="Enter State" /><br /><br />

                    <button class="submit-button">SUBMIT</button>

                </div>
            </form>
        </>
    )
}
