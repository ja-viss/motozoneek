import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, ZoomIn } from 'lucide-react';
import { BIKES } from '../constants/bikes';

const categories = ['Todas', 'Automática', 'Sincrónica'];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedBike, setSelectedBike] = useState<typeof BIKES[0] | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const filteredBikes = activeCategory === 'Todas' 
    ? BIKES 
    : BIKES.filter(bike => bike.category === activeCategory);

  return (
    <section id="showroom" className="py-24 bg-white overflow-hidden border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 border-b border-slate-100 pb-10">
          <div>
            <h2 className="editorial-heading text-5xl lg:text-7xl leading-none mb-6">
              El <span className="text-moto-orange">Showroom</span>
            </h2>
            <p className="text-sm font-medium text-slate-500 max-w-sm">
              Una visión innovadora del mundo de las máquinas más avanzadas. 
              Haz clic en cualquier modelo para ver su ficha técnica completa.
            </p>
          </div>
          
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-moto-black">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-2 border-b-2 transition-all ${
                  activeCategory === category 
                    ? 'border-moto-orange text-moto-orange' 
                    : 'border-transparent text-slate-400 hover:text-moto-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence>
            {filteredBikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-8">
                  <div 
                    className="relative aspect-[4/5] bg-slate-50 overflow-hidden cursor-pointer"
                    onClick={() => {
                        setSelectedBike(bike);
                        setMainImage(bike.image);
                    }}
                  >
                    <img 
                      src={bike.image} 
                      alt={bike.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-moto-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-moto-black w-8 h-8 opacity-20" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-black text-lg text-moto-black uppercase tracking-tight leading-tight mb-1">
                        {bike.name}
                      </h3>
                      <div className="flex gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>{bike.hp}</span>
                        <span>•</span>
                        <span>{bike.cc}</span>
                        <span>•</span>
                        <span>{bike.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-display font-black text-moto-orange mb-6">
                    {bike.price}
                  </div>
                  
                  <button 
                    onClick={() => {
                        setSelectedBike(bike);
                        setMainImage(bike.image);
                    }}
                    className="w-full py-4 border-2 border-moto-black text-[10px] font-black uppercase tracking-[0.2em] text-moto-black hover:bg-moto-black hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Ficha Técnica
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedBike && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-slate-50 relative flex flex-col items-center justify-center pt-24 pb-12 px-6 border-r border-slate-100 min-h-[60vh] md:min-h-screen">
                <button 
                  className="absolute top-8 left-8 text-moto-black w-12 h-12 flex items-center justify-center hover:bg-slate-200 rounded-full transition-colors z-[110]"
                  onClick={() => {
                    setSelectedBike(null);
                    setMainImage(null);
                  }}
                >
                  <X className="w-8 h-8" />
                </button>
                
                <motion.div 
                  key={mainImage || selectedBike.image}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full flex justify-center cursor-zoom-in mb-8"
                  onClick={() => setFullScreenImage(mainImage || selectedBike.image)}
                >
                  <img
                    src={mainImage || selectedBike.image}
                    alt={selectedBike.name}
                    className="max-h-[65vh] w-auto object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                <div className="mt-auto flex gap-6 overflow-x-auto pb-4 w-full justify-center px-4">
                  {selectedBike.images.map((img, i) => (
                      <button 
                        key={i}
                        onClick={() => setMainImage(img)}
                        className={`w-24 h-24 flex-shrink-0 border-2 p-2 bg-white transition-all duration-300 shadow-sm hover:shadow-md ${
                          (mainImage || selectedBike.image) === img ? 'border-moto-orange scale-105' : 'border-slate-100 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} className="w-full h-full object-contain" />
                      </button>
                    ))
                  }
                </div>
              </div>

              <div className="md:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
                <div className="mb-12">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange mb-4">
                    Catálogo Empire Keeway
                  </div>
                  <h2 className="editorial-heading text-5xl lg:text-7xl leading-[0.9] mb-6">
                    {selectedBike.name}
                  </h2>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-md">
                    {selectedBike.desc}
                  </p>
                  <div className="text-4xl font-display font-black text-moto-orange mt-8">
                    {selectedBike.price}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-slate-100 pt-10">
                  {Object.entries(selectedBike.specs).map(([key, value]) => (
                    <div key={key} className={`border-l-2 border-slate-100 pl-6 ${key === 'destacados' ? 'col-span-2' : ''}`}>
                       <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                         {key.replace(/_/g, ' ')}
                       </div>
                       <div className="text-sm font-black text-moto-black uppercase">
                         {value}
                       </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 flex gap-6">
                   <button className="flex-1 bg-moto-orange text-white font-black py-5 uppercase tracking-widest text-[10px] hover:bg-moto-black transition-colors">
                     Reservar Ahora
                   </button>
                   <button className="flex-1 border-2 border-moto-black text-moto-black font-black py-5 uppercase tracking-widest text-[10px] hover:bg-moto-black hover:text-white transition-colors">
                     Descargar PDF
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20 shadow-2xl"
            onClick={() => setFullScreenImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={fullScreenImage}
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}