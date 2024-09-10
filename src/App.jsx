import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Fr from "./assets/components/Fr";
import En from "./assets/components/En";

const App = () => {
  // const url = "https://github.com/MaelleVo";
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/en" element={<En />}></Route>
        <Route path="/fr" element={<Fr />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
