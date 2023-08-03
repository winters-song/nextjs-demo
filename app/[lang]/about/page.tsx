import { getDictionary } from '@/dictionaries'

interface IParams {
  params: {
    lang: string
  }
}

export default async function Page({ params: { lang } }: IParams) {
  const dict = await getDictionary(lang) // en
  return <h1>{dict.menu.about}</h1> // Add to Cart
}