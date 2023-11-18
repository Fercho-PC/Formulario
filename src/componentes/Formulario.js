import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Alert } from 'bootstrap';
import Table from 'react-bootstrap/Table';



export default function Formulario() {
  const [Nombre, SetNombre] = useState("");
  const [Apellido, SetApellido] = useState("");
  const [Contraseña, SetCon] = useState("");
  const [Email, SetEmail] = useState("");
  const [usuarios,setUsuarios] = useState([]);


  const add = (e)=>{
    e.preventDefault();

    Axios.post("http://localhost:3001/create",{
      Nombre: Nombre,
    Apellido: Apellido,
    Email:Email,
    Contraseña:Contraseña
    }).then(()=>{
      alert("USUARIO REGISTRADO")
    })
  }
  const getUsuarios = () =>{
    Axios.get("http://localhost:3001/usuarios").then((Response)=>{
      setUsuarios(Response.data);
    })
  }

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(event)=>{
          SetEmail(event.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(event)=>{
          SetCon(event.target.value)
        }}
        />
        <Row>
          <div>
            <br>
            </br>
          </div>
        <Col>
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Nombre" 
          onChange={(event)=>{
            SetNombre(event.target.value)
          }}/>
        </Col>
        <Col>
          <Form.Label>Apellido</Form.Label>
          <Form.Control placeholder="Apellido" 
          onChange={(event)=>{
            SetApellido(event.target.value)
          }}/>
        </Col>
        
      </Row>
          <div>
            <br>
            </br>
          </div>
      <Row>
        <Button variant="dark" type="submit"
        onClick={add}>
          Guardar
        </Button>
      </Row>
      </Form.Group>
        
    </Form>

       <Button variant="dark" type="submit"
        onClick={getUsuarios}>
          Listar
        </Button>
        
      <Table striped bordered hover>
      <thead>
      <tr>
         
          <th>Nombre</th>
          <th>Apellido</th>
          
          <th>Accion</th>
         
        </tr>
      </thead>
        
        
      <tbody>
        {usuarios.map((KKS)=>(
          
        
        
        <tr key={KKS.id}>
          <td>{KKS.Nombre}</td>
          <td> {KKS.Apellido}</td>
          <td> <Button variant="info">Editar</Button>{'  '}
          <Button variant="danger">Eliminar</Button></td>
          
        </tr>
        ))}
      </tbody>
    </Table>


        
    </>
  )
}

