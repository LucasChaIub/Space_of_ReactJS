/* eslint-disable no-unused-vars */
import React from 'react';

const MyBody = (props) => {
    return (
      <div>
        <h2>Meu componente Body {props.conteudo}!</h2>         
        <p>{props.argumento}</p>  
      </div>
    );
}

export default MyBody;