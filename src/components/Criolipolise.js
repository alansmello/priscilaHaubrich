import { Container, Col, Row } from 'react-bootstrap';
import React from 'react';
import crio2 from './img/crio2.jpg'

function Criolipolise(){
    return(
        <Container fluid>
           
  <Row>
      <h1 style={{'margin-top':'120px','display': 'flex', 'align-items':'center', 'justify-content': 'center'}}>Criolipólise</h1>
    <Col>
    <img src={crio2} alt=""  style = {{ width: '80%', 'margin-top': '15px', 'display': 'block','margin-left': 'auto','margin-right': 'auto'}}/></Col>
    <p style={{padding:'20px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam eaque magnam, necessitatibus molestias facere dolore minima exercitationem quos dignissimos eligendi aliquid ut, deleniti hic, dolorem repudiandae voluptas vero veniam!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione autem, iure quasi suscipit illo molestiae ipsam laborum maxime tempora a cupiditate dolorum! Deserunt, numquam amet! Cum optio consequuntur sequi enim.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt ratione velit maiores mollitia dolor rerum aperiam alias excepturi eveniet! Eaque fuga omnis velit consectetur quas vel dolore iste repellat.
    </p>
  </Row>
</Container>
    )
}

export default Criolipolise;