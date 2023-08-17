import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Nav() {
  const t = useTranslations('Index')
  return (
    <>
      <Link href="/about">{t('aboutButton')}</Link>
      <Link href="/test">{t('menuButton')}</Link>
      <Link href="/test">{t('ratesButton')}</Link>
      <Link href="/test">{t('contactButton')}</Link>
    </>
  )
}