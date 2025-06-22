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

    const borrarColor= (color) =>{
        const coloresFiltrados = colores.filter((item)=> item !== color)
        //Actualizar tareas
        setColores(coloresFiltrados)
    }

  return (
    <seccion>
        <div className="bg-light opacity-75 p-4 rounded shadow-sm mb-4 text-center">
            <h2 className="fw-bolder text-primary">Paleta de colores</h2>
            <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
                <Form.Group className="m-3  d-flex">
                    <Form.Label>Seleccione un color: </Form.Label>
                    <Form.Control
                    type="color"
                    class="form-control form-control-color mx-2 p-0"
                    id="exampleColorInput"
                    value="#000000"
                    title="Choose your color"
                    onChange={(e)=> setColor(e.target.value)}
                    />
                <Button variant="primary" type="submit" className="text-center mx-2">
                    + Agregar
                </Button>
                </Form.Group>
            </Form>
        </div>

      <GridColores colores={colores} borrarColor={borrarColor}></GridColores>
    </seccion>
  );
};

export default FormularioColores;
