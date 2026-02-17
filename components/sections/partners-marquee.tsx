"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function PartnersMarquee() {
  const t = useTranslations("partners")
  
  // Placeholder logos (just colored boxes for now with names)
  const partners = [
    "Alif", "Humo", "Babilon", "Tcell", "Megafon", "Indigo", "Zypl", "Somon Air"
  ]
  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          {t("title")}
        </h2>
      </div>

      <div className="relative w-full flex">
         <motion.div 
           className="flex gap-12 whitespace-nowrap"
           animate={{ x: [0, -1000] }}
           transition={{ 
             repeat: Infinity, 
             duration: 20, 
             ease: "linear" 
           }}
         >
           {duplicatedPartners.map((partner, index) => (
             <div 
               key={index} 
               className="flex items-center justify-center min-w-[150px] h-20 bg-white rounded-xl shadow-sm border border-gray-100 grayscale hover:grayscale-0 transition-all cursor-pointer"
             >
               <span className="font-bold text-xl text-gray-400 hover:text-sky-600">{partner}</span>
             </div>
           ))}
         </motion.div>
      </div>
    </section>
  )
}
