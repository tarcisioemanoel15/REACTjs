import { useState } from 'react';
import './style.css';

export default function UseEstate() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <>
      <div className={`containerState ${reverseClass}`}></div>

      <button type="button" onClick={handleClick}>
        A {reverseClass}
      </button>
    </>
  );
}
