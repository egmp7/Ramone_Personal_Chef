'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/src/components/Footer';
import Nav from '@/src/components/Nav';
import IndexVisuals from '@/src/components/IndexVisuals';
import styles from './home.module.css'

export default function Index() {

  const t = useTranslations('Index');

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrap}>
          <Nav />
          <main className={styles.main}>
            <IndexVisuals />
            <h1 className= "text-3xl font-bold underline">Ramone Personal Chef</h1>
            <p className={styles.slogan}>{t('slogan')}</p>
            <p className={styles.intro}>{t('intro')}</p>
          </main>
        </div>
        <div className={styles.footer}>
          <Footer  />
        </div>
      </div>
    </>
  )
}
