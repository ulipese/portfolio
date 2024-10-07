import "./App.css";
import { useEffect } from "react";
import ScrollReveal from "./scrollreveal.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Layout } from "./components/Layout";

function App() {
  const rs = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400,
    // reset: true,
  });

  // const userPreferredLang = navigator.language;

  useEffect(() => {
    rs.reveal(".home");
    rs.reveal(".title-content__social", { interval: 150 });
    rs.reveal(".projects");
    rs.reveal(".project", { interval: 150 });
    rs.reveal(".about");
    rs.reveal(".info__image", { interval: 150 });
    rs.reveal(".contact");
    rs.reveal(".input", { interval: 150 });
  }, [rs]); // add animations

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}; 
export default App;
