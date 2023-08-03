import { i18n } from '@/i18n-config';
import '../globals.css'
import { Inter } from 'next/font/google'

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'zh-CN' }, { lang: 'nl' }]
}

const inter = Inter({ subsets: ['latin'] })

export default function Root({ children, params }: {
  children: React.ReactNode;
  params: { lang: string}
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}