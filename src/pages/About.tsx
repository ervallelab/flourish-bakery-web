import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Check, Heart, Leaf, Award, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por la Calidad",
    description: "Cada producto es creado con dedicación y amor, siguiendo los más altos estándares de calidad.",
  },
  {
    icon: Leaf,
    title: "Compromiso Natural",
    description: "Utilizamos únicamente ingredientes naturales, orgánicos y de origen sostenible.",
  },
  {
    icon: Award,
    title: "Excelencia Artesanal",
    description: "Nuestras técnicas tradicionales garantizan productos auténticos y deliciosos.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creemos en construir relaciones duraderas con nuestros clientes y proveedores locales.",
  },
];

const milestones = [
  { year: "2019", title: "El Comienzo", description: "Avellana's nace de un sueño familiar de crear panadería saludable." },
  { year: "2020", title: "Crecimiento", description: "Expandimos nuestro menú con galletas y postres sin azúcar." },
  { year: "2021", title: "Reconocimiento", description: "Ganamos el premio a mejor panadería saludable de la ciudad." },
  { year: "2022", title: "Innovación", description: "Lanzamos nuestra línea de productos sin gluten." },
  { year: "2023", title: "Comunidad", description: "Alcanzamos más de 1,000 clientes frecuentes satisfechos." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Nuestra Historia
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Horneando con
              <span className="text-gradient"> Propósito</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos una panadería artesanal dedicada a crear productos deliciosos 
              que nutren tu cuerpo sin sacrificar el sabor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Una Tradición Familiar con un Toque Moderno
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Avellana's nació de la pasión de nuestra familia por la repostería tradicional 
                y el deseo de ofrecer alternativas más saludables. Después de años de 
                experimentación, perfeccionamos recetas que combinan lo mejor de ambos mundos: 
                el sabor auténtico de los productos artesanales con los beneficios de 
                ingredientes naturales y nutritivos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro compromiso es simple: crear productos que puedas disfrutar 
                sin preocupaciones, sabiendo que cada bocado está hecho con los 
                ingredientes más frescos y saludables disponibles.
              </p>
              
              <ul className="space-y-3 pt-4">
                {[
                  "Recetas familiares perfeccionadas",
                  "Ingredientes locales y orgánicos",
                  "Sin azúcares refinados ni conservadores",
                  "Opciones para dietas especiales",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src="https://images.unsplash.com/photo-1556471013-0001958d2f12?w=500&q=80"
                      alt="Preparación artesanal"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src="https://images.unsplash.com/photo-1517433670267-30f41c281a91?w=500&q=80"
                      alt="Productos horneados"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&q=80"
                      alt="Ingredientes naturales"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80"
                      alt="Panadería"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Lo Que Nos Define
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-card-foreground mt-3">
              Nuestros Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-soft text-center group hover:shadow-medium transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Nuestro Camino
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
              Hitos Importantes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {/* Dot */}
                <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />
                
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <span className="text-sm font-bold text-accent">{milestone.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl mb-6">🌰</div>
            <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground leading-relaxed italic mb-8">
              "Nuestro sueño siempre fue demostrar que lo saludable puede ser 
              delicioso. Cada día horneamos con la esperanza de nutrir cuerpos 
              y alegrar corazones."
            </blockquote>
            <p className="text-primary-foreground/80 font-medium">
              — La Familia Avellana
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;