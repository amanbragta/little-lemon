import { Link } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/booking"}>About</Link>
        </li>
        <li>
          <Link to={"/"}>Menu</Link>
        </li>
        <li>
          <Link to={"/"}>Reservations</Link>
        </li>
        <li>
          <Link to={"/"}>Order online</Link>
        </li>
        <li>
          <Link to={"/"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
