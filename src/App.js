import "./App.css";
import { Topbar, Footer } from "./components/compIndex"
import { ContactPg, PortfolioPg, HomePg, ResumePg, BioPg } from "./pages/pagesIndex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Topbar />
      <Routes>
        <Route exact path="/" element={<HomePg />} />
        <Route path="/bio" element={<BioPg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/portfolio" element={<PortfolioPg />} />
        <Route path="/resume" element={<ResumePg />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
