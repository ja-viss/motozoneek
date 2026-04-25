import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, ZoomIn } from 'lucide-react';
import { resolveImageUrl } from '../utils/imageUtils';

const categories = ['Todas', 'Automática', 'Sincrónica'];

const bikes = [
  {
    id: 1,
    name: 'EK Matrix Lite 150',
    category: 'Automática',
    image: resolveImageUrl('/img/matrix1.png'),
    images: [resolveImageUrl('/img/matrix1.png'), resolveImageUrl('/img/matrix2.png')],
    price: '$1,380',
    hp: '8.71 HP',
    cc: '150 CC',
    desc: 'La scooter automática más compacta y moderna de la marca, ideal para movilidad urbana rápida.',
    specs: {
      motor: '150cc, 1 cilindro, 4 tiempos (Carburado)',
      transmision: 'Totalmente automática',
      potencia: '8.71 HP @ 7500 RPM',
      tanque: '5 Litros (diseño compacto)',
      frenos: 'Disco delantero y tambor trasero',
      destacados: 'Tacómetro digital, iluminación FULL LED y rines de 10 pulgadas'
    }
  },
  {
    id: 2,
    name: 'EK RK 200',
    category: 'Sincrónica',
    image: resolveImageUrl('/img/rk1.png'),
    images: [resolveImageUrl('/img/rk1.png'), resolveImageUrl('/img/rk2.png')],
    price: '$1,600',
    hp: '12.87 HP',
    cc: '199.5 CC',
    desc: 'La opción deportiva por excelencia de la gama media. Diseño agresivo y mayor potencia.',
    specs: {
      motor: '199.5cc, 4 tiempos, enfriado por aire',
      transmision: 'Sincrónica de 5 velocidades',
      potencia: '12.87 HP',
      tanque: '14 Litros (Gran autonomía)',
      frenos: 'Disco delantero con cáliper de doble pistón',
      destacados: 'Tablero digital, luces decorativas laterales y rines de 17"'
    }
  },
  {
    id: 3,
    name: 'EK Xpress 150',
    category: 'Sincrónica',
    image: resolveImageUrl('/img/xpress1.png'),
    images: [resolveImageUrl('/img/xpress1.png'), resolveImageUrl('/img/xpress2.png')],
    price: '$1,200',
    hp: '12.3 HP',
    cc: '149 CC',
    desc: 'El modelo "Cafe Racer" perfecto para trabajo y uso diario con mucho estilo.',
    specs: {
      motor: '149cc, monocilíndrico',
      transmision: 'Sincrónica de 5 velocidades',
      tanque: '10 Litros',
      frenos: 'Disco delantero (según versión)',
      destacados: 'Tacómetro híbrido (Digital-Análogo) e iluminación LED'
    }
  },
  {
    id: 4,
    name: 'EK Owen 150 (GS)',
    category: 'Sincrónica',
    image: resolveImageUrl('/img/owen1.png'),
    images: [resolveImageUrl('/img/owen1.png'), resolveImageUrl('/img/owen2.png')],
    price: '$1,300',
    hp: '12.3 HP',
    cc: '150 CC',
    desc: 'Un clásico de Venezuela. Conocida por su resistencia, comodidad (asiento bajo) y durabilidad.',
    specs: {
      motor: '142cc - 150cc, 4 tiempos',
      transmision: 'Sincrónica de 5 velocidades',
      tanque: '11 Litros',
      velocidad_maxima: '120 Km/h aprox.',
      frenos: 'Disco delantero y tambor trasero',
      destacados: 'Diseño tipo crucero, cómoda y excelente para carga'
    }
  }
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedBike, setSelectedBike] = useState<typeof bikes[0] | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const filteredBikes = activeCategory === 'Todas' 
    ? bikes 
    : bikes.filter(bike => bike.category === activeCategory);

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
          <AnimatePresence mode='wait'>
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
                    onClick={() => setSelectedBike(bike)}
                  >
                    <img 
                      src={bike.image} 
                      alt={bike.name}
                      loading="lazy"
                      decoding="async"
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
                    onClick={() => setSelectedBike(bike)}
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

      {/* Product Details View */}
      <AnimatePresence>
        {selectedBike && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col md:flex-row">
              {/* Left Column: Image Center */}
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
                    decoding="async"
                    className="max-h-[65vh] w-auto object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Mini Gallery */}
                <div className="mt-auto flex gap-6 overflow-x-auto pb-4 w-full justify-center px-4">
                  {selectedBike.images.map((img, i) => (
                      <button 
                        key={i}
                        onClick={() => setMainImage(img)}
                        className={`w-24 h-24 flex-shrink-0 border-2 p-2 bg-white transition-all duration-300 shadow-sm hover:shadow-md ${
                          (mainImage || selectedBike.image) === img ? 'border-moto-orange scale-105' : 'border-slate-100 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={img} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-contain" 
                        />
                      </button>
                    ))
                  }
                </div>

                <div className="absolute bottom-8 left-12 hidden lg:block">
                   <div className="text-8xl font-display font-black text-slate-100 uppercase tracking-tighter select-none leading-none">
                     EXHIBIT
                   </div>
                </div>
              </div>

              {/* Right Column: Information */}
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

      {/* Full Screen Image Viewer */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20 shadow-2xl"
            onClick={() => setFullScreenImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-moto-black w-12 h-12 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors z-[210]"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={fullScreenImage}
              className="max-w-full max-h-full object-contain filter drop-shadow-[0_50px_50px_rgba(0,0,0,0.15)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
