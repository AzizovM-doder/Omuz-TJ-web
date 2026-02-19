"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { ArrowRight, Globe, Shield, TrendingUp, Building2, Server, Smartphone, Laptop } from "lucide-react"

export function HeroSlider() {
  const t = useTranslations("hero")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Using keys 0, 1, 2 for the 3 slides
  const slides = [0, 1, 2]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Lighter, fresher gradients for the "photo-like" simple look
  const gradients = [
    "from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800",
    "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950", 
    "from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950"
  ]
  
  const textTheme = [
    "text-slate-900 dark:text-white",
    "text-blue-900 dark:text-blue-100",
    "text-purple-900 dark:text-purple-100"
  ]

  const icons = [Globe, Building2, Shield]
  const CurrentIcon = icons[currentSlide]

  return (
    <section className="py-4 md:py-8 lg:py-12 w-full flex justify-center">
      <div className="container max-w-7xl px-4">
         {/* Main Rounded Card Container */}
         <div className="relative w-full h-[600px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${gradients[currentSlide]} flex items-center`}
              >
                  {/* Background Patterns */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]" />
                  <div className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${currentSlide === 0 ? 'bg-blue-500' : currentSlide === 1 ? 'bg-indigo-500' : 'bg-purple-500'}`} />
                  <div className={`absolute -left-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${currentSlide === 0 ? 'bg-emerald-500' : currentSlide === 1 ? 'bg-blue-500' : 'bg-pink-500'}`} />

                  <div className="container px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold shadow-sm ${textTheme[currentSlide]}`}
                        >
                            <span className="flex h-2 w-2 rounded-full bg-current opacity-75 animate-pulse" />
                            <span>{t("badge")}</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] ${textTheme[currentSlide]}`}
                            >
                                {t(`slides.${currentSlide}.title`)}
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className={`text-lg md:text-xl opacity-80 max-w-lg mx-auto lg:mx-0 font-medium ${textTheme[currentSlide]}`}
                            >
                                {t(`slides.${currentSlide}.subtitle`)}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-white text-black hover:bg-white/90 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
                                {t(`slides.${currentSlide}.cta`)}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Visuals - 3D Floating Elements */}
                    <div className="hidden lg:flex justify-center items-center relative h-96">
                        <motion.div
                           initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
                           animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                           transition={{ type: "spring", duration: 1.5 }}
                           className="relative w-full max-w-md aspect-square"
                        >
                            {/* Central Hero Image/Icon Container */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-white/10 dark:from-white/10 dark:to-transparent rounded-[3rem] backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-center">
                                <CurrentIcon className={`w-32 h-32 ${textTheme[currentSlide]} opacity-90 drop-shadow-2xl`} />
                            </div>

                            {/* Floating Orbits */}
                            <motion.div 
                                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -right-8 w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center"
                            >
                                <Laptop className="w-10 h-10 text-blue-500" />
                            </motion.div>

                            <motion.div 
                                animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -left-8 w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center"
                            >
                                <Smartphone className="w-8 h-8 text-purple-500" />
                            </motion.div>
                        </motion.div>
                    </div>

                  </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {slides.map((idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${
                             currentSlide === idx 
                             ? "w-12 h-2 bg-slate-800 dark:bg-white" 
                             : "w-2 h-2 bg-slate-400/50 hover:bg-slate-400"
                        }`}
                    />
                ))}
            </div>
         </div>
      </div>
    </section>
  )
}
