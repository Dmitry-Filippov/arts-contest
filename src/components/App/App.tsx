import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Diploma from "../Diploma/Diploma";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Mailing from "../Mailing/Mailing";
import Plan from "../Plan/Plan";
import Request from "../Request/Request";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Benefits />
        <Plan />
        <Diploma />
        <Request />
        <Faq />
        <Mailing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
