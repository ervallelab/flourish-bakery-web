import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Sin azúcares refinados",
  "Ingredientes 100% naturales",
  "Opciones sin gluten disponibles",
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
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-medium"
                >
                  <img
                    src="https://images.unsplash.com/photo-1556471013-0001958d2f12?w=500&q=80"
                    alt="Preparación de pan"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-medium"
                >
                  <img
                    src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&q=80"
                    alt="Ingredientes frescos"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="pt-8 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-medium"
                >
                  <img
                    src="https://images.unsplash.com/photo-1517433670267-30f41c281a91?w=500&q=80"
                    alt="Pan recién horneado"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-medium"
                >
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80"
                    alt="Productos de panadería"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-highlight text-highlight-foreground rounded-2xl p-6 shadow-elevated"
            >
              <div className="text-center">
                <div className="font-serif text-4xl font-bold">5+</div>
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
              Desde nuestros panes integrales hasta nuestros postres sin azúcar, 
              cada producto cuenta una historia de calidad y dedicación.
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