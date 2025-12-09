import { Link } from "react-router-dom";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logoAvellanas from "@/assets/logo-avellanas.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg ring-2 ring-primary-foreground/30">
                <img 
                  src={logoAvellanas} 
                  alt="Avellana's Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-semibold">Avellana's</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Sana-mente Diferente. Horneando con amor y los mejores ingredientes naturales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/Avellanas.barras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/573006180880"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Productos", path: "/productos" },
                { name: "Nosotros", path: "/nosotros" },
                { name: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Productos</h4>
            <ul className="space-y-3">
              {["Barras Artesanales", "Galletas Saludables", "Pasteles", "Postres Sin Azúcar"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/productos"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Guadalajara de Buga, Valle del Cauca, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="https://wa.me/573006180880" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  WhatsApp 3006180880
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="https://instagram.com/Avellanas.barras" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  @Avellanas.barras
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Avellana's. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;