import React, { useEffect, useState } from 'react';
import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";
import Product from "./product";
import data from './data';
import Nav from './nav';
import nike from "../images/nike.png"
import ava from "../images/ava.png"

export default function Home(){


        const [greet, setGreet] = useState("");
        const [filter, setFilter] = useState([]);
        
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

        const searchFunction = (event) => {
            const searchTerm = event.target.value.toUpperCase();
          
            if (searchTerm) {
              const filteredData = data.filter(item =>
                item.brand.toUpperCase().includes(searchTerm)
              );
          
              // Log or use the filteredData array as needed
              console.log(event.target.value);
              setFilter(filteredData)
            } else {
              console.log(`Search term must be at least 2 characters.`);
              setFilter([])
            }
          };
                
    return(
        <div className='container-fluid'>
            <div className='intro'>
                <div className='intro_nav'>
                <i class="fa fa-bars"></i>
                <img src={nike} width={75} height={50} alt='Nike Logo'/>
                    <img src={ava} className='avatar' alt='avatar'/>
                </div>

                <h1> {greet } Michael </h1>
                <p>Experience fashion with our shoe line</p>


                <div className="search-div">
                    <div id="search-bar">
            <i id="search-icon" className="fa fa-search"></i>
        <input id="search-input" placeholder="Search" onChange={searchFunction} />
        <i id="mic-icon" className="fa fa-microphone"></i>
        </div>
            </div>
          
            <div>
                <ul>
                {
                filter.map((item, index, key) => 
                <Link to={`/about/${item.brand}`} key={index}>
                <li>{item.brand}</li>
                </Link>
                )
            }
                </ul>
            </div>

            </div>

            <div className='collection_menu'>
                <h1>New Collection</h1>

                <div className='categories'>
                
                    <div className='p'><p>All</p></div>
                    <div className='p'><p>Running</p></div>
                    <div className='p'><p>Lifestyle</p></div>
                    <div className='p'><p>Outing</p></div>
                    <div className='p'><p>Social</p></div>
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