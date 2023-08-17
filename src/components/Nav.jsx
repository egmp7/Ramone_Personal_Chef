import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSwicher';
import Image from 'next/image';

export default function Nav() {
  const t = useTranslations('Nav')
  return (
    <>
      <nav className = "flex items-center">
        <Link href="/" className='relative mt-2'>
          {/* World */}
          <Image
            className="rounded-full absolute top-2 left-4"
            src="/world.gif"
            width={24}
            height={24}
            alt="Ramone logo" />

          {/* Cooking Plate */}
          <Image
            src="/cooking_plate.svg"
            width={70}
            height={30}
            alt="Ramone logo" />

        </Link>
        <div className="flex-grow"></div>
        <Link className="pr-4 hover:underline" href="/about">{t('about')}</Link>
        <Link className="pr-4 hover:underline" href="/test">{t('menu')}</Link>
        <Link className="pr-4 hover:underline" href="/test">{t('rates')}</Link>
        <Link className="pr-4 hover:underline" href="/test">{t('contact')}</Link>
        <LocaleSwitcher/>
      </nav>
    </>
  )
}