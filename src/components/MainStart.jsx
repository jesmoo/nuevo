import React, { useRef, useState, useEffect } from 'react';
import gameClass from '../utils/game';

const MainStart = () => {
  const innerPeople = useRef();
  const [number, setNumber] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const juego = gameClass;

  const handleClick = (e) => {
    setIntentos(intentos + 1);
    juego.setNumber(number);
    if (juego.win) {
      alert('has ganado');
    } else {
      if (juego.num < number) {
        alert('Es menor');
      } else {
        alert('Es mayor');
      }
      console.log(juego.num);
      setNumber(0);
    }
  };
  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };
  return (
    <div>
      <h1>Adivine el numero del 1 al 50</h1>
      <input
        className="innerText__text"
        type="number"
        name="people"
        id="people"
        value={number}
        onChange={handleChange}
        ref={innerPeople}
      />
      <button onClick={handleClick} className="">
        intentar
      </button>
      <p>Tus intentos</p>
      <p>{intentos}</p>
    </div>
  );
};

export default MainStart;
