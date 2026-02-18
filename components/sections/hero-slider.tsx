"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"

export function HeroSlider() {
  const t = useTranslations("hero")
  const [currentSlide, setCurrentSlide] = useState(0)

  // Using keys 0, 1, 2 for the 3 slides
  const slides = [0, 1, 2]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Slightly longer duration for reading
    return () => clearInterval(timer)
  }, [slides.length])

  const gradients = [
    "from-violet-600 via-indigo-600 to-purple-600",
    "from-blue-600 via-sky-600 to-cyan-600", 
    "from-emerald-600 via-teal-600 to-green-600"
  ]

  const icons = [Sparkles, Zap, Shield]
  const CurrentIcon = icons[currentSlide]

  return (
    <section className="relative h-[100svh] lg:h-[690px] min-h-[600px] w-full overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[currentSlide]} transition-colors duration-1000 ease-in-out opacity-20`} />
        
        {/* Mobile-optimized blobs */}
        <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-48 h-48 md:w-72 md:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 h-full flex items-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
          >
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mx-auto lg:mx-0"
              >
                <CurrentIcon className="w-4 h-4" />
                <span>Omuz.tj v2.0 Platform</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
                >
                  {t(`slides.${currentSlide}.title`)}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                >
                  {t(`slides.${currentSlide}.subtitle`)}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <InteractiveHoverButton 
                  className={`bg-gradient-to-r ${gradients[currentSlide]} hover:brightness-110 text-white border-0 h-14 w-auto px-8 text-lg rounded-full shadow-lg shadow-white/10 transition-all duration-300`}
                >
                  <span className="flex items-center gap-2">
                    {t(`slides.${currentSlide}.cta`)}
                    {/* <ArrowRight className="h-5 w-5" /> */}
                  </span>
                </InteractiveHoverButton>
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg rounded-full border-white/20 text-black hover:bg-white/10 hover:text-white backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* Visual Element (3D/Illustration Placeholder) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex justify-center items-center perspective-1000"
            >
              <div className="relative w-full max-w-[600px] aspect-square">
                 {/* Main layered card effect */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${gradients[currentSlide]} rounded-[3rem] opacity-20 blur-3xl`} />
                 
                 <div className="relative w-full h-full bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-colors">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-transparent border border-white/10 flex items-center justify-center mb-8">
                        <CurrentIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 w-2/3 bg-white/10 rounded-full" />
                        <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                        <div className="h-32 w-full bg-gradient-to-br from-white/5 to-transparent rounded-xl mt-8 border border-white/5" />
                      </div>
                    </div>
                 </div>

                 {/* Floating elements */}
                 <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -right-8 top-1/4 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center"
                 >
                    <div className="text-3xl">🚀</div>
                 </motion.div>
                 <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-8 bottom-1/4 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl flex items-center justify-center"
                 >
                    <div className="text-3xl">💎</div>
                 </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {slides.map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-2 w-16 bg-white/10 rounded-full overflow-hidden transition-all hover:h-4"
            >
              <div 
                className={`absolute inset-0 bg-white transition-all duration-300 ${
                  currentSlide === index ? "w-full opacity-100" : "w-0 opacity-0 group-hover:opacity-50"
                }`} 
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
