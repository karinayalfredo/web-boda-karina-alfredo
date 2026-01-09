import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Calendar, Clock, Heart, ArrowRight, Copy, Check, ExternalLink, Phone, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// --- Hero Section ---
function Hero() {
  const { scrollToId } = useScrollTo();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* romantic couple walking in nature landscape */}
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
          alt="Karina y Alfredo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
        <p className="text-lg md:text-xl uppercase tracking-[0.3em] font-light mb-4">Nos casamos</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight">
          Karina <span className="text-primary-foreground/80">&</span> Alfredo
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="font-serif text-2xl md:text-3xl italic">Sábado, 4 de julio de 2026</p>
          <p className="text-white/90 max-w-lg mx-auto text-lg leading-relaxed mt-4">
            Nos casamos y queremos compartir contigo este día tan especial y lleno de amor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-white text-foreground hover:bg-white/90 font-medium min-w-[200px]"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdrtt5IquE3lLWvkbFCIOSpX6H0RXrI__3d5SR8TU1rRv_gHA/viewform?usp=publish-editor", "_blank")}
          >
            Confirmar asistencia
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white/10 hover:text-white font-medium min-w-[200px] backdrop-blur-sm mb-6"
            onClick={() => scrollToId('details')}
          >
            Ver detalles
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 text-white/70">
        <ArrowRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  );
}

