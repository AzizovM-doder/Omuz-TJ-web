"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlayCircle, Award, Clock, ChevronRight, Globe, Users, Briefcase, Layout, Send, Loader2 } from "lucide-react";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function OnlineProductPage({
  // params ignored
}: {
  params: { locale: string };
}) {
  const t = useTranslations("products_online");
  const formT = useTranslations("request_form");
  const heroRef = useRef<HTMLDivElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(formT("success"), { position: "top-right", theme: "dark" });
    }, 1500);
  };

  const { scrollYProgress: heroScroll } = useScroll({
     target: heroRef,
     offset: ["start start", "end start"],
  });
  const opacityBg = useTransform(heroScroll, [0, 1], [1, 0]);
  const scaleBg = useTransform(heroScroll, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-500/30">
       
       {/* Cinematic Hero Section */}
       <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
          {/* Animated Background Image with Overlay */}
          <motion.div style={{ opacity: opacityBg, scale: scaleBg, y: useTransform(heroScroll, [0, 1], ["0%", "20%"]) }} className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
               alt="Collaboration"
               fill
               className="object-cover brightness-[0.85] dark:brightness-[0.3]"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950 pointer-events-none" />
          </motion.div>
          
          {/* Glowing Ambient Lights */}
          <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-sky-500/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
          />
          <motion.div 
             animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
             className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
          />

          <div className="container max-w-7xl mx-auto px-4 relative z-10 w-full">
             <motion.div 
                variants={STAGGER}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
             >
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white/10 text-sky-300 border border-sky-400/30 mb-6 lg:mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                   <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-sky-500"></span>
                   </span>
                   <span className="text-xs sm:text-sm font-medium">{t('badge')}</span>
                </motion.div>
                
                <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-[1.15] lg:leading-[1.1] text-white tracking-tight">
                   {t('title')} <br className="hidden sm:block"/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 block pb-1">{t('platform_text')}</span>
                </motion.h1>
                
                <motion.p variants={FADE_UP} className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 lg:mb-10 leading-relaxed max-w-2xl font-light">
                   {t('description')}
                </motion.p>
                
                <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                   <Button size="lg" className="h-12 sm:h-14 w-full sm:w-auto px-8 text-base sm:text-lg rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_40px_-10px_rgba(14,165,233,0.6)] border border-sky-400/50 transition-all hover:scale-105">
                       {t('cta')} <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                   </Button>
                   <Button size="lg" variant="outline" className="h-12 sm:h-14 w-full sm:w-auto px-8 text-base sm:text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105">
                       {t('browse')}
                   </Button>
                </motion.div>

                <motion.div variants={FADE_UP} className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 text-slate-300 text-sm font-medium">
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                       <Users className="w-5 h-5 text-sky-400" />
                       <span>{t('stats.students')}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                       <PlayCircle className="w-5 h-5 text-purple-400" />
                       <span>{t('stats.courses')}</span>
                    </div>
                </motion.div>
             </motion.div>
          </div>
       </section>

       {/* Floating Categories */}
       <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900/50 pointer-events-none" />
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4 sm:gap-6">
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-slate-900 dark:text-white tracking-tight">{t('courses_title')}</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 font-light max-w-xl">{t('courses_subtitle')}</p>
                </motion.div>
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="w-full md:w-auto"
                >
                    <Button variant="ghost" className="w-full md:w-auto text-sky-600 hover:text-sky-700 hover:bg-sky-50 dark:hover:bg-sky-900/20 group h-12 px-6 rounded-full text-base">
                        {t('view_all')} <ChevronRight className="ml-1 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </motion.div>
             </div>

             <motion.div 
                variants={STAGGER}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
             >
                 {[
                    { key: 'dev', icon: Layout, color: 'text-sky-500 bg-sky-50 shadow-sky-500/10 ring-sky-200' },
                    { key: 'design', icon: Globe, color: 'text-pink-500 bg-pink-50 shadow-pink-500/10 ring-pink-200' },
                    { key: 'marketing', icon: Users, color: 'text-orange-500 bg-orange-50 shadow-orange-500/10 ring-orange-200' },
                    { key: 'business', icon: Briefcase, color: 'text-emerald-500 bg-emerald-50 shadow-emerald-500/10 ring-emerald-200' }
                 ].map((cat, i) => (
                    <motion.div 
                       key={i} 
                       variants={FADE_UP} 
                       whileHover={{ y: -10, scale: 1.02 }}
                       className="group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-sky-900/20 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                        {/* Hover Gradient Aura */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-transparent to-purple-500/0 group-hover:from-sky-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
                        
                        {/* Continuous Float Animation */}
                        <motion.div 
                           animate={{ y: [0, -6, 0] }}
                           transition={{ duration: 4 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                           className="relative z-10"
                        >
                            <div className={cn("w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-inner ring-1 dark:bg-slate-800 dark:ring-slate-700", cat.color)}>
                                <cat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-purple-500 transition-colors uppercase tracking-tight">{t(`categories.${cat.key}`)}</h3>
                            <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">20+ {t('course_suffix')}</p>
                        </motion.div>
                    </motion.div>
                 ))}
             </motion.div>
          </div>
       </section>

       {/* Trending Spotlights */}
       <section className="py-32 bg-slate-50 dark:bg-slate-900 relative">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />
           <div className="container max-w-7xl mx-auto px-4 relative z-10">
              <motion.h2 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="text-4xl lg:text-5xl font-bold mb-16 text-slate-900 dark:text-white tracking-tight"
              >
                 {t('trending_title')}
              </motion.h2>
              <motion.div 
                 variants={STAGGER}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, margin: "-100px" }}
                 className="grid md:grid-cols-3 gap-8"
              >
                 {[1, 2, 3].map((i) => (
                    <motion.div 
                       key={i} 
                       variants={FADE_UP} 
                       whileHover={{ y: -12, scale: 1.01 }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                       className="group rounded-[2rem] overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-sky-500/15 dark:hover:shadow-sky-500/10 cursor-pointer flex flex-col relative"
                    >
                       {/* Subtle inner glow on hover */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/0 via-transparent to-purple-500/0 group-hover:from-sky-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none z-10" />

                       <div className="aspect-[4/3] relative overflow-hidden bg-slate-200 dark:bg-slate-800 m-2 rounded-[1.5rem]">
                          <motion.div 
                             className="w-full h-full relative"
                             whileHover={{ scale: 1.1 }}
                             transition={{ duration: 0.8, ease: "easeOut" }}
                          >
                              <Image 
                                src={`https://images.unsplash.com/photo-${i === 1 ? '1587620962725-abab7fe55159' : i === 2 ? '1542831371-29b0f74f9713' : '1555066931-4365d14bab8c'}?q=80&w=2070&auto=format&fit=crop`}
                                alt="Course Thumbnail"
                                fill
                                className="object-cover"
                              />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                          <div className="absolute top-4 left-4 z-20">
                              <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider shadow-sm">
                                  {t(`trending_courses.${i}.category`)}
                              </span>
                          </div>
                          
                          {/* Play button overlay on hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-20">
                              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-2xl">
                                  <PlayCircle className="w-8 h-8" />
                              </div>
                          </div>
                       </div>
                       <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-20">
                           <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-purple-500 dark:group-hover:from-sky-400 dark:group-hover:to-purple-400 transition-colors">
                               {t(`trending_courses.${i}.title`)}
                           </h3>
                           <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-auto">
                               <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/50"><Clock className="w-4 h-4" /> 24h</div>
                               <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/50"><Users className="w-4 h-4" /> 1.2k</div>
                               <div className="flex items-center gap-1 ml-auto font-black text-xl text-sky-600 dark:text-sky-400">$49</div>
                           </div>
                       </div>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
       </section>

       {/* Asymmetric Benefits Section */}
       <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
           {/* Ambient Glows */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

           <div className="container max-w-7xl mx-auto px-4 relative z-10">
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 lg:mb-20"
                 >
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-slate-900 dark:text-white tracking-tight">{t('benefits_title')}</h2>
                 </motion.div>

                 <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                     
                     <motion.div 
                        variants={STAGGER}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-4 lg:space-y-6"
                     >
                         {[
                             { key: 'expert', icon: Users, color: 'text-sky-500' },
                             { key: 'certificate', icon: Award, color: 'text-purple-500' },
                             { key: 'access', icon: Clock, color: 'text-pink-500' },
                             { key: 'community', icon: Globe, color: 'text-emerald-500' }
                         ].map((benefit, i) => (
                             <motion.div key={i} variants={FADE_UP} className="flex gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                 <div className={cn("flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center border bg-slate-50 dark:bg-slate-800 dark:border-slate-700 shadow-inner", benefit.color)}>
                                     <benefit.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                                 </div>
                                 <div>
                                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 text-slate-900 dark:text-white tracking-tight">{t(`benefits.${benefit.key}.title`)}</h3>
                                     <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">{t(`benefits.${benefit.key}.desc`)}</p>
                                 </div>
                             </motion.div>
                         ))}
                     </motion.div>
                     
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        viewport={{ once: true }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[800px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl p-2 sm:p-4 bg-white dark:bg-slate-900 mt-8 lg:mt-0 group"
                     >
                          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-purple-500/10 pointer-events-none group-hover:opacity-50 transition-opacity duration-700" />
                          
                          {/* Inner Parallax Container */}
                          <div className="w-full h-full relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-inner">
                             <motion.div 
                                style={{ y: useTransform(heroScroll, [0, 1], ["0%", "-10%"]) }}
                                className="absolute inset-[-10%] w-[120%] h-[120%]"
                             >
                                 <Image 
                                   src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                                   alt="Learning"
                                   fill
                                   className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                 />
                             </motion.div>
                             {/* Floating Elements on Image */}
                             <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 sm:top-10 sm:right-10 sm:bottom-auto sm:left-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4"
                             >
                                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-slate-900 dark:text-white">{t('certified')}</div>
                                    <div className="text-sm font-medium text-slate-500">{t('upon_completion')}</div>
                                </div>
                             </motion.div>
                          </div>
                     </motion.div>
                     
                 </div>
           </div>
       </section>

       {/* Orbiting Tech Stack / Learning Ecosystem */}
       <section className="py-24 lg:py-32 bg-slate-100 dark:bg-slate-900 overflow-hidden relative border-t border-slate-200/50 dark:border-slate-800/50">
           {/* Deep Space Background Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
           <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />
           
           <div className="container max-w-7xl mx-auto px-4 relative z-10">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
               >
                   <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-slate-900 dark:text-white tracking-tight">{t('ecosystem_title')}</h2>
                   <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-light">{t('ecosystem_subtitle')}</p>
               </motion.div>

               {/* Orbital System */}
               <div className="relative h-[400px] sm:h-[600px] flex items-center justify-center">
                   {/* Core Node */}
                   <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="absolute z-30 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_-10px_rgba(14,165,233,0.6)] border-4 border-white/50 dark:border-slate-900/50 backdrop-blur-md"
                   >
                       <span className="text-xl sm:text-2xl font-black text-white px-2 tracking-wider">OMUZ</span>
                       <span className="text-[10px] sm:text-xs text-sky-100 font-medium uppercase tracking-[0.2em]">{t('ecosystem_core')}</span>
                   </motion.div>

                   {/* Orbit Rings (Spinning) */}
                   <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full border-2 border-dashed border-sky-300/30 dark:border-sky-500/30 animate-[spin_20s_linear_infinite]" />
                   <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full border-2 border-dotted border-purple-300/30 dark:border-purple-500/30 animate-[spin_35s_linear_infinite_reverse]" />
                   <div className="absolute w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full border border-emerald-300/20 dark:border-emerald-500/20 animate-[spin_50s_linear_infinite]" />

                   {/* Floating Nodes on Orbits */}
                   {[
                      { icon: Layout, label: "Frontend", color: "text-sky-500", pos: "top-0 sm:top-8 left-1/2 -translate-x-1/2", delay: 0 },
                      { icon: Globe, label: "Backend", color: "text-emerald-500", pos: "bottom-0 sm:bottom-8 left-1/2 -translate-x-1/2", delay: 1 },
                      { icon: Award, label: "Design", color: "text-pink-500", pos: "top-1/2 -translate-y-1/2 left-0 sm:left-12", delay: 2 },
                      { icon: Users, label: "Marketing", color: "text-orange-500", pos: "top-1/2 -translate-y-1/2 right-0 sm:right-12", delay: 3 },
                      { icon: Briefcase, label: "Business", color: "text-purple-500", pos: "top-[15%] left-[15%] sm:top-[20%] sm:left-[20%]", delay: 4 },
                      { icon: Clock, label: "Analytics", color: "text-yellow-500", pos: "bottom-[15%] right-[15%] sm:bottom-[20%] sm:right-[20%]", delay: 5 }
                   ].map((item, i) => (
                      <motion.div 
                         key={i}
                         initial={{ scale: 0, opacity: 0 }}
                         whileInView={{ scale: 1, opacity: 1 }}
                         transition={{ delay: item.delay * 0.15, type: "spring", stiffness: 200 }}
                         viewport={{ once: true }}
                         className={cn("absolute flex flex-col items-center gap-2 sm:gap-3 z-20", item.pos)}
                      >
                          <motion.div 
                             animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                             transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                             className={cn("w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/50 dark:border-slate-700 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative overflow-hidden group hover:scale-110 transition-transform cursor-pointer", item.color)}
                          >
                              {/* Inner Glow */}
                              <div className="absolute inset-0 bg-current opacity-5 group-hover:opacity-15 transition-opacity duration-300" />
                              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-1 transition-transform group-hover:-translate-y-1" />
                              <span className="text-[9px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">{item.label}</span>
                          </motion.div>
                      </motion.div>
                   ))}
               </div>
           </div>
       </section>
 
       {/* Learning Path / How it Works */}
       <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50">
           <div className="container max-w-5xl mx-auto px-4">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center mb-16 lg:mb-24"
              >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">{t('how_it_works_title')}</h2>
              </motion.div>

              <div className="relative">
                 {/* Connecting Line */}
                 <div className="absolute left-[27px] sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500/20 via-purple-500/20 to-sky-500/20 sm:-translate-x-1/2" />

                 <div className="space-y-12 sm:space-y-24">
                    {[
                        { step: 1, title: t('how_it_works.step1_title'), desc: t('how_it_works.step1_desc'), color: "sky" },
                        { step: 2, title: t('how_it_works.step2_title'), desc: t('how_it_works.step2_desc'), color: "purple" },
                        { step: 3, title: t('how_it_works.step3_title'), desc: t('how_it_works.step3_desc'), color: "emerald" }
                    ].map((item, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-100px" }}
                           className={cn(
                              "relative flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-16",
                              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                           )}
                        >
                            {/* Number Indicator */}
                            <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center z-10 shadow-xl">
                               <div className={cn(
                                  "w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-inner",
                                  item.color === 'sky' ? 'bg-sky-500' : item.color === 'purple' ? 'bg-purple-500' : 'bg-emerald-500'
                               )}>
                                  {item.step}
                               </div>
                            </div>

                            {/* Content Card */}
                            <div className={cn("w-full sm:w-1/2 pl-20 sm:pl-0", i % 2 === 0 ? "sm:pr-16 text-left sm:text-right" : "sm:pl-16 text-left")}>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 lg:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
                                   <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                 </div>
              </div>
           </div>
       </section>

       {/* Custom Online Request Form */}
       <section className="py-32 relative overflow-hidden bg-slate-950 border-t border-slate-900">
          {/* Deep Space Glowing Background for the Form */}
          <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  
                  {/* Visual Left Side - Cinematic */}
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="hidden lg:block relative h-[600px] rounded-[3rem] overflow-hidden"
                  >
                      <Image 
                          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                          alt="Start Learning"
                          fill
                          className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/40 to-transparent" />
                      
                      <div className="absolute bottom-12 left-12 right-12">
                          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                              <h3 className="text-2xl font-bold text-white mb-2">{formT("join_students_title")}</h3>
                              <p className="text-slate-300 font-light text-lg">{formT("join_students_subtitle")}</p>
                          </div>
                      </div>
                  </motion.div>

                  {/* Form Right Side - Glassmorphism */}
                  <motion.div 
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                      <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                          {/* Inner soft glow */}
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                          
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                              {formT("title")}
                          </h2>
                          <p className="text-slate-400 text-lg sm:text-xl font-light mb-10">
                              {formT("subtitle")}
                          </p>

                          <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10 text-left">
                              <div className="space-y-2">
                                  <label className="text-sm font-medium text-slate-300 ml-1">{formT("name_placeholder")}</label>
                                  <Input 
                                      placeholder={formT("name_placeholder")}
                                      required
                                      className="h-14 rounded-2xl bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500/50 transition-all px-6 text-lg"
                                  />
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label className="text-sm font-medium text-slate-300 ml-1">{formT("phone_placeholder")}</label>
                                      <Input 
                                          type="tel"
                                          placeholder={formT("phone_placeholder")}
                                          required
                                          className="h-14 rounded-2xl bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500/50 transition-all px-6 text-lg"
                                      />
                                  </div>
                                  <div className="space-y-2">
                                      <label className="text-sm font-medium text-slate-300 ml-1">{formT("email_placeholder")}</label>
                                      <Input 
                                          type="email"
                                          placeholder={formT("email_placeholder")}
                                          required
                                          className="h-14 rounded-2xl bg-slate-950/50 border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-sky-500/50 transition-all px-6 text-lg"
                                      />
                                  </div>
                              </div>
                              
                              <Button 
                                  size="lg"
                                  disabled={isSubmitting}
                                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-400 hover:to-purple-400 text-white text-lg font-bold shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-sky-500/40 transition-all hover:scale-[1.02] mt-4"
                              >
                                  {isSubmitting ? (
                                      <><Loader2 className="mr-2 h-6 w-6 animate-spin" /> {formT("sending")}</>
                                  ) : (
                                      <>{formT("submit")} <Send className="ml-2 h-5 w-5" /></>
                                  )}
                              </Button>
                          </form>
                      </div>
                  </motion.div>
              </div>
          </div>
       </section>
       
       <Footer />
    </div>
  );
}
