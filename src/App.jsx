import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import SearchResults from "./pages/SearchResults";
import BestSellers from "./components/BestSellers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import "./components/styles/style.css";

function InnerApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BestSellers />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <InnerApp />
    </AccessibilityProvider>
  );
}
