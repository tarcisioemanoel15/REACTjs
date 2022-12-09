import { useEffect, useState } from 'react';
import './style.css';
function UseEffect() {
  const [testEffe, setTestEffe] = useState(0);

  const funckFN = () => {
    console.log('oi');
  };

  const somaMaisUm = () => {
    setTestEffe(testEffe + 1);
  };

  useEffect(() => {
    console.log('ao 01', testEffe);
  }, [testEffe]);

  useEffect(() => {
    document.querySelector('effeuser')?.addEventListener('click', funckFN);
    return () => {
      document.querySelector('effeuser')?.removeEventListener('click', funckFN);
    };
  }, []);

  return (
    <div className="containsEffect">
      <h1> Use Effectt </h1>
      <h2>{testEffe}</h2>
      <button type="button" onClick={somaMaisUm}>
        +
      </button>

      <button className="effeuser">No console</button>
    </div>
  );
}

export default UseEffect;
