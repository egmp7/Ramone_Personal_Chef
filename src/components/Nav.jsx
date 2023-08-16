import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <Link href="/about">{t('aboutButton')}</Link>
      <Link href="/test">{t('menuButton')}</Link>
      <Link href="/test">{t('ratesButton')}</Link>
      <Link href="/test">{t('contactButton')}</Link>
    </>
  )
}