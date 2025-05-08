import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme class to html tag
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen m-0 p-0">
        {/* Pass theme state to Navbar & Footer */}
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="flex-grow m-0 p-0">
          <AppRoutes />
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}