import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BarChart3, Calendar, CreditCard, ChevronRight } from "lucide-react";
import { Footer } from "@/components/footer";

export default function CrmProductPage({
  params
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("products_crm");

  return (
    <div className="min-h-screen bg-background text-foreground">
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-500 font-medium mb-6">
                Omuz CRM 2.0
             </div>
             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {t('title')}
             </h1>
             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                {t('subtitle')}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-sky-600 hover:bg-sky-700 text-white px-8 text-lg h-14 shadow-lg shadow-sky-500/25">
                   {t('cta')} <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14">
                   Live Preview
                </Button>
             </div>

             {/* Dashboard Mockup - 3D Tilt Effect */}
             <div className="mt-20 relative max-w-5xl mx-auto perspective-[2000px]">
                <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 shadow-2xl overflow-hidden transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out">
                   <div className="aspect-[16/9] relative">
                      {/* Placeholder for dashboard screenshot */}
                      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
                         <div className="text-center">
                            <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground font-medium">Dashboard Interface Preview</p>
                         </div>
                      </div>
                      <Image 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        alt="Dashboard Analysis"
                        fill
                        className="object-cover opacity-80 mix-blend-overlay hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                      />
                   </div>
                </div>
                {/* Glow behind dashboard */}
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-[2rem] blur-2xl -z-10 opacity-20" />
             </div>
          </div>
       </section>

       {/* Features Grid */}
       <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-3 gap-8">
                {[
                   { icon: BarChart3, key: 'analytics', color: 'text-sky-500' },
                   { icon: Calendar, key: 'scheduling', color: 'text-purple-500' },
                   { icon: CreditCard, key: 'payments', color: 'text-green-500' }
                ].map((feature, i) => (
                   <div key={i} className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm ${feature.color}`}>
                         <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t(`features.${feature.key}`)}</h3>
                      <p className="text-muted-foreground">
                         Streamline your operations with our cutting-edge tools designed for modern educational institutions.
                      </p>
                   </div>
                ))}
             </div>
          </div>
       </section>
       
       <Footer />
    </div>
  );
}
