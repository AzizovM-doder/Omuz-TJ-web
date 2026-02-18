import { setRequestLocale, getTranslations } from 'next-intl/server';
import { RegisterForm } from "@/components/auth/register-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

import { MagicCard } from "@/components/ui/magic-card";

export default async function RegisterPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'register_page'});

  return (
    <div className="min-h-screen w-full flex bg-background relative overflow-hidden">
       {/* Background Animation Loop */}
       <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 via-background to-background dark:from-sky-900/20 dark:via-background dark:to-background" />
          
          {/* Moving Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/10 rounded-full blur-3xl animate-[blob_10s_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-300/30 dark:bg-sky-600/10 rounded-full blur-3xl animate-[blob_10s_infinite_2s]" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/10 rounded-full blur-3xl animate-[blob_10s_infinite_3s]" />
       </div>

       <div className="w-full flex items-center justify-center relative z-10 p-4">
          <MagicCard 
            className="w-full max-w-md bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-2xl"
            gradientColor={"#D9D9D955"}
          >
             <div className="mb-6 text-center">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
                  {t('join_us')}
                </div>
                <h2 className="text-3xl font-bold mb-2 tracking-tight">{t('create_account')}</h2>
                <p className="text-muted-foreground">{t('start_journey')}</p>
             </div>
             
             <RegisterForm />
             
             <div className="mt-8 text-center text-sm text-muted-foreground">
               <p>{t('terms')}</p>
             </div>
          </MagicCard>
       </div>
       
       <style>{`
         @keyframes blob {
           0% { transform: translate(0px, 0px) scale(1); }
           33% { transform: translate(30px, -50px) scale(1.1); }
           66% { transform: translate(-20px, 20px) scale(0.9); }
           100% { transform: translate(0px, 0px) scale(1); }
         }
       `}</style>
    </div>
  );
}
