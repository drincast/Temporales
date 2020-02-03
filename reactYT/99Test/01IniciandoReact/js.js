'use strict';

//crea un elemento que sera administrado por la libreria de React
//parametro 1: el tipo de elemento html
//parametro 2: las propiedades que se le pasan al elemento "propiedades del elemento html o personalizadas"
//parametro 3: son los componentes hijos, si es un string se interpreta como texto
const element01 = React.createElement;

//componente: acepta propiedades, estado, y una funcion de renderizado
//primer componente
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
            return this.props.msg + 'te gusta react y lo sabes !!!';
        }

        return element01 (
            'button',
            { 
                onClick: () => this.setState({ press: true }),
                style: {
                        color: '#000',
                        fontSize: '30px'
                    }
            },
            'Click ?'
        );
    }
}

const domContainer01 = document.querySelector('#divContainerReact01');
//enviar elemento a la pagina
//parametro 1: es el elemento a mostrar
//parametro 2: la seccion p parte del DOM donde se mostrara el elemento
ReactDOM.render(element01(MsgButton, {msg: 'hola'}), domContainer01);

/*-----------------------------------------------------------------------------*/

const element02 = React.createElement;

class SecDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return element02 (
            'div',
            { 
                style: {
                        background: 'black',
                        border: 'solid',
                        borderColor: '#1155aa',
                        color: '#fff',
                        fontSize: '20px'
                    }
            },
            React.createElement('ul', null, 
                React.createElement('li', null, 'opcion 01'),
                React.createElement('li', null, 'opcion 02'),
                React.createElement('li', null, 'opcion 03'),
            )
        );
    }
}

const domContainer02 = document.querySelector('#divContainerReact02');
ReactDOM.render(element02(SecDiv), domContainer02);

/*------------------------------------------------------------------------------*/

const element03 = React.createElement;

class Component03 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            message: this.props.message
        };
        console.log(this.props)
    }

    render() {
        return element03 (
            'div',
            { 
                style: {
                        background: '#fff',
                        border: 'solid',
                        color: '#000',
                        fontSize: '20px'
                    }
            },
            React.createElement('h3', null, this.state.message),
            element01(MsgButton)
        );
    }
}

const domContainer03 = document.querySelector('#divContainerReact03');
ReactDOM.render(element03(Component03), domContainer03);