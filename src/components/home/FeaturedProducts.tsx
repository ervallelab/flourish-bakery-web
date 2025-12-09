import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import barraAhuyama from "@/assets/barra-ahuyama.jfif";
import suavecitaChocolate from "@/assets/suavecita-chocolate.jpeg";

const featuredProducts = [
  {
    id: 1,
    name: "Barra de Ahuyama",
    description: "Deliciosa barra con ahuyama y endulzada con stevia",
    price: 12500,
    image: barraAhuyama,
    badge: "Más Vendido",
    tags: ["Stevia", "Alto en Fibra"],
  },
  {
    id: 2,
    name: "Suavecita de Chocolate",
    description: "8 porciones $60.000 • 12 porciones $90.000",
    price: 60000,
    image: suavecitaChocolate,
    badge: "Nuevo",
    tags: ["Equilibrio", "Sin Conservantes"],
  },
];

const FeaturedProducts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wide uppercase text-sm">
            Lo Mejor de Nuestra Casa
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubre nuestros productos más queridos, elaborados con los ingredientes 
            más frescos y técnicas artesanales tradicionales.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 group">
            <Link to="/productos">
              Ver Todos los Productos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;