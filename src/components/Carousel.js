import { Carousel } from 'react-bootstrap';
import React from 'react';
import crio from './img/crio.jpg';
import botox from './img/botox.jpeg';
import {Cards} from './Cards';



function CarouselPromotion(){
    return(
        <>
            <Carousel variant="dark" style={{'margin-top': '100px'}}>
              <Carousel.Item>
                <img
                 className="d-block w-100"
                 src={botox}
                 alt="First slide"
                />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
              className="d-block w-100"
              src={crio}
              alt="Second slide"
              />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
  
            </Carousel>
            
      <Cards/>

  
      
        </>
    )
}

export default CarouselPromotion;