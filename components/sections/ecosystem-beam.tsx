"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Globe, BarChart3 } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function EcosystemBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("hub"); // Reusing hub translations or we can add new ones

  return (
    <section className="py-12 bg-transparent overflow-hidden relative flex w-full items-center justify-center">
      <div
        className="relative flex w-full max-w-5xl items-center justify-center overflow-hidden p-4"
        ref={containerRef}
      >
        <div className="flex h-full w-full flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Online Omuz (Left) */}
          <div className="flex flex-col items-center gap-2 order-2 md:order-1">
            <Circle ref={div1Ref} className="h-16 w-16 md:h-20 md:w-20 border-sky-100 dark:border-sky-900 bg-white dark:bg-slate-950">
               <Globe className="h-6 w-6 md:h-8 md:w-8 text-sky-600" />
            </Circle>
            <span className="text-sm font-bold text-center">Online Omuz</span>
          </div>

          {/* Omuz Center */}
          <div className="flex flex-col items-center justify-center order-1 md:order-2 z-20">
            <Circle ref={div3Ref} className="h-24 w-24 md:h-32 md:w-32 border-none bg-transparent shadow-none p-0">
               <div className="relative h-full w-full flex items-center justify-center bg-white dark:bg-black rounded-full border shadow-2xl p-4">
                  <Image 
                    src="/omuz.svg" 
                    alt="Omuz" 
                    width={80} 
                    height={80} 
                    className="w-full h-auto dark:invert"
                  />
               </div>
            </Circle>
          </div>

          {/* CRM (Right) */}
          <div className="flex flex-col items-center gap-2 order-3">
             <Circle ref={div2Ref} className="h-16 w-16 md:h-20 md:w-20 border-purple-100 dark:border-purple-900 bg-white dark:bg-slate-950">
                 <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
             </Circle>
             <span className="text-sm font-bold text-center">Omuz CRM</span>
           </div>

        </div>

        {/* Beam 1: Omuz -> Online */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div1Ref}
          curvature={-20}
          duration={3}
          gradientStartColor="#0ea5e9" // sky-500
          gradientStopColor="#38bdf8" // sky-400
        />

        {/* Beam 2: Omuz -> CRM */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div2Ref}
          curvature={-20}
          duration={3}
          reverse
          gradientStartColor="#9333ea" // purple-600
          gradientStopColor="#a855f7" // purple-500
        />
      </div>
    </section>
  );
}
