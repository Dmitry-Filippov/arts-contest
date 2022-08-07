import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Diploma from "../Diploma/Diploma";
import Header from "../Header/Header";
import Plan from "../Plan/Plan";
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
      </main>
    </div>
  );
}

export default App;
