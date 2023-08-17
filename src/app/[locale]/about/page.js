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
        width={280}
        height={180}
        alt="ramone picture" />

      {t.rich('about', {
        paragraph: (p) => <p className="pt-2 mx-20">{p}</p>,
        italic: (i) => <em>{i}</em>
      })}
      <Footer />
    </>);
}