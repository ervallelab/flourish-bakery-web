import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Pan de Avellana Integral",
    description: "Pan artesanal con avellanas tostadas y harina integral",
    price: 85,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    badge: "Más Vendido",
    tags: ["Sin Azúcar", "Alto en Fibra"],
  },
  {
    id: 2,
    name: "Galletas de Almendra",
    description: "Crujientes galletas con almendras y miel de abeja",
    price: 65,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    badge: "Nuevo",
    tags: ["Sin Gluten", "Vegano"],
  },
  {
    id: 3,
    name: "Brownie de Cacao Puro",
    description: "Brownie denso con cacao orgánico y nueces",
    price: 55,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    tags: ["Sin Lactosa", "Bajo en Calorías"],
  },
  {
    id: 4,
    name: "Muffins de Zanahoria",
    description: "Esponjosos muffins con zanahoria y especias",
    price: 45,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
    tags: ["Alto en Fibra", "Sin Azúcar"],
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