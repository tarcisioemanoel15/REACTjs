import { useLocation } from 'react-router-dom';
import "./style.css";
export default function Abc() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Abc</h1>
      <p>{state as string}</p>
    </div>
  )
}