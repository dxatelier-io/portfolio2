import React from "react";
import i18n from "../i18n";
import { Link } from "react-router-dom";

export default function Hero({ lang }) {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-4 animate-bounce">
        DX Atelier Δ
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        {lang === "id"
          ? "Tempat aku berkarya dengan cinta"
          : lang === "en"
          ? "A place where I create with love"
          : "Un endroit où je crée avec amour"}
      </p>
      <Link
        to="/kontak"
        className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-600 transition"
      >
        {i18n[lang].bookMe}
      </Link>
    </section>
  );
}
