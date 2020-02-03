'use strict';

//componente: acepta propiedades, estado, y una funcion de renderizado
//primer componente
//JSX: es una sintaxis de javascript, en react se usa para crear elementos de IU, es "similar" a HTML pero se
//  escribe en codigo javascript, ayuda visual de la interfaz dentro del código de la logica
//  Babel compila el JSX a llamadas de 
class MsgButton extends React.Component {
    constructor(props) {
        super(props);
        //explicar que es el estado
        this.state = {
            press: false
        };
    }

    render() {        
        if (this.state.press) {
            return 'te gusta react y lo sabes !!!';
        }

        return (            
            <button
                style={{
                    color: '#000',
                    fontSize: '30px'
                }}

                onClick={
                    () => {this.setState({press: true})}
                }
            >Click ?</button>
        )
    }
}

const domContainer01 = document.querySelector('#divContainerReact01');
//enviar elemento a la pagina
//parametro 1: es el elemento a mostrar
//parametro 2: la seccion p parte del DOM donde se mostrara el elemento
ReactDOM.render(<MsgButton />, domContainer01);

/*-----------------------------------------------------------------------------*/

class SecDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                style= {{
                    background: 'black',
                    border: 'solid',
                    borderColor: '#1155aa',
                    color: '#fff',
                    fontSize: '20px'}}>
                
                <ul>
                    <li>opcion 01</li>
                    <li>opcion 02</li>
                    <li>opcion 03</li>
                </ul>
            </div>
        )
    }
}

const domContainer02 = document.querySelector('#divContainerReact02');
ReactDOM.render(<SecDiv />, domContainer02);

/*------------------------------------------------------------------------------*/

class Component03 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            message: this.props.message
        };
        console.log(this.props)
    }

    render() {
        return (
            <div
                style= {{
                    background: '#fff',
                    border: 'solid',
                    color: '#000',
                    fontSize: '20px'}}
            >
                <h3>{this.state.message}</h3>
                <MsgButton />
            </div>
        );
    }
}

const domContainer03 = document.querySelector('#divContainerReact03');
ReactDOM.render(<Component03 message="Titulo h3"/>, domContainer03);