import React from 'react'
import ImgBag from "../../assets/img/bag.png"

export default function Header() {
    return (
        <>
            <header>
                <div class="header-container">
                    <h2 class="art-and-soul"><a href="/">Art and Soul</a></h2>
                    <div class="right-side-nav">
                        <a class="sign-in title-icon navbar-brand" href="/signin">Sign In</a>
                        <a class="sign-in title-icon navbar-brand" href="/cart">
                            <img class="bag" alt="" src={ImgBag} />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
