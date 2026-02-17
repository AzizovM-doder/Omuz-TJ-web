"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"

export function Footer() {
  const t = useTranslations("footer")
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
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
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Платформаи таълимии муосир барои рушди касбӣ ва шахсӣ.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Icons Placeholder */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors cursor-pointer group/icon">
                  <span className="w-5 h-5 bg-slate-500 dark:bg-slate-400 rounded-sm group-hover/icon:bg-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">Маълумот</h4>
            <ul className="space-y-4">
              {['home', 'courses', 'about'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-500 transition-all inline-block hover:translate-x-1"
                  >
                    {t(item as any) || item} {/* Fallback or key */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">{t("contact_us")}</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-500">📍</span>
                <span>Душанбе, Тоҷикистон</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sky-500">📞</span>
                <span>+992 00 000 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sky-500">✉️</span>
                <span>info@omuz.tj</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
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
