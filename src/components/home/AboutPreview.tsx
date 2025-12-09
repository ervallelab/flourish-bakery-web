import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Sin azúcares refinados",
  "Ingredientes 100% naturales",
  "Elaboración artesanal diaria",
];

const AboutPreview = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="bg-highlight text-highlight-foreground rounded-2xl p-8 shadow-elevated"
            >
              <div className="text-center">
                <div className="font-serif text-5xl font-bold">2+</div>
                <div className="text-sm font-medium opacity-90">Años de Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Horneando con Pasión y
              <span className="text-gradient"> Propósito</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En Avellana's, creemos que comer saludable no debe significar sacrificar el sabor. 
              Nuestra misión es crear productos horneados deliciosos que nutren tu cuerpo 
              y deleitan tu paladar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada receta es desarrollada con cuidado, utilizando ingredientes naturales 
              y técnicas artesanales que han sido perfeccionadas a lo largo de los años.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 py-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="rounded-full px-8 group">
              <Link to="/nosotros">
                Conoce Más
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;