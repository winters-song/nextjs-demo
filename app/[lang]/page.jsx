import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { recommendData, topSubjectDataEn } from '@/mock/home'
import Card from '@/components/common/Card'


export default async function Page({ params: { lang } }) {

  return <>
    {/* <LanguageSwitcher /> */}

    <main className='main'>
      <div className='tags'>
        {topSubjectDataEn.map((item, idx) => 
          <Link className='tag' key={idx} href={item.url}>{item.name}</Link>
        )}
      </div>

      <div className="recommend">
        <div className="carousel">
          <Image src={'/img/home/NationalGeographic.png'} alt="" width={977} height={550} />
        </div>
        {
          recommendData.map((item, idx) => 
            <Card data={item} key={idx}/>
          )
        }
      </div>

    </main>
  </>
}