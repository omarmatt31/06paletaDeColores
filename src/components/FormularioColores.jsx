import { Form, Button } from "react-bootstrap";
import GridColores from "./GridColores";
import { useState } from "react";

const FormularioColores = () => {

    const [color, setColor] = useState('')
    const [colores, setColores] = useState([])

    const handleSubmit= (e)=>{
        e.preventDefault();
        setColores([...colores, color])
        setColor('')
    }
  return (
    <seccion>
      <h3>Administrar colores</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3  d-flex">
            <Form.Label>Seleccione un color: </Form.Label>
            <Form.Control
              type="color"
              class="form-control form-control-color mx-2"
              id="exampleColorInput"
              value="#000000"
              title="Choose your color"
              onChange={(e)=> setColor(e.target.value)}
            />
          <Button variant="warning" type="submit" className="text-center mx-2">
            + Agregar
          </Button>
        </Form.Group>
      </Form>
      <GridColores colores={colores}></GridColores>
    </seccion>
  );
};

export default FormularioColores;
