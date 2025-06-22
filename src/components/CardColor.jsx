import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardColor = ({color, borrarColor}) => {

    return (
        <Col xs={12} sm={6} md={4} lg={3} className='my-3'>
            <Card style={{height:'14rem' }}>
                <Card.Body className='m-0 p-0 pb-3'>
                    <div className="h-75" style={{backgroundColor: color}}></div>
                    <div className='my-3 px-3 d-flex justify-content-between'>
                        <Card.Text>
                        {color}
                            </Card.Text>
                            <Button variant="outline-danger" onClick={()=> borrarColor(color)}>Borrar</Button>
                    </div>
                </Card.Body>
            </Card> 
        </Col>
    );
};

export default CardColor;