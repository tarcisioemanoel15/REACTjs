import { useState } from 'react';
import A01 from './01state';
import Use02State from './02state';
import './style.css';

export default function UseEstate() {
  const [reverse, setReverse] = useState(false);
  const [rev, setRev] = useState(0);

  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleAcelera = () => {
    setRev(rev + 1);
  };

  const handleDiminue = () => {
    setRev(rev - 1);
  };

  return (
    <div className="containerUseStateuser">
      <h1>Praticando UseState</h1>

      <div className={`containerState ${reverseClass}`}></div>

      <p>
        <button type="button" onClick={handleClick}>
          Next {reverseClass}
        </button>
      </p>

      <button type="button" onClick={handleAcelera}>
        +
      </button>

      <span>{rev}</span>

      <button type="button" onClick={handleDiminue}>
        -
      </button>

      <br />
      <br />
      <br />

      <A01 />
      <Use02State />
    </div>
  );
}
