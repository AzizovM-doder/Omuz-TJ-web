import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BarChart3, Calendar, CreditCard, ChevronRight, Users, Smartphone, Headphones, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/footer";

export default function CrmProductPage({
  params
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("products_crm");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900">
       
       {/* Hero Section */}
       <section className="relative p-5 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.01]" />
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
             <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 font-medium text-sm mb-6 border border-sky-200 dark:border-sky-800">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        Omuz CRM
                    </div>
                    
                    <h1 className="text-4xl lg:text-6xl w-full font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        {t('title')} <span className="text-sky-600 block sm:inline">{t('subtitle')}</span>
                    </h1>
                    
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {t('description')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-200 dark:shadow-none">
                            {t('cta')} <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
                            {t('demo')}
                        </Button>
                    </div>

                    <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                           <CheckCircle2 className="w-5 h-5 text-sky-500" />
                           <span>{t('stats.users')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <CheckCircle2 className="w-5 h-5 text-sky-500" />
                           <span>{t('stats.uptime')}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-[600px] perspective-[2000px]">
                    <div className="relative transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 lg:p-4">
                             <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative group">
                                <Image 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Dashboard Preview"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur text-slate-900 rounded-full font-medium text-sm shadow-lg">
                                        {t('interactive_dashboard')}
                                    </span>
                                </div>
                             </div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
             </div>
          </div>
       </section>
       
       {/* Stats Bar */}
       <div className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto px-4 py-8 lg:py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                    { label: t('stats.users'), value: "10k+", icon: Users },
                    { label: t('stats.centers'), value: "50+", icon: Building2 },
                    { label: t('stats.transactions'), value: "$2M+", icon: CreditCard },
                    { label: t('stats.uptime'), value: "99.9%", icon: Activity }
                 ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="p-3 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-600 mb-3">
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
                    </div>
                 ))}
              </div>
          </div>
       </div>

       {/* Features Grid */}
       <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container max-w-7xl mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">{t('features_title')}</h2>
                 <p className="text-lg text-slate-600 dark:text-slate-400">{t('features_subtitle')}</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                   { icon: BarChart3, key: 'analytics', color: 'bg-sky-50 text-sky-600' },
                   { icon: Calendar, key: 'scheduling', color: 'bg-purple-50 text-purple-600' },
                   { icon: CreditCard, key: 'payments', color: 'bg-emerald-50 text-emerald-600' },
                   { icon: Users, key: 'students', color: 'bg-orange-50 text-orange-600' },
                   { icon: Smartphone, key: 'mobile', color: 'bg-indigo-50 text-indigo-600' },
                   { icon: Headphones, key: 'support', color: 'bg-pink-50 text-pink-600' }
                ].map((feature, i) => (
                   <div key={i} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-sky-100 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.color} dark:bg-slate-800 dark:text-white`}>
                         <feature.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{t(`features.${feature.key}.title`)}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                         {t(`features.${feature.key}.desc`)}
                      </p>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* FAQ Section */}
       <section className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">{t('faq_title')}</h2>
              <div className="grid gap-6">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{t(`faq.q${i}`)}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(`faq.a${i}`)}</p>
                    </div>
                 ))}
              </div>
          </div>
       </section>

       {/* Request Form Section */}
       <RequestFormSection imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" />
       
       <Footer />
    </div>
  );
}

import { Building2, Activity } from "lucide-react";
import { RequestFormSection } from "@/components/sections/request-form";
