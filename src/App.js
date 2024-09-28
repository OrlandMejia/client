import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {

  //administrar los estados
  const [codigo,setCodigo] = useState("");
  const [nombre,setNombre] = useState("");
  const [descripcion,setDescripcion] = useState("");
  const [asignar,setAsignar] = useState("");
  const [fecha_creacion, setFecha_creacion] = useState("");
  const [nombre_proyecto,setNombre_proyecto] = useState("");
  const [nivel,setNivel] = useState("");

  //funcion para submit
  const add = () =>{
    //utilizamos la libreria axios e indicamos la url en post y fijamos el cuerpo
    Axios.post("http://localhost:3001/create",{
      codigo:codigo,
      nombre:nombre,
      descripcion:descripcion,
      nivel:nivel,
      nombre_proyecto:nombre_proyecto,
      asignar:asignar,
      fecha_creacion:fecha_creacion
    }).then(()=>{
      alert("Caso Registrado");
    });
  }

  return (
    <div className="App">
      <div className = "datos">
        <label>Codigo</label>
        <input 
        onChange={(event)=>{
          setCodigo(event.target.value) 
        }}
        type="text" name="codigo" id="codigo" />
        <label>Nombre</label>
        <input 
        onChange={(event)=>{
          setNombre(event.target.value)
        }}
        type="text" name="nombre" id="nombre" />
        
        <label>Descripcion</label>
        <input 
        onChange={(event)=>{
          setDescripcion(event.target.value)
        }}
        type="text" name="descripcion" id="descripcion" />

        <label>Nivel de Importancia</label>
        <input 
        onChange={(event)=>{
          setNivel(event.target.value)
        }}
        type="text" name="nivel" id="nivel" />

        <label>Nombre del Proyecto</label>
        <input 
        onChange={(event)=>{
          setNombre_proyecto(event.target.value)
        }}
        type="text" name="nombre_proyecto" id="nombre_proyecto" />

          <label>Asignado a: </label>
          <select 
            onChange={(event) => setAsignar(event.target.value)}
            name="asignar" id="asignar"
          >
            <option value="">Seleccione un usuario</option>
            <option value="1">Usuario 1</option>
            <option value="2">Usuario 2</option>
            <option value="3">Usuario 3</option>
          </select>

        <label>Fecha de Creación</label>
        <input 
        onChange={(event)=>{
          setFecha_creacion(event.target.value)
        }}
        type="date" name='fecha_creacion' id='fecha_creacion'></input>
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}



export default App;
