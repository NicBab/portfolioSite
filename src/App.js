import "./App.css";
import { Topbar } from "./components/compIndex"
import { Contact, Portfolio, Home, Resume, Bio } from "./pages/pagesIndex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
