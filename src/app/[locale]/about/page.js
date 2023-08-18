'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import Footer from '@/src/components/Footer';
import Nav from '@/src/components/Nav';

export default function Page() {

  const t = useTranslations('About');

  return (
    <>
      <Nav />
      <Image
        className="mx-auto my-4 rounded-2xl"
        src="/ramone.png"
        width={360}
        height={180}
        alt="ramone picture" />

      <h1 className="text-3xl font-bold text-center">{t('title')}</h1>
      {t.rich('about', {
        paragraph: (p) => <p className="pt-2 px-2 text-justify sm:mx-10 md:mx-20">{p}</p>,
        italic: (i) => <em>{i}</em>
      })}
      <Footer />
    </>);
}