import { Link } from "react-router";
import logoImage from "../assets/icons_assets/Logo.svg";
export default function Footer() {
  return (
    <div className="outer-footer">
      <footer className="footer-section">
        <img src={logoImage} alt="" />
        <div className="doormat">
          <h3>Doormat navigation</h3>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
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
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>
          </ul>
        </div>
        <div className="social">
          <h3>Social media links</h3>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
