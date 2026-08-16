'use client';

import React, { useState } from 'react';
import { X, Copy, Check, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface MiamiAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MiamiAddressModal: React.FC<MiamiAddressModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [userFullName, setUserFullName] = useState('');

  if (!isOpen) return null;

  const displayName = userFullName.trim() ? `FUTURE COURIER + ${userFullName.trim().toUpperCase()}` : 'FUTURE COURIER + TU NOMBRE Y APELLIDO';

  const addressFields = [
    { key: 'name', label: 'NOMBRE / NAME', value: displayName },
    { key: 'address', label: 'DIRECCIÓN / ADDRESS', value: '8300 NW 30th Terrace, Ste 400' },
    { key: 'city', label: 'CIUDAD / CITY', value: 'MIAMI - DORAL' },
    { key: 'state', label: 'ESTADO / STATE', value: 'FLORIDA' },
    { key: 'country', label: 'PAÍS / COUNTRY', value: 'ESTADOS UNIDOS' },
    { key: 'zip', label: 'CÓDIGO POSTAL / ZIP CODE', value: '33122' },
    { key: 'phone', label: 'TELÉFONO / PHONE', value: '(305) 904-5137' },
  ];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCopyAll = () => {
    const fullText = `NOMBRE: ${displayName}\nDIRECCIÓN: 8300 NW 30th Terrace, Ste 400\nCIUDAD: MIAMI - DORAL\nESTADO: FLORIDA\nPAÍS: ESTADOS UNIDOS\nCÓDIGO POSTAL: 33122\nTELÉFONO: (305) 904-5137`;
    navigator.clipboard.writeText(fullText);
    setCopiedField('all');
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-100 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-extrabold text-blue-700 uppercase bg-blue-100 px-3 py-1 rounded-full border border-blue-200 inline-block">
            TU ALMACÉN EN MIAMI
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Dirección en USA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Utiliza estos datos al momento de realizar tus compras en tiendas de Estados Unidos. Tu pedido llegará primero a nuestro almacén en Miami y luego será enviado a Perú.
          </p>
        </div>

        {/* Name Input Personalizer */}
        <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl space-y-2">
          <label className="text-xs font-bold text-blue-950 block">
            Escribe tu Nombre y Apellido para generar tus datos:
          </label>
          <input
            type="text"
            placeholder="Ej. Juan Pérez"
            value={userFullName}
            onChange={(e) => setUserFullName(e.target.value)}
            className="w-full bg-white border border-blue-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Highlight Alert Banner */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">
            En el campo <strong>Nombre / Name</strong> escribe siempre <strong className="text-amber-950 font-black">{displayName}</strong>. Esto nos permitirá identificar correctamente tu paquete al llegar a nuestro almacén.
          </p>
        </div>

        {/* Main Address Card with Copy Buttons */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Datos para tu compra
            </span>
            <button
              onClick={handleCopyAll}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-sm ${
                copiedField === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              {copiedField === 'all' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedField === 'all' ? '¡Todo Copiado!' : 'Copiar Toda la Dirección'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addressFields.map((field) => (
              <div
                key={field.key}
                className={`p-3 bg-white border rounded-xl flex items-center justify-between gap-2 transition-all ${
                  field.key === 'name' ? 'sm:col-span-2 border-blue-300 bg-blue-50/30' : 'border-slate-200'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    {field.label}
                  </span>
                  <span className={`text-xs sm:text-sm font-extrabold font-mono truncate block ${field.key === 'name' ? 'text-blue-700' : 'text-slate-900'}`}>
                    {field.value}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(field.key, field.value)}
                  className={`p-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    copiedField === field.key
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="Copiar este campo"
                >
                  {copiedField === field.key ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Important Note */}
        <p className="text-xs text-slate-500 italic text-center">
          💡 <strong>Importante:</strong> Guarda la factura y el número de tracking de tu compra. Te servirán para reportarnos tu pedido por WhatsApp apenas la tienda realice el despacho.
        </p>
      </motion.div>
    </div>
  );
};
