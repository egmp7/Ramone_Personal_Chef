'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/src/components/Footer';
import LocaleSwitcher from '@/src/components/LocaleSwicher';
import Nav from '@/src/components/Nav';
import Image from 'next/image';

export default function Index() {

  const t = useTranslations('Index');

  return (
    <>
      <main>
        <h1>Ramone Personal Chef</h1>

        <LocaleSwitcher />

        <Image
          style={{ borderRadius: '100%' }}
          src="/giphy.gif"
          width={180}
          height={180}
          alt="Ramone logo" />

        <Image
          src="/ramone.png"
          width={280}
          height={180}
          alt="ramone picture" />

        <p>{t('slogan')}</p>
        <p>{t('intro')}</p>
        
      </main>
      <Nav />
      <Footer />
    </>
  )
}
