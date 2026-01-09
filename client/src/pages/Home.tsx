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
import {
  MapPin,
  Calendar,
  Clock,
  Heart,
  ArrowRight,
  Copy,
  Phone,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { useToast } from "@/hooks/use-toast";

// --- Hero Section ---
function Hero() {
  const { scrollToId } = useScrollTo();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
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
        <p className="text-lg md:text-xl uppercase tracking-[0.3em] font-light mb-4">
          Nos casamos
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight">
          Karina <span className="text-primary-foreground/80">&</span> Alfredo
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="font-serif text-2xl md:text-3xl italic">
            Sábado, 4 de julio de 2026
          </p>
          <p className="text-white/90 max-w-lg mx-auto text-lg leading-relaxed mt-4">
            Nos casamos y queremos compartir contigo este día tan especial y lleno
            de amor.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-white text-foreground hover:bg-white/90 font-medium min-w-[200px]"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdrtt5IquE3lLWvkbFCIOSpX6H0RXrI__3d5SR8TU1rRv_gHA/viewform?usp=publish-editor",
                "_blank",
              )
            }
          >
            Confirmar asistencia
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white/10 hover:text-white font-medium min-w-[200px] backdrop-blur-sm mb-6"
            onClick={() => scrollToId("details")}
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
  // Puedes añadir más fotos añadiendo más nombres al array
  //
  // IMPORTANTE (GitHub Pages): NO usar rutas absolutas "/foto1.jpg"
  // Usamos import.meta.env.BASE_URL para que funcione en /web-boda-_
