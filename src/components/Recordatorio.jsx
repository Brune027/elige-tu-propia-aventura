import { Component } from "react";

export class Recordatorio extends Component {
    render() {
        const {seleccionesAnteriores} = this.props;

        return <div className="recordatorio">
            <h3>Selección anterior: {seleccionesAnteriores.at(-1)}</h3>
            <h4>Historial de opciones elegidas: </h4>
            <ul>
                {
                    seleccionesAnteriores.slice(0, -1).map((seleccion, index) => {
                        return <li key={index}>{seleccion}</li>
                    })
                }
            </ul>
        </div>
    }
}