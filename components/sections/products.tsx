"use client"

import { useTranslations, useMessages } from "next-intl"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function ProductsSection() {
  const t = useTranslations("products")
  const [activeProduct, setActiveProduct] = useState<"crm" | "online" | null>(null)

  const products = [
    {
      id: "crm",
      title: t("crm.title"),
      description: t("crm.description"),
      link: t("crm.link"),
      features: ["Student + mentor tracking", "Grade journal", "Schedule management", "Finance reporting", "Analytics", "Notifications"]
    },
    {
      id: "online",
      title: t("online.title"),
      description: t("online.description"),
      link: t("online.link"),
      features: ["Video conferences", "Interactive lessons", "Upload materials", "Grading system", "Lesson recordings", "Format support"]
    }
  ]

  return (
    <section id="products" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          {t("crm.title")} & {t("online.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary transition-all group cursor-pointer text-left"
              onClick={() => setActiveProduct(product.id as any)}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              <div className="flex items-center text-primary font-bold">
                View details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={activeProduct !== null} 
        onClose={() => setActiveProduct(null)}
        title={activeProduct === "crm" ? t("crm.title") : t("online.title")}
      >
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            {activeProduct === "crm" ? t("crm.description") : t("online.description")}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(activeProduct === "crm" ? 
              [0,1,2,3,4,5].map(i => t(`crm.features.${i}`)) : 
              [0,1,2,3,4,5].map(i => t(`online.features.${i}`))
            ).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t font-semibold text-primary">
            Visit: <a href={`https://${activeProduct === "crm" ? t("crm.link") : t("online.link")}`} target="_blank" className="hover:underline">
              {activeProduct === "crm" ? t("crm.link") : t("online.link")}
            </a>
          </div>
        </div>
      </Modal>
    </section>
  )
}
