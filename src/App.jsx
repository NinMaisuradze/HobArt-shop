import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import SearchResults from "./pages/SearchResults";
import BestSellers from "./components/BestSellers";
import DecorationCandle from "./components/images/products/DecorationCandle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import "./components/styles/style.css";
import BlogPost from "../src/pages/Blog/BlogPost";
import BlogList from "../src/pages/Blog/BlogList";



function InnerApp() {
  const currentLang = "ka"; // ან "en" საჭიროებისამებრ

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
        <Route path="/contact" element={<Contact lang={currentLang} />} />
        <Route path="/about" element={<About lang={currentLang} />} />
        <Route path="/search" element={<SearchResults lang={currentLang} />} />
        <Route
          path="/products/decoration-candle"
          element={<DecorationCandle lang={currentLang} />}
        />
        {/* ბლოგის გვერდები */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
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
