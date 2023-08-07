export default async function Layout({ children, params }: {
  children: React.ReactNode;
  params: { lang: string}
}) {

  return (
    <main className="flex min-h-[calc(100vh-72px)] justify-center items-center bg-gray-100">
      {children}
    </main>
  )
}