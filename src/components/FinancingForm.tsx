import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Send, CheckCircle2, FileText, User, MapPin, Briefcase, Share2 } from 'lucide-react';

const steps = [
  { id: 'moto', title: 'Datos de la Moto', icon: <FileText className="w-5 h-5" /> },
  { id: 'personal', title: 'El Solicitante', icon: <User className="w-5 h-5" /> },
  { id: 'residence', title: 'Residencia y Contacto', icon: <MapPin className="w-5 h-5" /> },
  { id: 'social', title: 'Redes Sociales', icon: <Share2 className="w-5 h-5" /> },
  { id: 'work', title: 'Datos Laborales', icon: <Briefcase className="w-5 h-5" /> },
];

export default function FinancingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="financiamiento" className="py-32 bg-white flex items-center justify-center min-h-[80vh] scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg px-6"
        >
          <div className="w-24 h-24 bg-moto-orange/10 rounded-full flex items-center justify-center mx-auto mb-8 text-moto-orange">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="editorial-heading text-5xl leading-none mb-6">Solicitud Recibida</h2>
          <p className="text-slate-500 font-medium">
            Tu solicitud de financiamiento ha sido registrada. Nuestro equipo de MotoZone EK 
            revisará tu perfil y te contactará vía WhatsApp o llamada telefónica.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-10 bg-moto-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-moto-orange transition-colors"
          >
            Nueva Solicitud
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="financiamiento" className="py-24 bg-white scroll-mt-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header & Progress Indicator */}
          <div className="lg:w-1/4">
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange mb-6">Trámite Digital</div>
            <h2 className="editorial-heading text-6xl leading-[0.9] mb-10">
              Plan <br />
              <span className="text-moto-orange">Crédito</span>
            </h2>
            
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-4 p-4 transition-all duration-500 rounded-sm ${
                    currentStep === idx ? 'bg-slate-50 border-l-4 border-moto-orange translate-x-2' : 'opacity-30 grayscale'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    currentStep === idx ? 'bg-moto-orange text-white' : 'bg-slate-200'
                  }`}>
                    <span className="text-[10px] font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-moto-black">{step.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:w-3/4 bg-slate-50 p-8 lg:p-16 border border-slate-100 rounded-sm shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-12">
              
              <AnimatePresence mode="wait">
                {/* STEP 0: MOTO */}
                {currentStep === 0 && (
                  <motion.div key="step-0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Modelo de la Moto *</label>
                        <select required className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase transition-colors">
                          <option value="">Selecciona (Ej: EK Xpress)</option>
                          <option>EK Matrix Lite 150</option>
                          <option>EK RK 200</option>
                          <option>EK Xpress 150</option>
                          <option>EK Owen 150 (GS)</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Color de la Moto *</label>
                        <select required className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase">
                          <option value="">Selecciona Color</option>
                          <option>Rojo</option>
                          <option>Azul</option>
                          <option>Blanco</option>
                          <option>Negro/Gris</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ciudad donde compras *</label>
                        <input type="text" required placeholder="Ej: Tachira - San Cristobal" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cantidad de cuotas *</label>
                        <select required className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black">
                          <option>6 Meses</option>
                          <option>12 Meses</option>
                          <option>18 Meses</option>
                          <option>24 Meses</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 1: SOLICITANTE */}
                {currentStep === 1 && (
                  <motion.div key="step-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nombres *</label>
                      <input type="text" required placeholder="Ej: Juan" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Apellidos *</label>
                      <input type="text" required placeholder="Ej: Pérez" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">N° Cédula *</label>
                      <input type="text" required placeholder="Ej: 20.000.000" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">N° RIF *</label>
                      <input type="text" required placeholder="Ej: 20.000.000" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sexo *</label>
                      <select required className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase">
                        <option>Masculino</option>
                        <option>Femenino</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fecha de Nacimiento *</label>
                      <input type="text" required placeholder="10 / 10 / 2000" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nacionalidad *</label>
                      <input type="text" required placeholder="Ej: Venezolana" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estado Civil *</label>
                      <select required className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase">
                        <option>Soltero/a</option>
                        <option>Casado/a</option>
                        <option>Divorciado/a</option>
                        <option>Viudo/a</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: RESIDENCE & CONTACT */}
                {currentStep === 2 && (
                  <motion.div key="step-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Número de WhatsApp *</label>
                        <input type="tel" required placeholder="+58 0414 444 4444" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Teléfono Local *</label>
                        <input type="tel" required placeholder="+276 000 0000" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dirección Principal (Av, Calle, Casa, Apto) *</label>
                        <textarea required placeholder="Dirección detallada..." className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase resize-none h-20" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ciudad *</label>
                        <input type="text" required placeholder="Ej: Tachira" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estado / Municipio / Parroquia *</label>
                        <input type="text" required placeholder="Ej: Tachira" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Situación de Residencia *</label>
                        <select required className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase">
                          <option>Propia</option>
                          <option>Alquilada</option>
                          <option>Familiar</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tiempo de Residencia (Años) *</label>
                        <input type="number" required placeholder="Ej: 10" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dirección de correo electrónico *</label>
                        <input type="email" required placeholder="john@gmail.com" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SOCIAL */}
                {currentStep === 3 && (
                  <motion.div key="step-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Instagram</label>
                      <input type="text" placeholder="@usuario" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Facebook</label>
                      <input type="text" placeholder="Perfil o Nombre" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">TikTok</label>
                      <input type="text" placeholder="@usuario" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">YouTube</label>
                      <input type="text" placeholder="Canal / Nombre" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: WORK */}
                {currentStep === 4 && (
                  <motion.div key="step-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Empresa o lugar de trabajo</label>
                        <input type="text" placeholder="Nombre Empresa" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Actividad de la empresa</label>
                        <input type="text" placeholder="Ej: Comercio / Salud" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cargo en la empresa</label>
                        <input type="text" placeholder="Ej: Gerente / Obrero" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Años laborando</label>
                        <input type="number" placeholder="Ej: 5" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dirección de la empresa (Av, Edif, Piso)</label>
                        <textarea placeholder="Ubicación laboral..." className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase resize-none h-16" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ciudad (Trabajo)</label>
                        <input type="text" placeholder="Ciudad" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estado / Parroquia (Trabajo)</label>
                        <input type="text" placeholder="Ubicación" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Teléfono Empresa</label>
                        <input type="tel" placeholder="0000-0000" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Teléfono Adicional</label>
                        <input type="tel" placeholder="0000-0000" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Salario Mensual</label>
                        <input type="text" placeholder="Monto en USD / BS" className="w-full bg-transparent border-b-2 border-slate-200 py-4 focus:outline-none focus:border-moto-orange font-bold text-moto-black uppercase" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between items-center pt-10 border-t border-slate-200">
                {currentStep > 0 && (
                  <button type="button" onClick={prevStep} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-moto-black transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Anterior
                  </button>
                )}
                
                {currentStep < steps.length - 1 ? (
                  <button type="button" onClick={nextStep} className="ml-auto flex items-center gap-2 bg-moto-black text-white px-8 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-moto-orange transition-all">
                    Siguiente <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit" className="ml-auto bg-moto-orange text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-moto-black transition-all shadow-xl shadow-moto-orange/20">
                    Finalizar Solicitud <Send className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
