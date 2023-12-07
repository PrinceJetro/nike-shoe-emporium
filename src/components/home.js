import React, { useEffect, useState } from 'react';
import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";
import Product from "./product";
import data from './data';
import Nav from './nav';
import nike from "../images/nike.png"


export default function Home(){


        const [greet, setGreet] = useState("")
        
        useEffect(() =>{
            const currentHour = new Date().getHours();
            if (currentHour >= 5 && currentHour < 12) {
              setGreet('Morning');
            } else if (currentHour >= 12 && currentHour < 18) {
              setGreet('Afternoon');
            } else {
              setGreet('Evening');
            }
        },[])

      
    return(
        <div className='container-fluid'>
            <div className='intro'>
                <div className='intro_nav'>
                <i class="fa fa-bars"></i>
                <img src={nike} width={75} height={50}/>
                    <img src='https://picsum.photos/50' className='avatar'/>
                </div>

                <h1> {greet } Michael </h1>
                <p>Experience fashion with our shoe line</p>


                <div className="search-div">
                    <div id="search-bar">
            <i id="search-icon" className="fa fa-search"></i>
        <input id="search-input" placeholder="Search" />
        <i id="mic-icon" className="fa fa-microphone"></i>
        </div>
  
            </div>
            </div>

            <div className='collection_menu'>
                <h1>New Collection</h1>

                <div className='categories'>
                
                    <div><p>All</p></div>
                    <div><p>Running</p></div>
                    <div><p>Lifestyle</p></div>
                    <div><p>Bla</p></div>
                    <div><p>Bla</p></div>
                    <div><p>Bla</p></div>
                </div>

            </div>


           <div className='collection'>
           {
                data.map((item, index, key) => 
                <Link to={`/about/${item.brand}`} key={index}>
                <Product price= {item.price} brand={item.brand} type={item.type} img={item.img} color={item.color} />
                </Link>
                )
            }
           </div>


            <Nav/>

        </div>
    )
}