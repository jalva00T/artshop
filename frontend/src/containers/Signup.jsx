import React from 'react'
import Imgtest2 from "../assets/img/test2.png"
import Imgtest3 from "../assets/img/test3.png"
import Imgbackground from "../assets/img/main-pic.png"
import Header from '../components/Common/Header'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signUp } from "../reducks/user/operations";


export default function Signup() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push("/"));
    };

    const [user_name, setUserName] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const inputUserName = (event) => {
        setUserName(event.target.value);
    };

    const inputEmail = (event) => {
        setEmail(event.target.value);
    };

    const inputPassword = (event) => {
        setPassword(event.target.value);
    };

    const signUpButton = (e) => {
        e.preventDefault();
        dispatch(signUp(user_name, email, password));
        setUserName("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <div class="background" style={{ backgroundImage: `url(${Imgbackground})` }}>
                <Header />

                <div class="border-container-container">
                    <div class="border-container">
                        <div class="header-bottom-border"></div>
                    </div>
                </div>

                <div class="bg-text-container">
                    <div class="bg-text">
                        <div>Culture</div>
                        <div>Creativity</div>
                        <div>&artisans</div>
                    </div>
                </div>
            </div>


            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={Imgtest2} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" >
                        <img alt="" src={Imgtest3} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self 2</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={Imgtest2} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={Imgtest3} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self 2</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-border-container">
                <div class="list-container-bottom-border"></div>
            </div>

            <div class="subtotal-container-container">
                <div class="subtotal-container">
                    <div class="subtotal-item">Subtotal: $3800</div>
                    <button class="subtotal-item">Check you cart</button>
                </div>
            </div>

            {/* SIGN UP */}

            <div class="sign-up-container">
                <div class="sign-up-inner">
                    <div class="top">
                        <div class="art-and-soul-3">Art and Soul</div>
                        <div class="close-window sign-up-close" onClick={closeButton} style={{ cursor: `pointer` }}>X</div>
                    </div>

                    <div class="sign-up">SIGN UP</div>

                    <div class="form-container">
                        <input
                            class="sign-up-input"
                            placeholder="Username"
                            type="text"
                            name="username"
                            id="username"
                            onChange={inputUserName}
                        />
                        <br />
                        <input
                            class="sign-up-input"
                            placeholder="Email address"
                            type="text"
                            name="email"
                            id="email"
                            onChange={inputEmail}
                        />
                        <br />
                        <input
                            class="sign-up-input"
                            placeholder="Password"
                            type="text"
                            name="password"
                            id="password"
                            onChange={inputPassword}
                        />
                        <button
                            class="join-button"
                            type="submit"
                            name="signup"
                            value="SIGN UP"
                            onClick={signUpButton}
                            style={{ cursor: `pointer` }}
                        >JOIN US</button>
                    </div>

                    <div class="bottom">
                        <div class="member">Already a member?</div>
                        <a class="sign-up-link" href="/signin">Sign In</a>
                    </div>
                </div>
            </div>
        </>
    )
}
