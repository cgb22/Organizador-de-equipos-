import { useState } from "react";
import "./campo.css"

const Campo = (props) =>{
    const holderModificado = `${props.placeholder}...`

    //destructuracion 
    const {type = "text"} = props
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input placeholder= { holderModificado }
         required ={props.required} 
         value={props.valor}
         onChange={manejarCambio}
         type={type}></input>
    </div>
}

export default Campo