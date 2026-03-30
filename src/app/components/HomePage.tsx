import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import {
  Shield,
  Truck,
  Clock,
  Wrench,
  ChevronRight,
  Star,
  CheckCircle,
  Cog,
  Package,
  HardHat,
} from "lucide-react";
import { useState } from "react";

const heroImg =
  "/likabtplocation/images/hero1.jpg";

const equipment = [
  {
    name: "Pelles mécaniques",
    desc: "De 5 à 50 tonnes, adaptées à tous vos travaux de terrassement.",
    img: "https://images.unsplash.com/photo-1759950345011-ee5a96640e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBleGNhdmF0b3IlMjBoZWF2eSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzM3NTEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Bulldozers",
    desc: "Puissance et robustesse pour vos chantiers les plus exigeants.",
    img: "https://images.unsplash.com/photo-1757163565776-d0f3beac79bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWxsZG96ZXIlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3Mzg1MDI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Grues",
    desc: "Levage jusqu'à 100 tonnes pour vos projets de grande envergure.",
    img: "https://images.unsplash.com/photo-1669045161348-e73b82e6381e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFuZSUyMGNvbnN0cnVjdGlvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3Mzg1MDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

/* ================================
   📌 TYPES DE CATÉGORIES (ADAPTÉ À TON PROJET)
================================ */
type EquipmentCategory =
  | "all"
  | "terrassement"
  | "transport"
  | "autres";

/* ================================
   📌 CATÉGORIES (SANS EMOJIS)
================================ */
const equipmentCategories = [
  { id: "all" as const, label: "Tous", icon: "" },
  { id: "terrassement" as const, label: "Terrassement", icon: "" },
  { id: "transport" as const, label: "Transport", icon: "" },
  { id: "autres" as const, label: "Autres", icon: "" },
];

/* ================================
   📌 ENGINS (AVEC TES IMAGES LOCALES)
================================ */
const allEquipment = [

  /* ================================
     TERRASSEMENT
  ================================= */
  {
    id: "terr-1",
    name: "Pelle CATERPILLAR 315 CL",
    brand: "CATERPILLAR",
    category: "terrassement" as const,
    qty: 1,
    img: "/likabtplocation/images/Terrassement/CATERPILARDPELLE315CL.jpg",
  },
  {
    id: "terr-2",
    name: "Nivelleuse CATERPILLAR 120 G",
    brand: "CATERPILLAR",
    category: "terrassement" as const,
    qty: 1,
    img: "/likabtplocation/images/Terrassement/CATERPILARDNivelleuse120G.jpg",
  },
  {
    id: "terr-3",
    name: "Bulldozer CATERPILLAR D7",
    brand: "CATERPILLAR",
    category: "terrassement" as const,
    qty: 1,
    img: "/likabtplocation/images/Terrassement/CATERPILARDBulldozerD7.jpg",
  },
  {
    id: "terr-4",
    name: "Grader XCMG 140",
    brand: "XCMG",
    category: "terrassement" as const,
    qty: 2,
    img: "/likabtplocation/images/Terrassement/XCMG140.jpg",
  },
  {
    id: "terr-5",
    name: "Grader CATERPILLAR 140 H",
    brand: "CATERPILLAR",
    category: "terrassement" as const,
    qty: 2,
    img: "/likabtplocation/images/Terrassement/CATERPILARDGRADER140H.jpg",
  },

  /* ================================
     TRANSPORT
  ================================= */
  {
    id: "trans-1",
    name: "Van MAXUS 16 Places",
    brand: "MAXUS",
    category: "transport" as const,
    qty: 2,
    img: "/likabtplocation/images/TRANSPORT/VanMAXUS16Places.jpg",
  },
  {
    id: "trans-2",
    name: "Van TOYOTA 14 Places",
    brand: "TOYOTA",
    category: "transport" as const,
    qty: 2,
    img: "/likabtplocation/images/TRANSPORT/VanTOYOTA14Places.jpg",
  },
  {
    id: "trans-3",
    name: "Pick-up TOYOTA HILUX",
    brand: "TOYOTA",
    category: "transport" as const,
    qty: 2,
    img: "/likabtplocation/images/TRANSPORT/PickupTOYOTAHILUX.jpg",
  },
  {
    id: "trans-4",
    name: "Mini car 32 places",
    brand: "MINI CAR",
    category: "transport" as const,
    qty: 1,
    img: "/likabtplocation/images/TRANSPORT/MINICAR32Places.jpg",
  },
  {
    id: "trans-5",
    name: "Camion plateau CHENGLONG",
    brand: "CHENGLONG",
    category: "transport" as const,
    qty: 2,
    img: "/likabtplocation/images/TRANSPORT/TracteurCHENGLONG.jpg",
  },
  {
    id: "trans-6",
    name: "Camion plateau DIBEX",
    brand: "DIBEX",
    category: "transport" as const,
    qty: 2,
    img: "/likabtplocation/images/TRANSPORT/Sémi-remorqueDIBEX.jpg",
  },
  {
    id: "trans-7",
    name: "Benne 10 roues SINOTRUK",
    brand: "SINOTRUK",
    category: "transport" as const,
    qty: 4,
    img: "/likabtplocation/images/TRANSPORT/SINOTRUKBenne10roues.jpg",
  },

  /* ================================
     AUTRES (si tu ajoutes plus tard)
  ================================= */
  {
    id: "autre-1",
    name: "Mini benne KIA 6 roues",
    brand: "KIA",
    category: "autres" as const,
    qty: 1,
    img: "/likabtplocation/images/TRANSPORT/KIAMinibenne6roues.jpeg",
  },
];

//
const features = [
  {
    icon: Shield,
    title: "Fiabilité",
    desc: "Engins certifiés et conformes aux normes de sécurité.",
  },
  {
    icon: Truck,
    title: "Livraison rapide",
    desc: "Transport sur chantier dans les meilleurs délais.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    desc: "Service client réactif, disponible 7j/7.",
  },
  {
    icon: Wrench,
    title: "Maintenance incluse",
    desc: "Assistance technique et maintenance sur site.",
  },
];

const stats = [
  { value: "500+", label: "Projets réalisés" },
  { value: "150+", label: "Engins disponibles" },
  { value: "12+", label: "Années d'expérience" },
  { value: "98%", label: "Clients satisfaits" },
];

const services = [
  {
    icon: Cog,
    title: "Location d'engins",
    desc: "Location d'engins lourds pour tous vos travaux de terrassement.",
  },
  {
    icon: Truck,
    title: "Transport",
    desc: "Transport sécurisé de vos équipements et matériaux.",
  },
  {
    icon: Package,
    title: "Matériel divers",
    desc: "Mise à disposition de matériel complémentaire pour chantier.",
  },
];
export function HomePage() {
  const [activeEquipmentCat, setActiveEquipmentCat] = useState<EquipmentCategory>("all");

  const filteredEquipment = activeEquipmentCat === "all"
    ? allEquipment
    : allEquipment.filter((e) => e.category === activeEquipmentCat);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[650px] overflow-hidden">
        <ImageWithFallback
          src={heroImg}
          alt="Chantier de construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-6 border border-white/20"
              >
                <Star className="w-4 h-4 text-blue-300" />
                <span>Leader de la location BTP au Maroc</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Votre partenaire en location d'engins{" "}
                <span className="text-blue-300">BTP</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Des équipements professionnels pour tous vos projets de
                construction. Qualité, fiabilité et service sur mesure.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/engins"
                  className="bg-primary text-white px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 hover:translate-y-[-2px]"
                >
                  Voir nos engins
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/40 text-white px-7 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white relative">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="text-3xl md:text-4xl">{s.value}</div>
              <div className="text-white/70 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / Presentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Qui sommes-nous
              </div>
              <h2 className="text-3xl md:text-4xl text-accent mb-6">
                Plus de 12 ans d'expertise dans la location d'engins BTP
              </h2>
              <p className="text-muted-foreground mb-4">
                LikaBTPLocation est votre partenaire de confiance pour la
                location d'engins et de matériels de construction au Maroc.
                Notre parc de plus de 150 engins couvre tous vos besoins en
                terrassement, levage, transport et manutention.
              </p>
              <p className="text-muted-foreground mb-6">
                Nous accompagnons les entreprises de BTP, les promoteurs
                immobiliers, les sociétés de construction et les particuliers
                dans la réussite de leurs projets.
              </p>
              <Link
                to="/a-propos"
                className="text-primary inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                En savoir plus <ChevronRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={equipment[0].img}
                    alt="Engin"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <ImageWithFallback
                    src={equipment[1].img}
                    alt="Engin"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbSUyMHNhZmV0eXxlbnwxfHx8fDE3NzM4NTAyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Équipe"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Nos services
            </div>
            <h2 className="text-3xl md:text-4xl text-accent mb-3">
              Services proposés
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à chaque étape de votre projet de
              construction.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-transparent hover:border-primary/20"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-accent mb-3 text-xl">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Notre parc
            </div>
            <h2 className="text-3xl md:text-4xl text-accent mb-3">
              Nos Engins &amp; Matériels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'ensemble de nos équipements disponibles à la location, classés par catégorie.
            </p>
          </AnimatedSection>

          {/* Category filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {equipmentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveEquipmentCat(cat.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  activeEquipmentCat === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.id !== "all" && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeEquipmentCat === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {allEquipment.filter((e) => e.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </AnimatedSection>

          {/* Equipment grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((e, i) => (
              <AnimatedSection key={e.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border group"
                >
                  <div className="h-52 overflow-hidden relative">
                    <ImageWithFallback
                      src={e.img}
                      alt={e.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm">
                        {e.category === "terrassement"
  ? "Terrassement"
  : e.category === "transport"
  ? "Transport"
  : "Autres"}
                      </span>
                    </div>
                    {e.qty > 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                          x{e.qty}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-accent mb-1">{e.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">
                        {e.brand}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {e.qty > 1 ? `${e.qty} disponibles` : "1 disponible"}
                      </span>
                    </div>
                    <Link
                      to="/contact"
                      className="w-full bg-accent text-white py-2.5 rounded-xl hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      Demander un devis <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/engins"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Voir tout le catalogue <ChevronRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Nos atouts
            </div>
            <h2 className="text-3xl md:text-4xl text-accent mb-3">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-muted-foreground">
              Des avantages concrets pour vos projets de construction.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-primary/20"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-accent mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Besoin d'un engin pour votre chantier ?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour obtenir un devis personnalisé
              et gratuit sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 hover:translate-y-[-2px]"
              >
                <CheckCircle className="w-5 h-5" />
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+212600000000"
                className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Appeler maintenant
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}