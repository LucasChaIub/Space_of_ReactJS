/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './App.css';
import MyBody from './MyBody.js';

function App() {
  // O 'useState' tbm pode ser utilizado com um valor booleano, array, numeros inteiros. Não se limita apenas a string
  const [str, setStr] = useState("Olá Mundo"); 
  function handleClick() {
      setStr("Olá Usuário!");      
  }
  return (
    <div className="App">
      <h2>{str}</h2>
      <MyBody conteudo="Corpo1" argumento="Usuario1"></MyBody>
      <MyBody conteudo="Corpo2"></MyBody>
      <MyBody conteudo="Corpo3"></MyBody>
      <MyBody conteudo="Corpo4"></MyBody>
      {/* <button onClick={() => handleClick()}>Clique Aqui</button> */}
    </div>
  );
}

export default App;
