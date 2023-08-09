"use client"

import VideoPlayer from '@/components/video/VideoPlayer'
import { useEffect, useState } from 'react'
import './index.css'
import Player from "video.js/dist/types/player";

export default function Page({ params }: { params: { slug: string } }) {

  const [videoOptions, setVideoOptions] = useState<any>()
  

  const onVideoReady = (player: Player) => {
    window.player = player
    player.play();
  }

  useEffect(() => {
    const data = {
      videoUrl : 'https://dpv.videocc.net/3aabb46692/f/3aabb466927cf470d5eedd884932eeff_3.mp4'
    }
    const source = {
      src: data.videoUrl,
      type: ''
    }
    if(data.videoUrl && data.videoUrl.indexOf('.mp4')>=0){
      source.type = 'video/mp4'
    }else{
      source.type =  'application/x-mpegURL'
    }
    const videoOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      width: '100%',
      height: '100%',
      sources: [source],
      // inactivityTimeout: 2000,
      playbackRates: [0.8, 1, 1.25, 1.5, 2],
      controlBar: {
        remainingTimeDisplay: {
          displayNegative: false
        },
        currentTimeDisplay: true
      },

    }

    setVideoOptions(videoOptions)
  }, [])

  return (
    <main className="flex flex-row max-w-7xl my-4 mx-auto justify-center">
      <div className="w-[826px] mr-5">

        <div className="w-[826px] h-[471px] relative">
          { videoOptions && <VideoPlayer options={videoOptions} onReady={onVideoReady} />}
        </div>
        <h1 className=" text-xl mb-4">深海迷航 爆肝7378块矿石，打造生命之树下最美基地</h1>
      </div>

      <div className=" w-[350px]">
        <h2>视频列表</h2>
      </div>
    </main>
  )
}