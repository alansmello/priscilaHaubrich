import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CarouselPromotion from './components/Carousel.js';
import Criolipolise from './components/Criolipolise';
import Criofrequencia from './components/Criofrequencia';

function Rotas(){
    return(
        <Routes >
            <Route path = "/" element ={<CarouselPromotion/>}/>
            <Route path = "/criolipolise" element ={<Criolipolise/>}/>
            <Route path = "/criofrequencia" element ={<Criofrequencia/>}/>
            
        </Routes>
    )
}

export default Rotas;

