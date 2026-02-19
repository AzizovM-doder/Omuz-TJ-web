import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Award, Clock, ChevronRight, Globe, Users, Briefcase, Layout, CheckCircle } from "lucide-react";
import { Footer } from "@/components/footer";

export default function OnlineProductPage({
  params
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("products_online");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-purple-100 selection:text-purple-900">
       
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
               alt="Collaboration"
               fill
               className="object-cover brightness-[0.9] dark:brightness-[0.4]"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950" />
          </div>

          <div className="container max-w-7xl mx-auto px-4 relative z-10">
             <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-8 backdrop-blur-md">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                   </span>
                   <span className="text-sm font-medium">Online Omuz Platform</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-white tracking-tight">
                   {t('title')}
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                   {t('description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                   <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-900/30 border-0">
                       {t('cta')} <ChevronRight className="ml-2 w-5 h-5" />
                   </Button>
                   <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                       {t('browse')}
                   </Button>
                </div>

                <div className="mt-12 flex items-center gap-8 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                       <Users className="w-5 h-5 text-purple-400" />
                       <span>{t('stats.students')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <PlayCircle className="w-5 h-5 text-purple-400" />
                       <span>{t('stats.courses')}</span>
                    </div>
                </div>
             </div>
          </div>
       </section>

       {/* Categories Grid */}
       <section className="py-24 bg-white dark:bg-slate-950 relative">
          <div className="container max-w-7xl mx-auto px-4">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">{t('courses_title')}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">{t('courses_subtitle')}</p>
                </div>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 group">
                    {t('view_all')} <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { key: 'dev', icon: Layout, color: 'text-blue-500 bg-blue-50' },
                    { key: 'design', icon: Globe, color: 'text-pink-500 bg-pink-50' },
                    { key: 'marketing', icon: Users, color: 'text-orange-500 bg-orange-50' },
                    { key: 'business', icon: Briefcase, color: 'text-emerald-500 bg-emerald-50' }
                 ].map((cat, i) => (
                    <div key={i} className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 cursor-pointer">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.color} dark:bg-slate-800`}>
                            <cat.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t(`categories.${cat.key}`)}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">20+ {t('course_suffix')}</p>
                    </div>
                 ))}
             </div>
          </div>
       </section>

       {/* Featured Courses (Visual Only) */}
       <section className="py-24 bg-slate-50 dark:bg-slate-900">
           <div className="container max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Trending Now</h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                       <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                          <Image 
                            src={`https://images.unsplash.com/photo-${i === 1 ? '1587620962725-abab7fe55159' : i === 2 ? '1542831371-29b0f74f9713' : '1555066931-4365d14bab8c'}?q=80&w=2070&auto=format&fit=crop`}
                            alt="Course Thumbnail"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-slate-900 uppercase tracking-wider">
                                  {i === 1 ? 'Development' : i === 2 ? 'Business' : 'Design'}
                              </span>
                          </div>
                       </div>
                       <div className="p-6">
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-purple-600 transition-colors">
                               {i === 1 ? 'Full Stack Web Development Bootcamp' : i === 2 ? 'Digital Marketing Strategy Masterclass' : 'UI/UX Design Principals for Beginners'}
                           </h3>
                           <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-4">
                               <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> 24h</div>
                               <div className="flex items-center gap-1"><Users className="w-4 h-4" /> 1.2k</div>
                               <div className="flex items-center gap-1 ml-auto font-bold text-purple-600">$49</div>
                           </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
       </section>

       {/* Benefits Section */}
       <section className="py-24 bg-white dark:bg-slate-950">
           <div className="container max-w-7xl mx-auto px-4">
                <div className="bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden text-white relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 lg:p-20 relative z-10 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t('benefits_title')}</h2>
                            <div className="space-y-8">
                                {[
                                    { key: 'expert', icon: Users },
                                    { key: 'certificate', icon: Award },
                                    { key: 'access', icon: Clock },
                                    { key: 'community', icon: Globe }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400 border border-white/10">
                                            <benefit.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{t(`benefits.${benefit.key}.title`)}</h3>
                                            <p className="text-slate-400">{t(`benefits.${benefit.key}.desc`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                             <Image 
                               src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                               alt="Learning"
                               fill
                               className="object-cover"
                             />
                        </div>
                    </div>
                </div>
           </div>
       </section>

       {/* Request Form Section */}
       <RequestFormSection imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" />
       
       <Footer />
    </div>
  );
}

import { RequestFormSection } from "@/components/sections/request-form";
