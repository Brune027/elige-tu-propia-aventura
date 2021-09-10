import { Component } from "react";

export class Selector extends Component {
    render() {
        const {opciones, onOpcionSeleccionada, ultimaPagina} = this.props;
        
        // Si estamos en la última pagina entonces sólo se ve el botón Volver a empezar, sino se muestran las opciones
        // Por las dudas que en algún momento existan más opciones buscamos todas las propiedades que existan en el objeto
        return <div className="opciones">
            { ultimaPagina ? 
                <div className="opcion">
                    <button className="botones" onClick={() => onOpcionSeleccionada("FIN")}>Volver a empezar</button>
                </div>
            : (opciones ?
                Object.keys(opciones).map((key) => {
                    return <div className="opcion" key={key}>
                        <button className="botones" onClick={() => onOpcionSeleccionada(key)}>{key.toUpperCase()}</button> 
                        <h2>{opciones[key]}</h2>
                    </div>
                }): <></>)
            }
        </div>
    }
}
