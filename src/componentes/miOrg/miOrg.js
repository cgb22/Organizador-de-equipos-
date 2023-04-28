import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
   //concepto use state 
   //estado HOOKS
   // const [variable, funcion] = useState(valorInicial)
   console.log(props)
   /*const [mostrar, actualizarMostrar] = useState(true)
   const clickear = () => {
      console.log("mostrar elemento", !mostrar)
      actualizarMostrar(!mostrar)
   }*/
   console.log(useState)

   return <section className="Orgsection">
    <h3 className="titulo">Mi Organización</h3>
    <img src="/img/Botão add-01 1.png" alt="boton" onClick={props.cambiarMostrar}></img>
   </section> 
}

export default MiOrg