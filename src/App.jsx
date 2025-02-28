import { useState } from "react";
import CardList from "./components/CardList";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>College Events Board</h1>
      <CardList />
    </div>
  );
}

export default App;