// --- Gallery Section ---
function Gallery() {
  // INSTRUCCIONES: Sube tus fotos a la carpeta client/public/
  // Nombra los archivos: foto1.jpg, foto2.jpg, foto3.jpg, foto4.jpg
  // Puedes añadir más fotos añadiendo más rutas al array
  const images = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg"
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <SectionHeading title="Nuestros Momentos" subtitle="Galería" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={src}
              alt={`Moment ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --- Details Section ---
function Details() {
  return (
    <section id="details" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <SectionHeading title="Dónde & Cuándo" subtitle="Los Detalles" />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50 text-center space-y-6 hover:shadow-md transition-shadow"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <h3 className="font-serif text-3xl">La Ceremonia</h3>
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Sábado, 4 de Julio 2026
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> 17:30 Horas
            </p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="font-medium text-lg text-foreground mb-1">Monasterio de El Paular</p>
            <p className="text-muted-foreground mb-6">Rascafría, Madrid</p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Monasterio+de+El+Paular+Rascafria", "_blank")}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Abrir en Google Maps
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50 text-center space-y-6 hover:shadow-md transition-shadow"
        >
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="https://em-content.zobj.net/source/microsoft-teams/337/clinking-glasses_1f942.png" alt="Cheers" className="w-8 h-8 opacity-80" />
          </div>
          <h3 className="font-serif text-3xl">La Celebración</h3>
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Sábado, 4 de Julio 2026
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> 19:00 Horas
            </p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="font-medium text-lg text-foreground mb-1">Finca El Robledo</p>
            <p className="text-muted-foreground mb-6">Rascafría, Madrid</p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Finca+El+Robledo+Rascafria", "_blank")}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Abrir en Google Maps
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Agenda Section ---
function Agenda() {
  const events = [
    { time: "17:30", title: "Ceremonia", description: "Monasterio de El Paular" },
    { time: "~18:30", title: "Traslado", description: "Hacia la finca" },
    { time: "19:00", title: "Cóctel de Bienvenida", description: "Jardines de El Robledo" },
    { time: "20:30", title: "Banquete", description: "Cena y brindis" },
    { time: "23:00", title: "Fiesta", description: "Baile y barra libre" },
  ];

  return (
    <section id="agenda" className="section-padding bg-background">
      <SectionHeading title="Itinerario" subtitle="Agenda del Día" />

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-12 py-4">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-4 border-primary" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="font-serif text-2xl font-bold text-primary min-w-[80px]">
                  {event.time}
                </span>
                <div>
                  <h4 className="font-serif text-2xl text-foreground">{event.title}</h4>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Accommodation & Activities Section ---
function Accommodation() {
  const hotels = [
    "Alojamientos rurales Valle El Paular",
    "Hotel rural Los Manzanos",
    "Apartamentos rurales La Cabaña",
    "Posada El Campanario",
    "Caserón de Trastamara",
    "Hotel El Rincón de Rascafría",
    "Hotel Casa Marcos",
  ];

  const activities = [
    { name: "Restaurante El Caldea", type: "Gastronomía" },
    { name: "Bosque finlandés", type: "Naturaleza" },
    { name: "Piscinas naturales Las Presillas", type: "Ocio" },
  ];

  return (
    <section id="accommodation" className="section-padding bg-muted/30">
      <SectionHeading title="Alojamiento & Ocio" subtitle="Para tu comodidad" />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Accommodation List */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
          <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
            <span className="p-2 bg-primary/10 rounded-full text-primary"><MapPin className="w-5 h-5" /></span>
            Dónde dormir
          </h3>
          <ul className="space-y-4">
            {hotels.map((hotel, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 group-hover:bg-primary transition-colors" />
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel + " Rascafria")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4"
                >
                  {hotel}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities List */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
          <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
            <span className="p-2 bg-primary/10 rounded-full text-primary"><Info className="w-5 h-5" /></span>
            Qué hacer cerca
          </h3>
          <div className="space-y-6">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                  {i === 0 ? "🍷" : i === 1 ? "🌲" : "🏊"}
                </div>
                <div>
                  <p className="font-medium text-lg">{activity.name}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider text-xs font-semibold">{activity.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Gift Section ---
function Gift() {
  const { toast } = useToast();
  const iban = "ES30 0182 9051 6702 0184 7010";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban);
    toast({
      title: "IBAN copiado",
      description: "El número de cuenta se ha copiado al portapapeles.",
    });
  };

  return (
    <section id="gift" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      
      <SectionHeading title="Regalo" subtitle="Un detalle" light className="relative z-10" />

      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-8">
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
          Vuestra presencia es nuestro mayor regalo. No obstante, si queréis ayudarnos a empezar esta nueva etapa o contribuir a nuestra luna de miel, podéis hacerlo aquí:
        </p>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest opacity-70">Número de cuenta</p>
              <p className="font-mono text-xl md:text-3xl font-medium tracking-wide break-all md:break-normal">
                {iban}
              </p>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px] gap-2 font-medium"
              onClick={copyToClipboard}
            >
              <Copy className="w-4 h-4" />
              Copiar IBAN
            </Button>

            <p className="text-sm opacity-80 italic">
              *En el concepto por favor indicad vuestros nombres
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// --- FAQ & Contact Section ---
function FaqAndContact() {
  const faqs = [
    { q: "¿Hasta cuándo puedo confirmar?", a: "Por favor, confirma tu asistencia antes del 4 de mayo de 2026 para que podamos organizar todo perfectamente." },
    { q: "¿Puedo llevar acompañante?", a: "En la invitación hemos especificado el número de plazas reservadas para ti. Si tienes dudas, consúltanos." },
    { q: "¿Hay opciones vegetarianas o para alergias?", a: "¡Sí! En el formulario de confirmación encontrarás un apartado para indicarnos cualquier alergia o preferencia alimentaria." },
    { q: "¿Cómo funciona el transporte?", a: "Habrá autobuses desde el Monasterio hasta la Finca, y de vuelta al final de la fiesta." },
    { q: "¿Qué pasa si llego tarde?", a: "Te recomendamos llegar 15 minutos antes de la ceremonia. Si llegas tarde, por favor espera discretamente en la entrada hasta que el personal te indique." },
    { q: "¿A quién contacto si tengo más dudas?", a: "Puedes escribirnos por WhatsApp o llamarnos a los números que encontrarás más abajo." }
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* FAQ Column */}
        <div>
          <h3 className="font-serif text-4xl mb-8">Preguntas Frecuentes</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-primary/20">
                <AccordionTrigger className="font-serif text-lg text-left hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Column */}
        <div id="contact" className="lg:pl-8 lg:border-l border-primary/20">
          <h3 className="font-serif text-4xl mb-8">Contacto</h3>
          <p className="text-muted-foreground mb-8">
            Si tienes cualquier otra duda o necesitas ayuda con el alojamiento, no dudes en llamarnos.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Karina</p>
                <a href="tel:618650438" className="font-serif text-2xl hover:text-primary transition-colors">618 65 04 38</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Alfredo</p>
                <a href="tel:667397146" className="font-serif text-2xl hover:text-primary transition-colors">667 39 71 46</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Karina & Alfredo</h2>
        <p className="text-white/60 mb-8 font-light tracking-wide">4 de Julio de 2026 · Madrid</p>
        <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
        <p className="text-xs text-white/40 uppercase tracking-widest">
          Creado con amor para nuestro día especial
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <Details />
        <Agenda />
        <Accommodation />
        <Gift />
        <FaqAndContact />
      </main>
      <Footer />
    </div>
  );
}
