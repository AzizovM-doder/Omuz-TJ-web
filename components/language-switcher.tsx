"use client"

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, routing } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error -- pathname and params are compatible
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <div className="flex gap-1 bg-muted/50 p-1 rounded-lg">
      {routing.locales.map((cur: string) => (
        <Button
          key={cur}
          variant={locale === cur ? "default" : "ghost"}
          size="sm"
          onClick={() => onSelectChange(cur)}
          className={cn(
            "w-9 h-7 text-xs font-medium transition-all",
            locale === cur && "bg-sky-500 text-white hover:bg-sky-600 shadow-sm"
          )}
        >
          {cur.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
