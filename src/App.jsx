import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import style from "./css/Header.module.css";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header>
        <div>
          <div className={style.header}>
            <div className={style.homep}>
              {" "}
              <a href="#">Cover</a>
            </div>
            <div className={style.menu}>
              <Link to="/home">Home</Link>
              <Link to="/features">Features</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <div>
          <div className={style.footer}>
            <span>Cover template for</span>
            <a href="#">Bootstrap,</a>
            <span>by</span>
            <a href="#">@mdo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
