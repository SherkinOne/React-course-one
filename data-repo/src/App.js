import "./App.css";

import Header from "./template/header";
import Footer from "./template/footer";
import IndexPage from "./components/indexpage";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Search from "./components/search";
import AddPage from "./components/addPage";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="add" element={<AddPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
