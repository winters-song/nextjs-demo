export async function generateStaticParams() {
  return [{ lang: 'en=' }, { lang: 'nl' }]
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
    <body>{children}</body>
    </html>
  )
}