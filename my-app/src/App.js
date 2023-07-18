import Dictionary from "./dictionary";
import "./App.css";
import logo from "./dic.png";

import Results from "./results";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <Results />
        <footer className="App-footer">
          <small>Coded by ME</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
