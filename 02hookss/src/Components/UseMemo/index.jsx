import { useMemo } from 'react';
import { useState } from 'react';

export default function UseMemo() {
  console.log('PAI RENDERIZOU');

  const [value, setValue] = useState('');

  return (
    <div className="containerPosts">
      <p>digitando no input filho renderiza so uma vez ver no console</p>
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          <div className="cont">
            <h1>Use Memo</h1>
            <p>
              OBS: é so envolver o componente que vc quer que não re renderize
            </p>
            {console.log('FILHOOOO RENDERIZOU')}
          </div>
        );
      }, [])}
    </div>
  );
}
