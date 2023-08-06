import Link from 'next/link'
import Image from 'next/image'
import { recommendData, topSubjectDataEn } from '@/mock/home'
import Card from '@/components/common/Card'
import Carousel from '@/components/Carousel'

export default async function Page({ params: { lang } }) {

  return (
    <main className='main'>
      <div className='tags'>
        {topSubjectDataEn.map((item, idx) => 
          <Link className='tag' key={idx} href={item.url}>{item.name}</Link>
        )}
      </div>

      <div className="recommend">
        <div className="recommended-swipe">
          <div className="recommended-swipe-core">
            <div className="swipe-shim">
              <div className="video-card">
                <div className="thumb" />
                <div className="info" />
              </div>
              <div className="video-card">
                <div className="thumb" />
                <div className="info" />
              </div>
              <div className="shim-card" />
              <div className="shim-card" />
            </div>
            <div className="swipe-body">
              <Carousel />
            </div>
          </div>
        {/* <div className="carousel">
          <Image src={'/img/home/NationalGeographic.png'} alt="" width={977} height={550} />
        </div> */}
        </div>
        
        {
          recommendData.map((item, idx) => 
            <Card data={item} key={idx}/>
          )
        }
      </div>
    </main>
  )
}