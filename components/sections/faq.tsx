"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const t = useTranslations("faq")
  
  const faqs = [
    {
      q: "How does the CRM help my center?",
      a: "Our CRM automates student tracking, scheduling, and finance, allowing you to focus on education rather than administration."
    },
    {
      q: "Is the online platform secure?",
      a: "Yes, we use industry-standard encryption and secure video hosting for all lessons and materials."
    },
    {
      q: "Can I use Omuz.tj on mobile?",
      a: "Absolutely! Our platform is fully responsive and works beautifully on any device."
    },
    {
      q: "Do you offer support in Tajik?",
      a: "Yes, our support team is available 24/7 and speaks Tajik, Russian, and English."
    },
    {
      q: "How fast can we start?",
      a: "Setup usually takes less than 24 hours. You can start importing your data immediately."
    },
    {
      q: "Is there a free trial?",
      a: "We offer a 14-day free trial so you can experience all the features before committing."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          {t("title")}
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
