"use client"

import { useTranslations } from "next-intl"
import { MagicCard } from "@/components/ui/magic-card"
import Image from "next/image"

export function TestimonialsSection() {
  const t = useTranslations("testimonials")
  
  const testimonials = [
    {
      name: "Alijon Karimov",
      role: "Director, Smart Education",
      content: "Omuz.tj transformed how we manage our students. The CRM is intuitive and the online platform is top-notch.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alijon"
    },
    {
      name: "Sitora Nazarova",
      role: "Online Mentor",
      content: "The online learning tools are incredible. Video conferences and material management are seamless.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sitora"
    },
    {
      name: "Davron Jumaev",
      role: "Finance Manager",
      content: "Automation of finance reporting saved us hours of work every week. Highly recommend Omuz.tj!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Davron"
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
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
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-accent">
                  <Image src={testi.avatar} alt={testi.name} fill />
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
