"use client"

import { useTranslations } from "next-intl"
import { Marquee } from "@/components/ui/marquee"

import Image from "next/image"

const partners = [
  { name: "Alif", logo: "https://logo.clearbit.com/alif.tj" },
  { name: "Humo", logo: "https://logo.clearbit.com/humo.tj" },
  { name: "Babilon", logo: "https://logo.clearbit.com/babilon-m.tj" },
  { name: "Tcell", logo: "https://logo.clearbit.com/tcell.tj" },
  { name: "Megafon", logo: "https://logo.clearbit.com/megafon.tj" },
  { name: "Zypl", logo: "https://logo.clearbit.com/zypl.ai" },
  { name: "Somon Air", logo: "https://logo.clearbit.com/somonair.com" },
]

export function PartnersMarquee() {
  const t = useTranslations("partners")
  
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          {t("title")}
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  )
}

function PartnerCard({ name, logo }: { name: string, logo: string }) {
  return (
    <div className="flex h-24 w-48 items-center justify-center rounded-xl border bg-card text-card-foreground shadow-sm px-6 mx-4 hover:border-sky-500 transition-colors">
      <div className="relative w-full h-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
        <Image 
          src={logo} 
          alt={name} 
          width={120} 
          height={60} 
          className="object-contain max-h-12 w-auto"
          unoptimized
        />
      </div>
    </div>
  )
}
