import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/miOrg/miOrg.js';
import Equipo from './componentes/equipo/equipo.js';
import Footer from './componentes/footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/cgb22.png",
    nombre: "Cesar Garcia",
    puesto: "Estudiante en Alura Latam",
    fav: false
  },{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/HarlandLohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor en Alura Latam",
    fav: true
  },{
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Instructor en Alura Latam",
    fav: true
  }]) //siempre se usa el arreglo vacio porque si utilizamos el arreglo map se rompera el codigo 
  //si condicion es true && se muestra
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06869",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
]
)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // crear colaboradores/trabajadores
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //spread operator se refiere a cuendo se utilicen los ... puntitos estamos creando una copia de un valor en este caso un colaborador/trabajador
    actualizarColaboradores([...colaboradores, colaborador])

  }

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizarColordeEquipos
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        return {
          ...equipo,
          colorPrimario: color
        }
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
}

  //crear equipos 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  //darle me gusta 
  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo = {crearEquipo}
      />}
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo
         datos = {equipo}
         key={equipo.titulo}
         eliminarColaborador={eliminarColaborador}
         actualizarColor={actualizarColor}
         colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
         like={like}>
         </Equipo>
         )
      }
      <Footer/>
     </div>
  );
}

export default App;
