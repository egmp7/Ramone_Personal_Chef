'use client';

import {useTranslations} from 'next-intl';
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  
  const t = useTranslations('About');
  return (
  <>
    <Link href="/">Back</Link>
    <h1>{t('title')}</h1>
    <Image
    src="/ramone.png" 
    width={280}
    height={180}
    alt="ramone picture"/>

    <p>Test</p>
  </>);
}