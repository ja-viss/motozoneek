import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function FinancingCalculator() {
  const [amount, setAmount] = useState(1500);
  const [months, setMonths] = useState(12);
  const [interest, setInterest] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const monthlyRate = interest / 100 / 12;
    if (monthlyRate === 0) {
      setMonthlyPayment(amount / months);
    } else {
      const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
      setMonthlyPayment(payment);
    }
  }, [amount, months, interest]);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden rounded-sm mx-6 mb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-moto-orange">Simulador de Crédito</div>
            <h2 className="editorial-heading text-5xl lg:text-7xl leading-none">
              Calcula tu <br />
              <span className="text-moto-orange">Inversión</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-md leading-relaxed">
              Utiliza nuestro simulador para proyectar tus pagos mensuales. Recuerda que esta es una estimación referencial sujeta a aprobación crediticia.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 text-white">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-moto-orange">
                  <Calculator className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Sin Papeleo</span>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Pre-aprobación en 24h</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-moto-orange">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Tasa Fija</span>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Cero sorpresas mensuales</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 lg:p-12 rounded-sm text-moto-black shadow-2xl relative overflow-hidden">
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Precio Estimado (USD)</label>
                    <span className="text-2xl font-display font-black text-moto-black italic">${amount.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="800" 
                    max="5000" 
                    step="50"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 accent-moto-orange appearance-none cursor-pointer rounded-full"
                  />
                  <div className="flex justify-between text-[8px] font-black text-slate-300 uppercase tracking-widest">
                    <span>$800</span>
                    <span>$5,000</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Plazo (Meses)</label>
                    <div className="flex gap-2">
                      {[6, 12, 18, 24].map(m => (
                        <button 
                          key={m}
                          onClick={() => setMonths(m)}
                          className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                            months === m ? 'border-moto-orange bg-moto-orange text-white' : 'border-slate-100 text-slate-400 hover:border-slate-200'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tasa Anual (%)</label>
                    <div className="flex gap-2">
                      {[10, 15, 20].map(i => (
                        <button 
                          key={i}
                          onClick={() => setInterest(i)}
                          className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                            interest === i ? 'border-moto-orange bg-moto-orange text-white' : 'border-slate-100 text-slate-400 hover:border-slate-200'
                          }`}
                        >
                          {i}%
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="bg-slate-50 p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 italic">Cuota Mensual Estimada</div>
                    <motion.div 
                      key={monthlyPayment}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-6xl font-display font-black text-moto-black leading-none mb-2"
                    >
                      ${monthlyPayment.toFixed(2)}
                    </motion.div>
                    <div className="text-[10px] font-bold text-moto-orange uppercase tracking-widest">Pago Total Proyectado: ${(monthlyPayment * months).toFixed(2)}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
