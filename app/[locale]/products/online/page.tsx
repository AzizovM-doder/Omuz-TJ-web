import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle, Award, Clock } from "lucide-react";
import { Footer } from "@/components/footer";

export default function OnlineProductPage({
  params
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const t = useTranslations("products_online");

  return (
    <div className="min-h-screen bg-background text-foreground">
       {/* Hero Section */}
       <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
               alt="Online Learning"
               fill
               className="object-cover brightness-[0.3]"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-6 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-sm font-medium">New Courses Available</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                   {t('title')}
                </h1>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                   {t('subtitle')}
                </p>
                <div className="flex gap-4">
                   <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-slate-200 h-14 px-8 text-lg font-bold">
                      <a href="https://online.omuz.tj" target="_blank" rel="noopener noreferrer">
                         {t('cta')}
                      </a>
                   </Button>
                   <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg backdrop-blur-sm">
                      Browse All
                   </Button>
                </div>
             </div>
          </div>
       </section>

       {/* Popular Courses Preview */}
       <section className="py-24 container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl font-bold">{t('courses_title')}</h2>
             <Button variant="link" className="text-primary">View All Courses</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
                <div key={i} className="group rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-300">
                   <div className="aspect-video relative overflow-hidden">
                      <Image 
                        src={`https://images.unsplash.com/photo-${i === 1 ? '1587620962725-abab7fe55159' : i === 2 ? '1542831371-29b0f74f9713' : '1555066931-4365d14bab8c'}?q=80&w=2070&auto=format&fit=crop`}
                        alt="Course Thumbnail"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 cursor-pointer hover:scale-110 transition-transform">
                            <PlayCircle className="w-8 h-8 text-white fill-white/50" />
                         </div>
                      </div>
                   </div>
                   <div className="p-6">
                      <div className="flex gap-2 mb-3">
                         <span className="px-2 py-1 rounded-md bg-sky-500/10 text-sky-500 text-xs font-bold uppercase">Development</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Full Stack Web Development Zero to Hero</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                         <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> 24h</div>
                         <div className="flex items-center gap-1"><Award className="w-4 h-4" /> Certificate</div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </section>

       <Footer />
    </div>
  );
}
