import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import { Link } from 'react-router-dom';
import "../styles/about.css"
import cart from "../images/Cart 2-1.png";
import ss from "../images/Nike\ \(1\).png"


export default function Home(props){

    const { src } = useParams();
    const [image, setImage] = useState('')
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    

    const toggleLike = () => {
      setIsLiked(!isLiked);
    };
  

    useEffect(() => {
        const all_index = data.length - 1;
    
        for (let i = 0; i <= all_index; i++) {
          if (data[i].brand === src) {
            setImage(data[i].img);
            setType(data[i].type);
            setBrand(data[i].brand);
            setPrice(data[i].price);
            setColor(data[i].color);
            break;
          }
        }
      }, [src]);
      const handleGoBack = () => {
        window.history.back(); // This will navigate back to the previous page in the browser's history.
      };
      useEffect(() => {
        const image = document.getElementById('img');
    
        // Add the return-to-normal class after a delay (e.g., 3000 milliseconds)
        const delay = 1000; // Adjust the delay as needed
        const timeoutId = setTimeout(() => {
          image.classList.add('start');
          const timeoutId = setTimeout(() => {
            image.classList.add('finish');
          }, delay);
        }, delay);
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array ensures the effect runs only once on mount
    


    return(
        <div style={{ backgroundColor:color}} className='container-fluid1'>

          <div className='actions'> 
          <div>
          <i class="fa-solid fa-arrow-left" onClick={handleGoBack} ></i>
          </div>
          <div>
          <i className={`fa fa-heart heart ${isLiked ? 'liked' : ''}`} onClick={toggleLike}></i>
          </div>
          </div>

          <div className='display'>
            <h1>{brand}</h1>
            <h6>Men's Shoe</h6>
            <img src={image} id='img' />
          </div>


          <div className='price_div'>
            <div>
              <h4>Price</h4>
              <h6>${price}</h6>
            </div>
            <div>
              <h4>Color</h4>
              <div className='color_div'>
                <div className='the_color'></div>
                <div className='white'></div>
                <div className='black'></div>
              </div>
            </div>
          </div>

          <div className='collection_menu1'>
                <div className='categories'>
                    <div><p>38.5</p></div>
                    <div><p>40.5</p></div>
                    <div><p>41.5</p></div>
                    <div><p>42.5</p></div>
                    <div><p>43.0</p></div>
                </div>

            </div>

          <div className='cart_div'>
            <h3 className='price'>Add to cart</h3>
            <div className='cart'>
                <img src={cart}/>
            </div>
          </div>

        </div>
    )
}