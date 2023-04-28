import "./listaOpciones.css"
import Formulario from "../formulario/Formulario.js"

const ListaOpciones = (props) => {
   

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)// te ayuda a actualizar en el estado de los equi`pos
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo, index) =>{
                return <option key={index}>{equipo}</option>
            }) }
        </select>
    </div>
};

export default ListaOpciones