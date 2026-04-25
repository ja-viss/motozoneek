import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BIKES } from '../constants/bikes';
import { LOGO_URL } from '../constants/images';

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-0 min-h-[90vh] flex flex-col md:flex-row overflow-hidden border-b border-slate-100">
      {/* Left Area (3/5) */}
      <div className="relative md:w-3/5 bg-slate-50 flex flex-col justify-center px-6 py-16 lg:px-16 border-r border-slate-100">
        <div className="absolute -top-10 left-12">
          <h1 className="text-[180px] font-display font-black text-slate-200 leading-none select-none italic">2026</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange mb-4">Bienvenidos a</div>
          <h2 className="editorial-heading text-6xl lg:text-8xl leading-[0.8] mb-6">
            MotoZone <br />
            <span className="text-moto-orange">EK</span>
          </h2>
          <p className="text-sm font-medium text-slate-500 max-w-sm leading-relaxed mb-10">
            Tu destino definitivo para la excelencia en dos ruedas. Especialistas en Empire Keeway, 
            ofreciendo los modelos más icónicos, repuestos originales y el mejor servicio técnico.
          </p>
          
          <a href="#showroom" className="bg-moto-orange text-white font-black py-5 uppercase tracking-[0.2em] text-[10px] flex justify-between px-10 items-center min-w-[280px] hover:bg-moto-black transition-colors w-fit shadow-2xl shadow-moto-orange/20">
            <span>Ver Catálogo 2026</span>
            <ArrowRight className="w-4 h-4 ml-4" />
          </a>
        </motion.div>
      </div>

      {/* Right Area (2/5) */}
      <div className="md:w-2/5 flex flex-col p-6 lg:p-16 justify-center bg-white">
        <div className="mb-12">
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange mb-6">Nuestros Pilares</div>
          <div className="grid grid-cols-2 gap-y-10">
            <div className="border-l-2 border-slate-100 pl-6">
              <div className="text-3xl font-display font-black text-moto-black tracking-tighter">+10 AÑOS</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Experiencia</div>
            </div>
            <div className="border-l-2 border-slate-100 pl-6">
              <div className="text-3xl font-display font-black text-moto-black tracking-tighter">STOCK</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Garantizado</div>
            </div>
            <div className="border-l-2 border-slate-100 pl-6">
              <div className="text-3xl font-display font-black text-moto-black tracking-tighter">OFICIAL</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Distribuidor</div>
            </div>
            <div className="border-l-2 border-slate-100 pl-6">
              <div className="text-3xl font-display font-black text-moto-black tracking-tighter">EXPERTOS</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">En Post-Venta</div>
            </div>
          </div>
        </div>

        <div className="relative group flex justify-center py-10 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <img 
              src={LOGO_URL} 
              alt="MotoZone EK Logo Showcase" 
              decoding="async"
              fetchPriority="high"
              className="relative z-10 w-full max-w-[360px] object-contain brightness-0 hover:scale-105 transition-transform duration-700"
            />
            <div className="text-[12px] font-black text-moto-black tracking-[0.4em] uppercase mt-4">Oficial Regional</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
