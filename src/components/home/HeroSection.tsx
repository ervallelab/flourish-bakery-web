import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBarras from "@/assets/hero-barras.jfif";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] hero-gradient overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">100% Natural & Saludable</span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Avellana's
              <span className="block text-gradient">Saludable</span>
              <span className="block text-foreground/80">Artesanal</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              En Avellana's, la originalidad se fusiona con el sabor y la salud. Nuestros productos son deliciosos y sanamente diferentes, elaborados con pasión y los mejores ingredientes naturales. Creemos que consentirse puede ser nutritivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link to="/productos">
                  Ver Productos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/nosotros">Nuestra Historia</Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {[
                { number: "100%", label: "Natural" },
                { number: "0", label: "Azúcar Refinada" },
                { number: "2+", label: "Años de Experiencia" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted rounded-full" />
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-elevated">
                <img
                  src={heroBarras}
                  alt="Barras saludables Avellana's"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-8 bg-card rounded-2xl p-4 shadow-medium"
              >
                <div className="text-2xl">🌿</div>
                <p className="text-xs font-medium text-foreground mt-1">Natural</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 -left-4 bg-card rounded-2xl p-4 shadow-medium"
              >
                <div className="text-2xl">🌾</div>
                <p className="text-xs font-medium text-foreground mt-1">Avena</p>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-0 bg-card rounded-2xl p-4 shadow-medium"
              >
                <div className="text-2xl">⚖️</div>
                <p className="text-xs font-medium text-foreground mt-1">Equilibrio</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;