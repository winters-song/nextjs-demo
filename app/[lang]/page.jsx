import { getDictionary } from '@/dictionaries'
import Link from 'next/link'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return <>
    <Link href={`/about`}>{dict.products.cart}</Link> // Add to Cart
    <LanguageSwitcher />
  </>
}