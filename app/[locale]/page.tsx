import { setRequestLocale, getTranslations } from 'next-intl/server';
import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductSelectionCard } from "@/components/hub/ProductSelectionCard";
import { Footer } from "@/components/footer";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'hub'});

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSlider />
      
      <section className="container px-4 md:px-6 py-12 md:py-24 mx-auto grow">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
          <ProductSelectionCard 
            title={t('online.title')}
            description={t('online.desc')}
            link={`/${locale}/products/online`}
            type="online"
            buttonText={t('online.btn')}
          />
          <ProductSelectionCard 
            title={t('crm.title')}
            description={t('crm.desc')}
            link={`/${locale}/products/crm`}
            type="crm"
            buttonText={t('crm.btn')}
          />
        </div>
      </section>

      <AboutSection />
      
      <FeaturesSection />

      <Footer />
    </div>
  );
}

