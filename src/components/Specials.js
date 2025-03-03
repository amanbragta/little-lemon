import Card from "./Card";
import greek from "../assets/icons_assets/greek salad.jpg";
import bruchetta from "../assets/icons_assets/bruchetta.svg";
import lemon from "../assets/icons_assets/lemon dessert.jpg";

export default function Specials() {
  return (
    <div className="specials">
      <div className="special-heading">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <section className="special-cards">
        <Card
          image={greek}
          heading="Greek Salad"
          price="$12.99"
          desc="Ine tamous orook sa ac of
isy ete peppere, lives
cheese, garnished with
CIUnChY PATIC anO TosemaI
Croutons."
        />
        <Card
          image={bruchetta}
          heading="Bruchetta"
          price="$5.99"
          desc="Ine tamous orook sa ac of
isy ete peppere, lives
cheese, garnished with
CIUnChY PATIC anO TosemaI
Croutons."
        />
        <Card
          image={lemon}
          heading="Lemon Dessert"
          price="$5.00"
          desc="Ine tamous orook sa ac of
isy ete peppere, lives
cheese, garnished with
CIUnChY PATIC anO TosemaI
Croutons."
        />
      </section>
    </div>
  );
}
