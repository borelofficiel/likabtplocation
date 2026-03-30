import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";

/* ================================
   📌 IMAGE DE L'ÉQUIPE
================================ */
const teamImg = "https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbSUyMHNhZmV0eXxlbnwxfHx8fDE3NzM4NTAyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/* ================================
   📌 NOS VALEURS
================================ */
const values = [
  { icon: Target, title: "Excellence", desc: "Nous visons l'excellence dans chaque prestation pour garantir votre satisfaction." },
  { icon: Eye, title: "Transparence", desc: "Des tarifs clairs, des conditions transparentes, sans surprise." },
  { icon: Award, title: "Qualité", desc: "Des engins de marques reconnues, régulièrement entretenus et inspectés." },
  { icon: Users, title: "Proximité", desc: "Une équipe à votre écoute, réactive et disponible pour vous accompagner." },
];

/* ================================
   📌 PAGE À PROPOS
================================ */
export function AboutPage() {
  return (
    <div>

      {/* ===== SECTION HERO (Titre principal) ===== */}
      <section className="bg-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-80 h-80 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white mb-3"
          >
            À propos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Découvrez LikaBTPLocation, votre partenaire BTP de confiance.
          </motion.p>
        </div>
      </section>

      {/* ===== SECTION HISTOIRE ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Texte */}
            <AnimatedSection direction="left">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Notre histoire
              </div>

              {/* ✅ MODIFIÉ Côte d’Ivoire */}
              <h2 className="text-3xl md:text-4xl text-accent mb-6">
                Un acteur incontournable de la location BTP en Côte d'Ivoire
              </h2>

              {/* ✅ MODIFIÉ 5 ans */}
              <p className="text-muted-foreground mb-4">
                Fondée il y a 5 ans, LikaBTPLocation s'est imposée comme un acteur important de la location d'engins de construction en Côte d'Ivoire.
                Notre expertise et notre engagement envers la qualité nous permettent de bâtir une relation de confiance avec nos clients.
              </p>

              <p className="text-muted-foreground mb-4">
                Nous disposons d'un parc d'engins et de véhicules de construction couvrant tous les besoins : terrassement, levage, transport, manutention et bien plus encore.
              </p>

              <p className="text-muted-foreground">
                Notre mission est simple : fournir des équipements fiables et performants, avec un service de qualité, pour assurer la réussite de vos projets.
              </p>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={teamImg}
                  alt="Équipe LikaBTPLocation"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ===== SECTION VALEURS ===== */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Ce qui nous guide
            </div>

            <h2 className="text-3xl md:text-4xl text-accent mb-3">
              Nos valeurs
            </h2>

            <p className="text-muted-foreground">
              Les principes qui guident notre travail au quotidien.
            </p>
          </AnimatedSection>

          {/* Cartes des valeurs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-accent mb-2 text-xl">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ===== SECTION CLIENTÈLE (COMMENTÉE) ===== */}
      {/*
      Cette section est désactivée mais conservée dans le code
      Tu peux la réactiver plus tard si tu veux

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Notre clientèle
            </div>
            <h2 className="text-3xl md:text-4xl text-accent mb-10">
              Ils nous font confiance
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Entreprises de BTP", "Promoteurs immobiliers", "Sociétés de construction", "Particuliers"].map((c, i) => (
              <AnimatedSection key={c} delay={i * 0.1}>
                <motion.div className="bg-secondary rounded-2xl p-8">
                  <Users className="w-6 h-6 text-primary mx-auto mb-4" />
                  <p className="text-accent">{c}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      */}

    </div>
  );
}