import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import Sosial from "./pages/Sosial";
import Portfolio from "./pages/Portfolio";
import Permainan from "./pages/Permainan";
import Perpustakaan from "./pages/Perpustakaan";
import i18n from "./i18n";

export default function App() {
  const [lang, setLang] = useState("id");

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Hero lang={lang} />} />
        <Route path="/tentang" element={<Tentang lang={lang} />} />
        <Route path="/kontak" element={<Kontak lang={lang} />} />
        <Route path="/sosial" element={<Sosial lang={lang} />} />
        <Route path="/portfolio" element={<Portfolio lang={lang} />} />
        <Route path="/permainan" element={<Permainan lang={lang} />} />
        <Route path="/perpustakaan" element={<Perpustakaan lang={lang} />} />
      </Routes>
      <Footer />
    </div>
  );
}
