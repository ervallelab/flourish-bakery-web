import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";

// Import images
import barraAhuyama from "@/assets/barra-ahuyama.jfif";
import barraZanahoria from "@/assets/barra-zanahoria.jfif";
import barraChocolate from "@/assets/barra-chocolate.jfif";
import barraFrutas from "@/assets/barra-frutas.jfif";
import barraGrandeChocolate from "@/assets/barra-grande-chocolate.jfif";
import barraGrandeFrutas from "@/assets/barra-grande-frutas.jfif";
import tortaSuavecitaChocolate from "@/assets/torta-suavecita-chocolate.jfif";
import tortaVainillaTropic from "@/assets/torta-vainilla-tropic.jpeg";
import suavecitaNavidad from "@/assets/suavecita-navidad.jpeg";
import vainillaTropicNavidad from "@/assets/vainilla-tropic-navidad.jpeg";

const barrasSaludables = [
  {
    id: 1,
    name: "Barra de Ahuyama",
    description: "Textura suave y base firme. Contiene avena, queso y ahuyama. Su sabor es cremoso y dulce, se destacan notas frutales, su olor es otoñal y cálido.",
    price: 12500,
    image: barraAhuyama,
    tags: ["Stevia", "Sin Azúcar"],
  },
  {
    id: 2,
    name: "Barra de Zanahoria",
    description: "Es de costra firme y textura compacta, contiene avena, pasas y zanahoria. Su sabor es suave, frutal y ligeramente cítrico. Su aroma es fresco y dulce.",
    price: 12500,
    image: barraZanahoria,
    tags: ["Stevia", "Sin Azúcar"],
  },
  {
    id: 3,
    name: "Barra con Cobertura de Frutas",
    description: "Es una presentación de obsequio, tiene una cobertura rústica de crema suave y ligera, con notas dulces, cítricas y una tinta natural de frutas rojas.",
    price: 22000,
    image: barraFrutas,
    badge: "Obsequio",
    tags: ["Cobertura Natural", "Frutas Rojas"],
  },
  {
    id: 4,
    name: "Barra con Cobertura de Chocolate",
    description: "Es una presentación fina, con cobertura de chocolate semiamargo y nueces.",
    price: 24000,
    image: barraChocolate,
    badge: "Premium",
    tags: ["Chocolate Semiamargo", "Nueces"],
  },
  {
    id: 5,
    name: "Barra Grande con Cobertura de Frutas",
    description: "12 Porciones $56.000 • 25 Porciones $98.000",
    price: 56000,
    image: barraGrandeFrutas,
    badge: "Para Compartir",
    tags: ["12 o 25 Porciones", "Frutas Rojas"],
  },
  {
    id: 6,
    name: "Barra Grande con Cobertura de Chocolate",
    description: "12 Porciones $56.000 • 25 Porciones $98.000",
    price: 56000,
    image: barraGrandeChocolate,
    badge: "Para Compartir",
    tags: ["12 o 25 Porciones", "Chocolate"],
  },
];

const tortasGourmet = [
  {
    id: 7,
    name: "Vainilla Tropic",
    description: "Textura sedosa, con capa húmeda de manjar cremoso y frutas tropicales. Cobertura suave y natural con nueces.",
    price: 64000,
    image: tortaVainillaTropic,
    badge: "Gourmet",
    tags: ["8 porc. $64.000", "12 porc. $90.000"],
  },
  {
    id: 8,
    name: "Suavecita de Chocolate",
    description: "Textura exquisita, fusión de chocolate y relleno jugoso, cobertura semiamarga y nueces.",
    price: 60000,
    image: tortaSuavecitaChocolate,
    badge: "Gourmet",
    tags: ["8 porc. $60.000", "12 porc. $90.000"],
  },
];

const edicionesEspeciales = [
  {
    id: 9,
    name: "Suavecita de Navidad",
    description: "Edición especial navideña de nuestra Suavecita de Chocolate con decoración festiva.",
    price: 102000,
    image: suavecitaNavidad,
    badge: "Navidad",
    tags: ["12 Porciones", "Edición Limitada"],
  },
  {
    id: 10,
    name: "Vainilla Tropic Navidad",
    description: "Edición especial navideña de nuestra Vainilla Tropic con decoración festiva.",
    price: 102000,
    image: vainillaTropicNavidad,
    badge: "Navidad",
    tags: ["12 Porciones", "Edición Limitada"],
  },
];

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

      {/* BARRAS SALUDABLES */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Horneado Lento
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Barras Saludables
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Nuestras barras son de horneado lento, están repletas de ingredientes naturales y nutritivos. 
              Sin azúcar, con un sabor increíble y la versatilidad perfecta para cualquier momento.
            </p>
            <p className="text-accent font-medium mt-4">
              Ingredientes estrella: Zanahoria, Ahuyama, Avena, Stevia, Yogurt griego, Quesos altos en proteína.
            </p>
            <p className="text-muted-foreground text-sm mt-2 italic">
              Disponibles todos los viernes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {barrasSaludables.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TORTAS GOURMET */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Dedicación Exclusiva
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Tortas Gourmet
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Son tortas artesanales que se elaboran con dedicación exclusiva, ingredientes frescos y seleccionados. 
              Son un equilibrio perfecto entre salud y placer decadente.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {tortasGourmet.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDICIONES ESPECIALES */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Disponibilidad Limitada
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Ediciones Especiales
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Ocasiones únicas merecen sabores inolvidables. Disponibilidad limitada.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {edicionesEspeciales.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
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
              <p className="font-medium text-secondary-foreground">Sin Azúcar Refinada</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
