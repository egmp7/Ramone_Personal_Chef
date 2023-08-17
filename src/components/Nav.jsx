import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSwicher';
import styles from './nav.module.css';
import Image from 'next/image';

export default function Nav() {
  const t = useTranslations('Index')
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.animation}>
            {/* World */}
            <Image
              className={styles.world}
              src="/world.gif"
              width={40}
              height={40}
              alt="Ramone logo" />

            {/* Cooking Plate */}
            <Image
              className={styles.cookingPlate}
              src="/cooking_plate.svg"
              width={100}
              height={50}
              alt="Ramone logo" />
          </div>
        </Link>
        <div className={styles.space}></div>
        <Link className={styles.link} href="/about">{t('aboutButton')}</Link>
        <Link className={styles.link} href="/test">{t('menuButton')}</Link>
        <Link className={styles.link} href="/test">{t('ratesButton')}</Link>
        <Link className={styles.link} href="/test">{t('contactButton')}</Link>
        <LocaleSwitcher />
      </div>
    </>
  )
}