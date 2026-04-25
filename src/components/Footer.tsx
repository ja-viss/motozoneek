import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants/images';

export default function Footer() {
  return (
    <footer className="bg-moto-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img 
                src={LOGO_URL} 
                alt="Moto Zone" 
                className="h-8 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-sm font-medium text-slate-400 max-w-xs leading-relaxed">
              Redefiniendo la ingeniería de alto rendimiento para la próxima generación de pilotos. Especialistas en Empire Keeway.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-moto-orange">Modelos</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">EK Matrix 150</li>
                <li className="hover:text-white cursor-pointer transition-colors">EK RK 200</li>
                <li className="hover:text-white cursor-pointer transition-colors">EK Xpress 150</li>
                <li className="hover:text-white cursor-pointer transition-colors">EK Owen 150</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-moto-orange">Empresa</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Nuestra Historia</li>
                <li>
                  <Link to="/financiamiento" className="hover:text-white cursor-pointer transition-colors uppercase">
                    Financiamiento
                  </Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">Carreras</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-moto-orange">Social</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-white cursor-pointer transition-colors">Youtube</li>
                <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            © 2026 MOTO ZONE GLOBAL
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Configuración de Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
