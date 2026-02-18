"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, BookOpen, Building2, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const t = useTranslations("about_section")
  const stats = [
    { icon: Users, label: "students", value: "280+" },
    { icon: BookOpen, label: "mentors", value: "15+" },
    { icon: Building2, label: "partners", value: "10+" },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-50" />
      
      <div className="container px-4 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-medium mb-6 border border-sky-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Futuristic Education</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-sky-800 to-foreground dark:from-white dark:via-sky-200 dark:to-white"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Futuristic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Main Visual Card - Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-2 rounded-3xl overflow-hidden relative group border border-border shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-3">Community First</h3>
              <p className="text-sky-100 leading-relaxed max-w-sm">
                Join a vibrant community of learners and innovators shaping the future of technology together.
              </p>
            </div>
          </motion.div>

          {/* Stats Card - Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 bg-card rounded-3xl p-8 border border-border relative overflow-hidden flex flex-col justify-between"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
             
             <div>
               <h3 className="text-2xl font-bold mb-4">Our Impact in Numbers</h3>
               <p className="text-muted-foreground max-w-md">
                 {t('desc_1')}
               </p>
             </div>

             <div className="grid grid-cols-3 gap-8 mt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="relative">
                    <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t(`stats.${stat.label}`)}</div>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Feature Card - Gradient */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                 <Building2 className="w-6 h-6 text-white" />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">{t('stats.partners')}</h3>
                  <p className="text-purple-100 text-sm">Collaborating with top tech companies.</p>
               </div>
            </div>
          </motion.div>

          {/* Image Card - Small */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 rounded-3xl overflow-hidden relative border border-border shadow-xl group"
          >
             <Image 
               src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
               alt="Modern learning"
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-sky-900/40 group-hover:bg-sky-900/20 transition-colors duration-500" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
