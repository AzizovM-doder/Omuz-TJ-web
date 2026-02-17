"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProductSelectionCardProps {
  title: string;
  description: string;
  link: string;
  type: "online" | "crm";
  buttonText: string;
}

export const ProductSelectionCard = ({
  title,
  description,
  link,
  type,
  buttonText,
}: ProductSelectionCardProps) => {
  const Icon = type === "online" ? BookOpen : LayoutDashboard;
  
  // Custom gradients for each card type
  const bgGradient = type === "online" 
    ? "bg-gradient-to-br from-sky-50/50 via-white to-transparent dark:from-sky-500/10 dark:via-blue-500/5 dark:to-transparent" 
    : "bg-gradient-to-br from-purple-50/50 via-white to-transparent dark:from-purple-500/10 dark:via-pink-500/5 dark:to-transparent";

  const hoverBorder = type === "online"
    ? "group-hover:border-sky-200 dark:group-hover:border-sky-500/50"
    : "group-hover:border-purple-200 dark:group-hover:border-purple-500/50";
    
  const iconColor = type === "online" ? "text-sky-600 dark:text-sky-500" : "text-purple-600 dark:text-purple-500";
  const glowColor = type === "online" ? "group-hover:shadow-sky-200/50 dark:group-hover:shadow-sky-500/20" : "group-hover:shadow-purple-200/50 dark:group-hover:shadow-purple-500/20";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className={`group relative h-full overflow-hidden border-border bg-card/60 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${glowColor} ${hoverBorder} ${bgGradient}`}>
        
        {/* Decorative background blob */}
        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10 dark:group-hover:opacity-10 opacity-0 group-hover:opacity-5 ${type === 'online' ? 'bg-sky-500' : 'bg-purple-500'}`} />

        <CardHeader>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-background/80 dark:bg-white/10 backdrop-blur-md border border-border/50 dark:border-white/20 shadow-sm relative`}>
             <div className={`absolute inset-0 bg-gradient-to-br ${type === 'online' ? 'from-sky-100/50 dark:from-sky-500/20' : 'from-purple-100/50 dark:from-purple-500/20'} to-transparent rounded-2xl`} />
            <Icon className={`w-7 h-7 ${iconColor} relative z-10`} />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">{title}</CardTitle>
          <CardDescription className="text-lg mt-2 text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
           {/* Can add simplified feature bullets here if desired */}
        </CardContent>
        <CardFooter className="pt-0">
          <Button asChild className={`w-full h-12 text-base rounded-xl group-hover:scale-[1.02] transition-transform duration-300 ${type === 'online' ? 'bg-sky-600 hover:bg-sky-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>
            <Link href={link}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
