import { motion } from "framer-motion";
import { Leaf, Heart, Award, Truck } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Ingredientes orgánicos y frescos, sin conservadores artificiales ni químicos.",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada producto es preparado artesanalmente con dedicación y cariño.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Seleccionamos los mejores ingredientes para garantizar sabor excepcional.",
  },
  {
    icon: Truck,
    title: "Entrega Fresca",
    description: "Recibe tus productos recién horneados directamente en tu puerta.",
  },
];

const ValueProps = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;