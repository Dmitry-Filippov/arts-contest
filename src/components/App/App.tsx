import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Header from "../Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Benefits />
      </main>
    </div>
  );
}

export default App;
