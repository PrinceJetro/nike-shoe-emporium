import React from 'react';
import "../styles/nav.css";




export default function Nav(props){
    return(
        <nav>
            <i class="fa fa-home" ></i>
            <i class="fa-solid fa-bell"></i>
            <i className={`fa fa-heart`} ></i>
            <i class="fa-solid fa-cart-shopping"></i>
        </nav>
    )
}