import React from "react"
import { ICard } from "@/model/home";
import Link from "next/link";
import Image from "next/image"

interface IProps {
  data: ICard
}
const Card = (props: IProps) => {

  const { data } = props

  return (
    <div className="sci-card">
      <Link className="relative" href={data.url} >
        <Image className="cover" src={data.img} alt="" width={672} height={378} />

        <div className="absolute inset-0 z-10">

          <div className="stats">
          <div className="flex flex-row items-center gap-1"> 
            <Image className="" alt="" src="/img/icon/play.svg" width={18} height={18} /> 1.7万
          </div>
          <div>02:36</div>

          </div>
        </div>

      </Link>
        
      <div className="flex flex-row gap-3">
        <Link className=" shrink-0" href={`/@user-${data.userId}`}>
          <Image className=" w-9 h-9 rounded-full" src={data.avatar} alt="" title={data.userName} width={100} height={100} />
        </Link>
        <div className="flex flex-col">
          <Link href={data.url} >
            <div className="font-medium leading-5 line-clamp-2 mb-1" title={data.title}>{data.title}</div>
          </Link>
          <Link className=" shrink-0" href={`/@user-${data.userId}`}>
            <div className=" text-sm text-gray-500 hover:text-gray-700">{data.userName} · 4个月前</div>
          </Link>
        </div>
      </div>
      
    </div>
  )
};

export default Card;
