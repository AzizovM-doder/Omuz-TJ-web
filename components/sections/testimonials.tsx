"use client"

import { useTranslations } from "next-intl"
import { MagicCard } from "@/components/ui/magic-card"

export function TestimonialsSection() {
  const t = useTranslations("testimonials")
  
  const testimonials = [
    {
      name: "Jamshed Rahmonov",
      role: t('jamshed_role'),
      content: t('jamshed'),
      initials: "JR",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      name: "Malika Sharipova",
      role: t('malika_role'),
      content: t('malika'),
      initials: "MS",
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
    },
    {
      name: "Davron Jumaev",
      role: t('davron_role'),
      content: t('davron'),
      initials: "DJ",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-accent/20">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <MagicCard
              key={i}
              className="cursor-pointer flex-col items-start justify-between p-8 shadow-2xl"
              gradientColor={"#D9D9D955"}
            >
              <p className="text-muted-foreground italic mb-6">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden ${testi.color}`}>
                  <span className="font-bold text-lg">{testi.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testi.name}</h4>
                  <p className="text-xs text-muted-foreground">{testi.role}</p>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
