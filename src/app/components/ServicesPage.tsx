import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import {
  Truck, Wrench, Users, FileText, Shield, Clock,
  Headphones, MapPin, CheckCircle, Cog, Package,
} from "lucide-react";

/* ================================
   📌 LISTE DES SERVICES
   Chaque objet représente un service proposé
================================ */
const services = [
  {
    icon: Cog,
    title: "Location d'engins",
    desc: "Large gamme de pelles, bulldozers, grues, camions et matériels de construction disponibles en courte et longue durée."
  },
  {
    icon: Users,
    title: "Location avec opérateur",
    desc: "Nos conducteurs qualifiés et expérimentés accompagnent vos engins sur le chantier pour une productivité maximale."
  },
  {
    icon: Wrench,
    title: "Maintenance sur site",
    desc: "Service de maintenance préventive et corrective directement sur votre chantier, pour minimiser les temps d'arrêt."
  },
  {
    icon: Truck,
    title: "Transport et livraison",
    desc: "Nous assurons le transport et la livraison de vos engins sur site, partout en Côte d'Ivoire." // ✅ MODIFIÉ
  },
  {
    icon: FileText,
    title: "Conseil & accompagnement",
    desc: "Nos experts vous aident à choisir les engins adaptés à votre projet et à optimiser vos coûts."
  },
  {
    icon: Shield,
    title: "Assurance tous risques",
    desc: "Tous nos engins sont couverts par une assurance complète pour votre tranquillité."
  },
];

/* ================================
   📌 PROCESSUS (COMMENT ÇA MARCHE)
================================ */
const process = [
  { step: "01", title: "Contactez-nous", desc: "Par téléphone, email ou via notre formulaire en ligne." },
  { step: "02", title: "Étude de vos besoins", desc: "Nos experts analysent votre projet et vous conseillent." },
  { step: "03", title: "Devis personnalisé", desc: "Recevez un devis détaillé et transparent sous 24h." },
  { step: "04", title: "Livraison sur site", desc: "L'engin est livré et opérationnel sur votre chantier." },
];

/* ================================
   📌 COMPOSANT PRINCIPAL
================================ */
export function ServicesPage() {
  return (
    <div>

      {/* ===== HERO (Titre principal) ===== */}
      <section className="bg-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white mb-3"
          >
            Nos Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Des solutions complètes pour répondre à tous vos besoins en BTP.
          </motion.p>
        </div>
      </section>

      {/* ===== SECTION SERVICES ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Boucle sur les services */}
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
                >
                  {/* Icône */}
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-accent mb-3 text-xl">{s.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground">{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION PROCESSUS ===== */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">

          <AnimatedSection className="text-center mb-14">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Processus
            </div>
            <h2 className="text-3xl md:text-4xl text-accent mb-3">
              Comment ça marche ?
            </h2>
            <p className="text-muted-foreground">
              Un processus simple et efficace en 4 étapes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Boucle étapes */}
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.15}>
                <div className="text-center relative">

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl shadow-lg shadow-primary/20"
                  >
                    {p.step}
                  </motion.div>

                  <h3 className="text-accent mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION ENGAGEMENTS ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-accent rounded-3xl p-8 md:p-14 relative overflow-hidden">

              <div className="grid md:grid-cols-2 gap-10 items-center relative">

                {/* Liste engagements */}
                <div>
                  <h2 className="text-3xl md:text-4xl text-white mb-8">
                    Nos engagements
                  </h2>

                  <div className="flex flex-col gap-5">
                    {[
                      "Engins récents et bien entretenus",
                      "Tarifs compétitifs et transparents",
                      "Disponibilité garantie",
                      "Support technique 24/7",
                      "Livraison rapide partout en Côte d'Ivoire" // ✅ MODIFIÉ
                    ].map((item, i) => (
                      <div key={item} className="flex items-center gap-3 text-white/90">
                        <CheckCircle className="w-4 h-4 text-blue-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col gap-5">
                  {[
                    { icon: Clock, val: "24h", label: "Délai de réponse max" },
                    { icon: Headphones, val: "7j/7", label: "Support client" },
                    { icon: MapPin, val: "National", label: "Couverture Côte d'Ivoire" } // ✅ MODIFIÉ
                  ].map((s, i) => (
                    <div key={s.label} className="bg-white/10 rounded-2xl p-5 flex items-center gap-5">
                      <s.icon className="w-6 h-6 text-blue-300" />
                      <div>
                        <div className="text-white text-xl">{s.val}</div>
                        <div className="text-white/50">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 bg-primary text-center">
        <h2 className="text-3xl text-white mb-6">Prêt à démarrer ?</h2>

        <Link
          to="/contact"
          className="inline-block bg-white text-primary px-10 py-3.5 rounded-xl"
        >
          Contactez-nous
        </Link>
      </section>

    </div>
  );
}