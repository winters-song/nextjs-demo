import Link from 'next/link'
import { recommendData } from '@/mock/home'
import Card from '@/components/common/Card'
import Carousel from '@/components/Carousel'
import HomeService from '@/api/HomeService'
import {IconLive, IconCourse, IconGraduate} from '@/components/common/Icons'
import { getDictionary } from '@/dictionaries'

export default async function Page({ params: { lang } }) {

  const dict = await getDictionary(lang)
  const t = dict.home
  const topSubjects = HomeService.getTopSubjects(lang)
  const sliderData = HomeService.getSliderData()

  return (
    <main className='main bg-white'>
      <div className='tags'>
        {topSubjects.map((item, idx) => 
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
              <Carousel data={sliderData}/>
            </div>
          </div>
        </div>
        
        {
          recommendData.map((item, idx) => 
            <Card data={item} key={idx} className={`${idx > 3 ? 'hidden 2xl:block': ''}`}/>
          )
        }
      </div>

      <div className="card-block" >
        <h3 className="title">
          <IconLive className=' fill-red-500' /> {t.live}
        </h3>

        <div className="list">
          {
            recommendData.map((item, idx) => 
              <Card data={item} key={idx}/>
            )
          }
        </div>
      </div>

      <div className="card-block" >
        <h3 className="title">
          <IconCourse className='w-6 fill-red-500' /> {t.hot_courses}
        </h3>

        <div className="list">
          {
            recommendData.map((item, idx) => 
              <Card data={item} key={idx}/>
            )
          }
        </div>
      </div>

      <div className="card-block" >
        <h3 className="title">
          <IconGraduate className='w-7 fill-red-500' /> {t.hot_subjects}
        </h3>

        <div className="list">
          {
            recommendData.map((item, idx) => 
              <Card data={item} key={idx}/>
            )
          }
        </div>
      </div>
    </main>
  )
}