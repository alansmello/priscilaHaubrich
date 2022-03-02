import { Card, Button  } from 'react-bootstrap';
import crio3 from './img/crio3.jpeg';
import botox from './img/botox.jpeg';
import botox2 from './img/botox2.jpg';
import criofrequencia from './img/criofrequencia.jpg';
import {Link} from 'react-router-dom';

export const Cards = ()=>{
    return(
        <div style={{'display': 'grid',padding: '20px', 'grid-template-columns': 'repeat(auto-fill, minmax(280px, 1fr))','justify-items': 'center','gap':'30px'}}>
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
      <Link to = '/criofrequencia'><Button style={{background: 'purple','border-color': 'purple'}}>SAIBA MAIS</Button></Link>
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
  
</div>
    )
}