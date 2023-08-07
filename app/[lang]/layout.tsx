"use client"

import '../globals.css'
import './layout.css'
import Navbar from '../../components/common/Navbar'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';

import { getDictionary } from '@/dictionaries'


export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'zh-CN' }, { lang: 'nl' }]
}


export default async function Root({ children, params }: {
  children: React.ReactNode;
  params: { lang: string}
}) {
  const dict = await getDictionary(params.lang) // en

  return (
    <html lang={params.lang}>
      <body >
      <Navbar 
      t={dict.navigation}
    />
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
    </body>
    </html>
  )
}