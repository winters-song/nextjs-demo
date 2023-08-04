import '../globals.css'
import './layout.css'

import { Inter } from 'next/font/google'
import Navbar from '../../components/common/Navbar'

import { getDictionary } from '@/dictionaries'


export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'zh-CN' }, { lang: 'nl' }]
}

const inter = Inter({ subsets: ['latin'] })

export default async function Root({ children, params }: {
  children: React.ReactNode;
  params: { lang: string}
}) {
  const dict = await getDictionary(params.lang) // en


  return (
    <html lang={params.lang}>
      <body className={inter.className}>
      <Navbar 
      t={dict.navigation}
    />
    {children}</body>
    </html>
  )
}