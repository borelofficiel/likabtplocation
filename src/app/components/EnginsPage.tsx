import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Search, Filter, ChevronRight } from "lucide-react";

/* ================================
   📌 IMPORT DES DONNÉES
================================ */
import { transportEngins } from "../../data/transport";
import { terrassementEngins } from "../../data/terrassement";
import { AutresEngins } from "../../data/autres";

/* ================================
   📌 CATÉGORIES
================================ */
const categories = [
  "Tous",
  "Terrassement",
  //"Levage",
  "Transport",
  //"Manutention",
  "Autres",
];

/* ================================
   📌 FUSION DES ENGINS
================================ */
const engins = [
  ...terrassementEngins,
  ...AutresEngins,
  ...transportEngins,
];

/* ================================
   📌 COMPOSANT PRINCIPAL
================================ */
export function EnginsPage() {

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [search, setSearch] = useState("");

  /* ================================
     📌 FILTRAGE
  ================================= */
  const filtered = engins.filter((e) => {
    const matchCat =
      activeCategory === "Tous" || e.category === activeCategory;

    const matchSearch = e.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCat && matchSearch;
  });

  return (
    <div>

      {/* ================================
         📌 HEADER
      ================================= */}
      <section className="bg-accent py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white mb-3"
          >
            Nos Engins
          </motion.h1>

          <p className="text-white/60">
            Parcourez notre catalogue complet d'engins disponibles à la location.
          </p>
        </div>
      </section>

      {/* ================================
         📌 CONTENU
      ================================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">

          {/* ================================
             📌 RECHERCHE + FILTRE
          ================================= */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">

              {/* 🔍 RECHERCHE */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un engin..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white outline-none"
                />
              </div>

              {/* 🔘 FILTRE */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-xl ${
                      activeCategory === cat
                        ? "bg-primary text-white"
                        : "bg-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </AnimatedSection>

          {/* ================================
             📌 LISTE DES ENGINS
          ================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filtered.map((e, i) => (
              <AnimatedSection
                key={`${e.category}-${e.id}`}  // ✅ CORRECTION ICI
                delay={i * 0.1}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition"
                >

                  {/* 🖼 IMAGE */}
                  <div className="h-52 overflow-hidden relative">
                    <ImageWithFallback
                      src={e.img}
                      alt={e.name}
                      className="w-full h-full object-cover"
                    />

                    {/* 📌 CATÉGORIE */}
                    <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm text-primary">
                      {e.category}
                    </span>
                  </div>

                  {/* 📌 INFOS */}
                  <div className="p-6">

                    <h3 className="text-accent mb-1">{e.name}</h3>

                    {/* 🔹 caractéristiques */}
                    <p className="text-muted-foreground text-sm mb-1">
                      {e.specs}
                    </p>

                    {/* 🔹 quantité */}
                    <p className="text-sm text-gray-500 mb-2">
                      Disponible : {e.quantity}
                    </p>

                    {/* 🔹 prix */}
                    <p className="text-primary mb-4">{e.price}</p>

                    {/* 🔹 bouton */}
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 ${
                        e.quantity === 0
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-accent text-white hover:bg-primary"
                      }`}
                    >
                      {e.quantity === 0
                        ? "Indisponible"
                        : "Demander un devis"}
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                  </div>

                </motion.div>
              </AnimatedSection>
            ))}

          </div>

          {/* ================================
             📌 AUCUN RÉSULTAT
          ================================= */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Filter className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p>Aucun engin trouvé.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}