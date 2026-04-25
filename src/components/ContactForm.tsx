import { motion } from 'motion/react';
import { Send, MapPin, Mail, Calendar } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white flex flex-col md:flex-row min-h-[80vh] scroll-mt-20">
      <div className="md:w-1/2 bg-moto-black p-12 lg:p-24 flex flex-col justify-center text-white">
        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange mb-6">Reservación</div>
        <h2 className="editorial-heading text-5xl lg:text-7xl leading-none mb-10">
          Reserva Tu <br />
          <span className="text-moto-orange">Experiencia</span>
        </h2>
        <p className="text-sm font-medium text-slate-400 max-w-sm mb-16 leading-relaxed">
          La máquina definitiva te espera. Completa el formulario para solicitar una cita de prueba de manejo privada en 
          nuestra sede de Bolonia.
        </p>

        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <MapPin className="w-5 h-5 text-moto-orange" />
            <div className="text-sm font-bold uppercase tracking-widest">Motor Valley St. 402, IT</div>
          </div>
          <div className="flex items-center gap-6">
            <Mail className="w-5 h-5 text-moto-orange" />
            <div className="text-sm font-bold uppercase tracking-widest">info@motozone.digital</div>
          </div>
          <div className="flex items-center gap-6">
            <Calendar className="w-5 h-5 text-moto-orange" />
            <div className="text-sm font-bold uppercase tracking-widest">Lun - Sáb: 09:00 - 18:00</div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-slate-50 p-12 lg:p-24 flex flex-col justify-center">
        <form className="space-y-10 max-w-md mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nombre Completo</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black placeholder:text-slate-300 transition-colors"
              placeholder="TU NOMBRE"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Correo Electrónico</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black placeholder:text-slate-300 transition-colors"
              placeholder="TU@EJEMPLO.COM"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Modelo Seleccionado</label>
            <select className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black appearance-none cursor-pointer uppercase">
              <option>EK MATRIX LITE 150</option>
              <option>EK RK 200</option>
              <option>EK XPRESS 150</option>
              <option>EK OWEN 150 (GS)</option>
            </select>
          </div>

          <button className="bg-moto-orange text-white font-black py-6 uppercase tracking-[0.2em] text-[10px] flex justify-between px-10 items-center w-full hover:bg-moto-black transition-colors shadow-2xl shadow-moto-orange/20">
            <span>ENVIAR SOLICITUD</span>
            <Send className="w-4 h-4 ml-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
