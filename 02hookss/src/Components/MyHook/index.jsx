import { useRef, useState } from 'react';
import { useEffect } from 'react';

const useMyHook = (cb) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
};

export default function MyHook() {
  const [couter, setCounter] = useState(0);
  useMyHook(() => setCounter((c) => c + 1));
  return (
    <div className="myHook">
      <h1>Criando meu propio Hook</h1>
      <h1>Contador: {couter}</h1>
    </div>
  );
}
