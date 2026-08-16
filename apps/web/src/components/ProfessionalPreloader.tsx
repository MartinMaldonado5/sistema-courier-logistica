'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

interface ProfessionalPreloaderProps {
  onComplete?: () => void;
}

export const ProfessionalPreloader: React.FC<ProfessionalPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Incrementar el progreso del 0 al 100% de manera fluida
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(onComplete, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#070c18] text-white flex items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Elementos decorativos de fondo / Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Único Centro Principal de Carga y Marca */}
      <div className="text-center space-y-6 max-w-xl w-full z-10">
        
        {/* Logo Icono Animado */}
        <div className="relative inline-flex items-center justify-center mb-1">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-950 p-0.5 shadow-2xl shadow-blue-600/40">
            <div className="w-full h-full bg-[#0b1329] rounded-[22px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Plane className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 -rotate-12 drop-shadow-[0_0_15px_rgba(96,165,250,0.7)]" />
              </motion.div>
            </div>
          </div>
          <span className="absolute -inset-2 rounded-3xl border border-blue-500/20 animate-ping pointer-events-none opacity-40" />
        </div>

        {/* Nombre de la Marca Principal */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
            FUTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">COURIER</span>
          </h1>
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-slate-400">
            Courier & Casillero Internacional
          </p>
        </div>

        {/* Porcentaje Numérico del 0% al 100% */}
        <div className="pt-2 flex items-baseline justify-center gap-1 font-mono">
          <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
            {progress}
          </span>
          <span className="text-xl font-bold text-blue-400">%</span>
        </div>

        {/* Barra de Progreso */}
        <div className="w-full max-w-md mx-auto space-y-2">
          <div className="w-full h-2.5 bg-slate-900 border border-slate-800 rounded-full overflow-hidden p-0.5 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400 rounded-full relative"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/50 blur-xs rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
