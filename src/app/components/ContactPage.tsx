import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast, Toaster } from "sonner";

/* ================================
   📌 TYPES
================================ */
type FormKeys = "name" | "email" | "phone" | "subject" | "message";

/* ================================
   📌 PAGE CONTACT
================================ */
export function ContactPage() {
  const [form, setForm] = useState<Record<FormKeys, string>>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================================
     📌 INFOS CONTACT
  ================================= */
  const contactInfo = [
    { icon: MapPin, label: "Adresse", value: "Programme 5, Rue jacynthe, Côte d'Ivoire" },
    { icon: Phone, label: "Téléphone", value: "+225 07 13 73 11 12" },
    { icon: Mail, label: "Email", value: "likatrvaux@gmail.com" },
    { icon: Clock, label: "Horaires", value: "Ouvert 24h/24 - 7j/7" },
  ];

  /* ================================
     📌 ENVOI FORMULAIRE
  ================================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation simple
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Veuillez remplir tous les champs obligatoires !");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost/api/sendMail.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form)
});

      const data = await res.json();

      if (data.status === "success") {
        toast.success(data.message);
        setSubmitted(true);
      } else {
        toast.error(data.message || "Erreur lors de l'envoi du mail");
      }

    } catch (error) {
      toast.error("Impossible de contacter le serveur. Vérifiez votre PHP/WAMP.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Toaster position="top-right" />

      {/* ===== HEADER ===== */}
      <section className="bg-accent py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 className="text-4xl md:text-5xl text-white mb-3">
            Contactez-nous
          </motion.h1>
          <p className="text-white/60">
            Demandez un devis gratuit ou posez-nous vos questions.
          </p>
        </div>
      </section>

      {/* ===== CONTENU ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

          {/* ===== INFOS ===== */}
          <AnimatedSection>
            <div className="space-y-5">
              <h2 className="text-2xl text-accent mb-6">Nos coordonnées</h2>
              {contactInfo.map((c) => (
                <div key={c.label} className="flex gap-4 p-5 bg-secondary rounded-2xl">
                  <c.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-accent">{c.label}</p>
                    <p className="text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ===== FORMULAIRE ===== */}
          <AnimatedSection className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border rounded-2xl p-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl mb-3">Message envoyé !</h2>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="bg-primary text-white px-6 py-2 rounded"
                >
                  Recommencer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border rounded-2xl p-7">

                <h2 className="text-2xl mb-6">Demande de devis</h2>

                {/* INPUTS */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {[
                    { key: "name" as FormKeys, label: "Nom complet *", type: "text", placeholder: "Votre nom", required: true },
                    { key: "email" as FormKeys, label: "Email *", type: "email", placeholder: "votre@email.com", required: true },
                    { key: "phone" as FormKeys, label: "Téléphone", type: "tel", placeholder: "+225 07 XX XX XX XX", required: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block mb-1 text-sm">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl"
                      />
                    </div>
                  ))}

                  {/* SELECT */}
                  <div>
                    <label className="block mb-1 text-sm">Sujet *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl"
                    >
                      <option value="">Sélectionnez...</option>
                      <option>Demande de devis</option>
                      <option>Location d'engin</option>
                      <option>Renseignement</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="mb-5">
                  <label className="block mb-1 text-sm">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Envoi..." : "Envoyer le message"}
                </motion.button>

              </form>
            )}
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}