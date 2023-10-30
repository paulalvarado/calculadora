import './App.css';
import Boton from './components/boton/Boton';
import BotonClear from './components/botonClear/BotonClear';
import Pantalla from './components/pantalla/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const agregarInput = (val) => {
    if (resultado) {
      // Si hay un resultado, comenzar una nueva operación con el resultado como entrada.
      setInput(resultado + val);
      setResultado('');
    } else {
      setInput((prevInput) => prevInput + val);
    }
  };


  const valoresInvalidos = ['*', '.', '/', '+', '-', '0'];

  const calcularResultado = () => {
    if (!input || valoresInvalidos.includes(input)) {
      alert('Ingresa un valor válido');
    } else {
      try {
        const result = evaluate(input);
        setResultado(result);
        setInput(result.toString());
      } catch (error) {
        alert('Error en la expresión');
      }
    }
  }


  return (
    <div className="App">
      <div className='header'>
        <h1>Calculadora con React</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
