import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CarouselPromotion from './components/Carousel.js';
import Criolipolise from './components/Criolipolise';

export default () =>{
    return(
        <Routes>
            <Route path = "/" element ={<CarouselPromotion/>}/>
            <Route path = "/criolipolise" element ={<Criolipolise/>}/>
                
            
            
        </Routes>
    )
}

