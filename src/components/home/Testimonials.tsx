import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Cliente Frecuente",
    content: "El pan de avellana es increíble. Mi familia lo adora y me encanta saber que estoy alimentándolos con algo nutritivo y delicioso.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Entusiasta del Fitness",
    content: "Finalmente encontré una panadería que entiende mis necesidades nutricionales. Los brownies sin azúcar son mi debilidad saludable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Madre de Familia",
    content: "Mis hijos no pueden distinguir que las galletas son saludables. Es la mejor manera de darles snacks nutritivos sin batallar.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-card">
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
            Testimonios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mt-3 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-background rounded-2xl p-8 shadow-soft relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;