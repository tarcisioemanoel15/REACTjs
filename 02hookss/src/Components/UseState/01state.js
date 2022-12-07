import { useState } from 'react';

export default function A01() {
  const [nome, setNome] = useState('Tarcisio');

  const mudaNome = () => {
    setNome(!nome);
  };

  return (
    <div className={`novoTesteS ${!nome ? 'null' : 'Emanoel'} `}>
      <h1>{!nome ? 'Tarcisio' : 'Emanoel'}</h1>

      <button type="button" onClick={mudaNome}>
        muda
      </button>
    </div>
  );
}
