import React,{ useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import CartItem from '../components/Common/CartItem';
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
// import Imgtest2 from "../assets/img/test2.png"
// import Imgtest3 from "../assets/img/test3.png"
import Imgbackground from "../assets/img/main-pic.png"
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/user/selectors";
import { getItems } from "../reducks/items/selectors";

export default function Cart() {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUser(selector);
    const items = getItems(selector);
    const checkOut = () => {
        dispatch(push("/checkout"));
    };

    useEffect(() => {
        if (user.token != "") {
            dispatch(fetchCarts(user.token));
            console.log("test");
            console.log(carts);
        }
    }, [user]);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
    }, []);

    return (
        <>
            <div class="background" style={{ backgroundImage: `url(${Imgbackground})` }}>
                <Header />

                <div class="border-container-container">
                    <div class="border-container">
                        <div class="header-bottom-border"></div>
                    </div>
                </div>

                {/* <div class="bg-text-container">
                    <div class="bg-text-phone">     
                        <div>My Cart</div>
                    </div>
                </div> */}
            </div>

            <ul>
                {carts &&
                    carts.map((cart) => (
                        <li>
                            <CartItem key={cart.item.id} presentcart={cart} />
                        </li>
                    ))}
            </ul>

            {/* <div class="list-container-container">
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
                    <a href="/Users/yakisoba/repos/selfdev/static/pics/test3.png" target="_blank">
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
                    <a href="/Users/yakisoba/repos/selfdev/static/pics/test2.png" target="_blank">
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
                    <a href="/Users/yakisoba/repos/selfdev/static/pics/test3.png" target="_blank">
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
            </div> */}

            <div class="list-border-container">
                <div class="list-container-bottom-border"></div>
            </div>

            <div class="subtotal-container-container">
                <div class="subtotal-container">
                    <div class="subtotal-item">Subtotal: $3800</div>
                    <button
                        class="subtotal-item"
                        onClick={checkOut}
                        style={{ cursor: `pointer` }}
                    >Check out</button>
                </div>
            </div>
        </>
    )
}
