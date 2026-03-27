import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">L</span>
              </div>
              <span className="text-xl">
                <span className="text-blue-300">LikaBTP</span>Location
              </span>
            </div>
            <p className="text-accent-foreground/60">
              Votre partenaire de confiance pour la location d'engins et de matériels de construction en Cote d'ivoire.
            </p>
          </div>

          <div>
            <h3 className="text-blue-300 mb-5">Liens rapides</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Accueil", path: "/" },
                { label: "Nos Engins", path: "/engins" },
                { label: "Services", path: "/services" },
                { label: "À propos", path: "/a-propos" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-accent-foreground/60 hover:text-blue-300 transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-blue-300 mb-5">Contact</h3>
            <div className="flex flex-col gap-4 text-accent-foreground/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                <span>Programme 5, Rue jacynthe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 shrink-0" />
                <span>+225 07 13 73 11 12</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 shrink-0" />
                <span>likatrvaux@gmail.com</span>
              </div>
            </div>
          </div>

          {/* ✅ PARTIE MODIFIÉE */}
          <div>
            <h3 className="text-blue-300 mb-5">Horaires</h3>
            <div className="flex flex-col gap-3 text-accent-foreground/60">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-300 shrink-0" />
                <span>Ouvert 24h/24 - 7j/7</span>
              </div>
            </div>
          </div>
          {/* ✅ FIN MODIFICATION */}

        </div>

        <div className="border-t border-accent-foreground/10 mt-10 pt-6 text-center text-accent-foreground/40">
          <p>&copy; 2026 LikaBTPLocation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}