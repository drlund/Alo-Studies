import React from "react";
import './style.scss'

class Botao extends React.Component<{ texto: string }> {
    render() {
        return(
            <button className={style.botao}>{ this.props.texto }</button>
        )
    }
}

export default Botao;
