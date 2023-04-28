import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../listaOpciones/listaOpciones"
import Boton from "../boton/boton"

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log("manejar el envio");
        let recibirDatos = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(recibirDatos)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={enviarDatos}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo titulo="Nombre" placeholder="Ingresar el nombre" required valor={nombre} actualizarValor={actualizarNombre}></Campo>
            <Campo titulo="Puesto" placeholder="Ingresar el puesto" required valor={puesto} actualizarValor={actualizarPuesto}></Campo>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}></Campo>
            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton titulo="Crear"></Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo}></Campo>
            <Campo titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={actualizarColor} type="color"></Campo>
            <Boton titulo="Registrar Equipo"></Boton>
        </form>
    </section>
}

export default Formulario 