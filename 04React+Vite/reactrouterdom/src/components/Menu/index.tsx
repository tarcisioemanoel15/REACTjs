import "./style.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="menu">

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/abc' state={'Tarcisio'}>ABC</Link>
        </li>


        <li>
          <Link to='/Posts'>Posts</Link>
        </li>

        <li>
          <Link to='/Posts/10'>Posts 10</Link>
        </li>

        <li>
          <Link to='/redirect'>Redirect</Link>
        </li>
      </ul>


    </nav>
  )
}