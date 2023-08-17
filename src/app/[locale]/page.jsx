'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/src/components/Footer';
import LocaleSwitcher from '@/src/components/LocaleSwicher';
import Nav from '@/src/components/Nav';
import Image from 'next/image';
import CookingPlateWorld from '@/src/components/CookingPlateWorld';

export default function Index() {

  const t = useTranslations('Index');

  return (
    <>
      <main>
        <h1>Ramone Personal Chef</h1>

        <LocaleSwitcher />

        <CookingPlateWorld />

        <p>{t('slogan')}</p>
        <p>{t('intro')}</p>

      </main>
      <Nav />
      <Footer />
    </>
  )
}
