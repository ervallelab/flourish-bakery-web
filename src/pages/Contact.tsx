import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Col. Roma Norte, Ciudad de México",
    detail: "CDMX, México",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+52 55 1234 5678",
    detail: "WhatsApp disponible",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hola@avellanas.com",
    detail: "Respondemos en 24h",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Sáb: 8:00 - 19:00",
    detail: "Dom: 9:00 - 14:00",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible. ¡Gracias por contactarnos!",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
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
              Contáctanos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-4">
              ¿Tienes Alguna Pregunta?
            </h1>
            <p className="text-muted-foreground text-lg">
              Estamos aquí para ayudarte. Escríbenos para pedidos especiales, 
              preguntas o simplemente para saludar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
                <h2 className="font-serif text-2xl font-bold text-card-foreground mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y te responderemos lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+52 55 1234 5678"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos más detalles..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Información de Contacto
                </h2>
                <p className="text-muted-foreground">
                  Visítanos o contáctanos por cualquiera de estos medios.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-soft group hover:shadow-medium transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-1">{info.title}</h3>
                    <p className="text-foreground font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold text-secondary-foreground mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl overflow-hidden shadow-soft">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Col. Roma Norte, Ciudad de México
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      A 5 min del Metro Insurgentes
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-card-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="grid gap-4 text-left mt-8">
              {[
                {
                  q: "¿Hacen entregas a domicilio?",
                  a: "Sí, realizamos entregas en toda la Ciudad de México. Envío gratis en pedidos mayores a $500.",
                },
                {
                  q: "¿Puedo hacer pedidos especiales para eventos?",
                  a: "¡Por supuesto! Contáctanos con al menos 3 días de anticipación para pedidos especiales.",
                },
                {
                  q: "¿Sus productos son aptos para diabéticos?",
                  a: "Muchos de nuestros productos son sin azúcar añadida, pero siempre recomendamos consultar con tu médico.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;