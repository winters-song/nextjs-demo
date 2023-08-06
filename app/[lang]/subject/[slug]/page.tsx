export default function Page({ params }: { params: { slug: string } }) {
  return <div>Subject: {params.slug}</div>
}