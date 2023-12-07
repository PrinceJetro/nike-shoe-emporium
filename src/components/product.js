import React from 'react';
import "../styles/product.css";
import { Outlet, Link } from "react-router-dom";
import cart from "../images/Cart 2-1.png"




export default function Home(props){
    return(
        <div className='product_div' style={{ backgroundColor: props.color }}>
                                <img src={props.img} className='product_image '/>
                                <div>
                                    <h1>{props.brand}</h1>
                                    <i className={`fa fa-heart`} ></i>
                                </div>
                                
                                <h3>{props.type}</h3>


                                <div>
                                <h1 className='price1'>${props.price}</h1>

                                <div className='cart_div1'>
                                <i class="fa-solid fa-cart-shopping"></i>
                                         </div>
                                </div>
        </div>
    )
}