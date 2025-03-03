import { Link } from "react-router";
import res_food from "../assets/icons_assets/restauranfood.jpg";

export default function Main() {
  return (
    <main className="hero">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern TWIST
        </p>
        <button>
          <Link to={"/booking"}>Reserve a table</Link>
        </button>
      </article>
      <figure>
        <img src={res_food} alt="" />
      </figure>
    </main>
  );
}
