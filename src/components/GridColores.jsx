import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CardColor from './CardColor';

const GridColores = ({colores, borrarColor}) => {
    return (
        <div>
            <Container>
                <Row>
                    {
                       colores.map((item, indice)=> <CardColor key={indice} color={item} borrarColor={borrarColor}></CardColor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default GridColores;