import React from 'react'
import Header from '../components/Common/Header'

export default function Orderconfirm() {
    return (
        <>
            <Header></Header>
            <div class="message-container">
                <div class="message">- Thank you for ordering -</div>
            </div>

            <div class="thankyou-message-container">
                <div class="thankyou-message">Thank you for ordering. We received your request.</div><br />
                <div class="thankyou-message">Our staff will be contacting you with the next steps</div>
                <button class="back-to-home-button">Back To Home</button>
            </div>
        </>
    )
}
