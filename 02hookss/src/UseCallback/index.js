import P from 'prop-types';
import './style.css';
import React, { useCallback, useState } from 'react';
// React.memo salva na memoria
const Button = React.memo(function Button({ incrementButton }) {
  return (
    <button type="button" onClick={() => incrementButton(10)}>
      +
    </button>
  );
});

Button.propTypes = {
  incrementButton: P.func,
};

function UseCallback() {
  const [counter, setCounter] = useState(0);
  // não deixa renderizar novamente
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="hoockUseCallback">
      <p>oi</p>
      <h1>{counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default UseCallback;
