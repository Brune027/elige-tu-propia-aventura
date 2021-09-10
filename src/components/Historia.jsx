import {Component} from "react";
import data from "./data.json";
import { Pagina } from "./Pagina";

export class Historia extends Component {
    state = {
        paginas: [],
        paginaActiva: {},
        seleccionesAnteriores: [],
        contador: 1
    }
    
    componentDidMount(){
        // Reinicia el estado del componente para volver al principio
        this.iniciar();
    }
    
    iniciar = ()=>{
        this.setState({
            paginas: data, 
            paginaActiva: data[0],
            seleccionesAnteriores: [],
            contador: 1
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Esto es para evitar que se haga el render de la pagina si el boton que clickea el usuario es el de FIN
        return this.state.paginaActiva !== nextState.paginaActiva;
    }

    obtenerSiguientePagina = (prevState, opcion) =>{
        const siguienteId = (prevState.contador + 1) + opcion;
        
        let siguientePagina = prevState.paginas.find(pagina => pagina.id === siguienteId);
    
        // Si la siguiente pagina no existe se queda en la actual
        return siguientePagina ? siguientePagina : prevState.paginaActiva;
    }

    onOpcionSeleccionada = (opcion) => {
        // Si la opción seleccionada no es el final avanza a la siguiente pagina
        if(opcion !== "FIN"){
            this.setState(prevState => ({
                ...prevState, 
                paginaActiva: this.obtenerSiguientePagina(prevState, opcion),
                seleccionesAnteriores: [...prevState.seleccionesAnteriores, opcion.toUpperCase()],
                contador: prevState.contador + 1
            }));
        }
        else 
            this.iniciar();
    }
      
    render(){
        return <Pagina pagina={this.state.paginaActiva} 
            onOpcionSeleccionada={this.onOpcionSeleccionada}
            seleccionesAnteriores={this.state.seleccionesAnteriores}></Pagina>
    }
}