import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    { name: 'Inicio', path: '/', isExternal: false },
    { name: 'Modelos', path: '#showroom', isExternal: false },
    { name: 'Specs', path: '#specs', isExternal: false },
    { name: 'Contacto', path: '#contact', isExternal: false },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-100 h-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/img/MOTO-ZONE.png" alt="Moto Zone Logo" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-moto-black">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={isHome ? item.path : (item.path === '/' ? '/' : `/${item.path}`)} 
              className="hover:text-moto-orange transition-colors"
              onClick={(e) => {
                if (isHome && item.path.startsWith('#')) {
                  e.preventDefault();
                  document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link 
            to="/financiamiento"
            className="hidden sm:block border-2 border-moto-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-moto-black hover:text-white transition-all text-center"
          >
            Financiamiento
          </Link>
          
          <button 
            className="md:hidden p-2 text-moto-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 bg-white z-[90] md:hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={isHome ? item.path : (item.path === '/' ? '/' : `/${item.path}`)} 
                  className="text-2xl font-black uppercase tracking-tighter text-moto-black border-b border-slate-100 pb-4"
                  onClick={(e) => {
                    if (isHome && item.path.startsWith('#')) {
                      e.preventDefault();
                      document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Link 
                to="/financiamiento"
                className="bg-moto-orange text-white py-6 text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-moto-orange/20 text-center"
              >
                Solicitar Financiamiento
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import { AnimatePresence } from 'motion/react';
