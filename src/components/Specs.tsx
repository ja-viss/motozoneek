import { motion } from 'motion/react';
import { Cpu, Zap, Wind, ShieldCheck, Gauge, Layers } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "OPTIMIZACIÓN IA",
    description: "Sistema de mapeo adaptativo que aprende de tu estilo de conducción."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "CAMBIO ELECTRÓNICO",
    description: "Transiciones fluidas con componentes internos de fibra de carbono."
  },
  {
    icon: <Wind className="w-5 h-5" />,
    title: "AERODINÁMICA ACTIVA",
    description: "Alerones retráctiles que se ajustan según la velocidad."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "SUITE DE SEGURIDAD V4",
    description: "Sistema de detección láser 360° para conciencia situacional."
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "BIO-TELEMETRÍA",
    description: "Se integra con equipos biométricos para monitorear tu enfoque."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "ALEACIÓN DE TITANIO",
    description: "Chasis de grado aeroespacial que reduce el peso en un 15%."
  }
];

export default function Specs() {
  return (
    <section id="specs" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange mb-4">Innovación</div>
            <h2 className="editorial-heading text-5xl lg:text-7xl leading-none">
              Excelencia <br />
              <span className="text-moto-orange">Técnica</span>
            </h2>
          </div>
          <div className="hidden lg:block text-[150px] font-display font-black text-slate-50 -mb-16 select-none leading-none uppercase">Datos</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-slate-100 pl-8"
            >
              <div className="text-moto-orange mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display font-black text-lg text-moto-black uppercase shadow-none tracking-tight mb-4">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
