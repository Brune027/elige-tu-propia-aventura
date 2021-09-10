import React from "react";
import { Recordatorio } from "./Recordatorio";
import { Selector } from "./Selector";

const {Component} = React;

export class Pagina extends Component {

    render(){
        const {pagina, onOpcionSeleccionada, seleccionesAnteriores} = this.props;
        // Para saber si es la última página se chequea que termine con "FIN."
        const ultimaPagina = pagina?.historia?.endsWith("FIN.");
        return <>
            <h1 className="historia">{pagina?.historia}</h1>
            <Selector opciones={pagina.opciones} onOpcionSeleccionada={onOpcionSeleccionada} 
                ultimaPagina={ultimaPagina}></Selector>
            <Recordatorio seleccionesAnteriores={seleccionesAnteriores}></Recordatorio>
        </>
    }
}