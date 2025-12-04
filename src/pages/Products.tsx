import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "Todos" },
  { id: "panes", name: "Panes" },
  { id: "galletas", name: "Galletas" },
  { id: "pasteles", name: "Pasteles" },
  { id: "postres", name: "Postres" },
];

const allProducts = [
  {
    id: 1,
    name: "Pan de Avellana Integral",
    description: "Pan artesanal con avellanas tostadas y harina integral, perfecto para el desayuno",
    price: 85,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    badge: "Más Vendido",
    tags: ["Sin Azúcar", "Alto en Fibra"],
    category: "panes",
  },
  {
    id: 2,
    name: "Pan Multigrano",
    description: "Mezcla de semillas y granos enteros para máxima nutrición",
    price: 75,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    tags: ["Alto en Fibra", "Proteína"],
    category: "panes",
  },
  {
    id: 3,
    name: "Baguette Artesanal",
    description: "Baguette crujiente con masa madre y fermentación lenta",
    price: 55,
    image: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=600&q=80",
    tags: ["Fermentación Lenta"],
    category: "panes",
  },
  {
    id: 4,
    name: "Pan de Centeno",
    description: "Pan denso y nutritivo con harina de centeno 100% integral",
    price: 80,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
    tags: ["Sin Gluten Opcional", "Alto en Fibra"],
    category: "panes",
  },
  {
    id: 5,
    name: "Galletas de Almendra",
    description: "Crujientes galletas con almendras y miel de abeja pura",
    price: 65,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    badge: "Nuevo",
    tags: ["Sin Gluten", "Vegano"],
    category: "galletas",
  },
  {
    id: 6,
    name: "Galletas de Avena y Pasas",
    description: "Galletas suaves con avena integral y pasas orgánicas",
    price: 55,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
    tags: ["Alto en Fibra", "Sin Azúcar"],
    category: "galletas",
  },
  {
    id: 7,
    name: "Galletas de Coco",
    description: "Galletas tropicales con coco rallado y aceite de coco",
    price: 60,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&q=80",
    tags: ["Vegano", "Sin Lactosa"],
    category: "galletas",
  },
  {
    id: 8,
    name: "Brownie de Cacao Puro",
    description: "Brownie denso y húmedo con cacao orgánico y nueces",
    price: 55,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    tags: ["Sin Lactosa", "Bajo en Calorías"],
    category: "postres",
  },
  {
    id: 9,
    name: "Cheesecake de Frutos Rojos",
    description: "Cheesecake cremoso con base de nueces y frutos rojos frescos",
    price: 120,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    badge: "Premium",
    tags: ["Sin Azúcar", "Alto en Proteína"],
    category: "postres",
  },
  {
    id: 10,
    name: "Muffins de Zanahoria",
    description: "Esponjosos muffins con zanahoria rallada y especias",
    price: 45,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
    tags: ["Alto en Fibra", "Sin Azúcar"],
    category: "postres",
  },
  {
    id: 11,
    name: "Pastel de Chocolate",
    description: "Pastel de chocolate negro con ganache de cacao puro",
    price: 350,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    badge: "Especial",
    tags: ["Sin Azúcar", "Para Compartir"],
    category: "pasteles",
  },
  {
    id: 12,
    name: "Pastel de Zanahoria",
    description: "Pastel húmedo de zanahoria con frosting de queso crema bajo en azúcar",
    price: 380,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    tags: ["Bajo en Azúcar", "Para Compartir"],
    category: "pasteles",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Nuestro Menú
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-4">
              Productos Saludables
            </h1>
            <p className="text-muted-foreground text-lg">
              Explora nuestra selección de productos horneados artesanalmente con 
              ingredientes 100% naturales y sin azúcares refinados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full px-6"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No hay productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl mb-2">🥜</div>
              <p className="font-medium text-secondary-foreground">Ingredientes Premium</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌿</div>
              <p className="font-medium text-secondary-foreground">100% Natural</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚫</div>
              <p className="font-medium text-secondary-foreground">Sin Conservadores</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💚</div>
              <p className="font-medium text-secondary-foreground">Opciones Veganas</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;