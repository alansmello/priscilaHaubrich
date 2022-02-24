import { Carousel, Row, Col, Card, CardGroup, Placeholder, Button  } from 'react-bootstrap';
import React from 'react';
import crio from './img/crio.jpg';
import crio3 from './img/crio3.jpeg';
import botox from './img/botox.jpeg';
import botox2 from './img/botox2.jpg';
import criofrequencia from './img/criofrequencia.jpg';
import {Link} from 'react-router-dom';


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


            <div className="d-flex justify-content-around" style={{'margin-top': '30px'}}>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={crio3} />
    <Card.Body>
      <Card.Title>Criolipólise</Card.Title>
      <Card.Text>
      A criolipólise é um método não invasivo que age na redução da gordura localizada. 
      </Card.Text>
      <Link to = '/criolipolise'><Button style={{background: 'purple', 'border-color': 'purple'}}>SAIBA MAIS</Button></Link>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={criofrequencia} />
    <Card.Body>
      <Card.Title>Criofrequência</Card.Title>
      <Card.Text>
      A criofrequência é um tratamento estético que combina radiofrequência com frio.
      </Card.Text>
      <Button style={{background: 'purple','border-color': 'purple'}}>SAIBA MAIS</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={botox2} />
    <Card.Body>
      <Card.Title>Botox</Card.Title>
      <Card.Text>
      O botox, também conhecido como toxina botulínica, é uma substância que é capaz de impedir a contração muscular.
      </Card.Text>
      <Button style={{background: 'purple','border-color': 'purple'}}>SAIBA MAIS</Button>
    </Card.Body>
  </Card>
  
</div>
      
        </>
    )
}

export default CarouselPromotion;