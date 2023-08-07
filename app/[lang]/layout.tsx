"use client"

import '../globals.css'
import './layout.css'
import Navbar from '../../components/common/Navbar'
import { Provider as ReduxProvider } from 'react-redux';
import ThemeProvider from "@/theme/ThemeProvider";
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
      <body className='bg-slate-50 dark:bg-[#0d1117]' >
      <ReduxProvider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar 
            t={dict.navigation}
          />
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </body>
    </html>
  )
}