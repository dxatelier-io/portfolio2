import React from "react";
import { Link } from "react-router-dom";
import i18n from "../i18n";

export default function Navbar({ lang, setLang }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-lg shadow-md">
      <h1 className="text-xl font-bold text-pink-600">DX Atelier Δ</h1>
      <div className="flex gap-4">
        <Link to="/">{i18n[lang].home}</Link>
        <Link to="/tentang">{i18n[lang].about}</Link>
        <Link to="/kontak">{i18n[lang].contact}</Link>
        <Link to="/sosial">{i18n[lang].social}</Link>
        <Link to="/portfolio">{i18n[lang].portfolio}</Link>
        <Link to="/permainan">{i18n[lang].games}</Link>
        <Link to="/perpustakaan">{i18n[lang].library}</Link>
      </div>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="rounded-md border border-pink-400 bg-white px-2"
      >
        <option value="id">🇮🇩 ID</option>
        <option value="en">🇬🇧 EN</option>
        <option value="fr">🇫🇷 FR</option>
      </select>
    </nav>
  );
}
