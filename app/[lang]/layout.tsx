import '../globals.css'
import './layout.css'
import Navbar from '../../components/common/Navbar'

import { getDictionary } from '@/dictionaries'
import Providers from '@/components/Providers'


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
      <body className='bg-slate-50 dark:bg-slate-900' >
      <Providers >
        <Navbar 
          t={dict.navigation}
        />
        {children}
      </Providers>
    </body>
    </html>
  )
}