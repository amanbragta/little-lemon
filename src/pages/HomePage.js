import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function Homepage() {
  return (
    <div className="mainPage">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
