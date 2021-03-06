import React from 'react'


function Botao (props) {

    let classes = 'botao'

    if(props.desabilitado) {
        classes += 'botao-desabilitado'
    }

    const handleClick = (evento) => {
        evento.preventDefault()
        console.log(evento)
    }
    return
        <button>onClick={handleClick} className=> Enviar</button>
        {props.children}
        </button>


    )
}
export default Botao