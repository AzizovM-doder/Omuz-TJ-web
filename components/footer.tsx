"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"

export function Footer() {
  const t = useTranslations("footer")
  
  return (
    <footer className="bg-sky-50/50 dark:bg-slate-950 text-foreground border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
               {/* Adaptive Logo */}
               {/* Light Mode Logo */}
               <div className="dark:hidden">
                 <Image 
                   src="/omuz2.svg" 
                   alt="Omuz.tj" 
                   width={120} 
                   height={40} 
                   className="h-10 w-auto"
                 />
               </div>
               {/* Dark Mode Logo */}
               <div className="hidden dark:block">
                 <Image 
                   src="/omuz.svg" 
                   alt="Omuz.tj" 
                   width={120} 
                   height={40} 
                   className="h-10 w-auto"
                 />
               </div>
            </Link>
            <p className="text-sky-900/80 dark:text-muted-foreground max-w-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Icons Placeholder */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-sky-100 dark:bg-zinc-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors cursor-pointer group/icon">
                  <span className="w-5 h-5 bg-sky-400 dark:bg-sky-600 rounded-sm group-hover/icon:bg-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-sky-950 dark:text-foreground">{t("info")}</h4>
            <ul className="space-y-4">
              {['home', 'courses', 'about'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/`} 
                    className="text-sky-900/80 dark:text-muted-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-all inline-block hover:translate-x-1"
                  >
                    {t(item as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-sky-950 dark:text-foreground">{t("contact")}</h4>
            <ul className="space-y-4 text-sky-900/80 dark:text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600 dark:text-sky-500">📍</span>
                <span>Душанбе, Тоҷикистон</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sky-600 dark:text-sky-500">📞</span>
                <span>(+992) 111 585 050</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sky-600 dark:text-sky-500">✉️</span>
                <span>online@omuz.tj</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t("rights")}</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-sky-600 dark:hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-sky-600 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
