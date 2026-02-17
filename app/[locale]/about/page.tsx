import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function AboutPage({
  params
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("about_page");

  return (
    <div className="min-h-screen bg-background text-foreground">
       {/* Hero Section */}
       <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
         <Image 
           src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
           alt="Office"
           fill
           className="object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
         
         <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
             {t('title')}
           </h1>
           <p className="text-xl md:text-2xl text-slate-200">
             {t('subtitle')}
           </p>
         </div>
       </div>

       {/* Story Section */}
       <section className="py-24 container mx-auto px-4">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-3xl blur-lg opacity-30" />
               <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                   alt="Story"
                   fill
                   className="object-cover"
                 />
               </div>
            </div>
            <div>
               <h2 className="text-3xl font-bold mb-6 text-foreground">{t('story_title')}</h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 {t('story_desc')}
               </p>
            </div>
         </div>
       </section>

       {/* Values Grid */}
       <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">{t('values_title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {['innovation', 'community', 'quality'].map((val, i) => (
                 <div key={val} className="bg-background border border-border p-8 rounded-3xl hover:border-sky-500/50 transition-colors duration-300">
                    <h3 className="text-2xl font-bold mb-4">{t(`values.${val}`)}</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full" />
                 </div>
               ))}
            </div>
          </div>
       </section>

       <Footer />
    </div>
  );
}
