import React, { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"


const list = [{
  id: 'en-US',
  name: 'English (US)'
},{
  id: 'nl',
  name: 'Nederlands'
},{
  id: 'zh-CN',
  name: '中文 (简体)'
}]


const LanguageSwitcher = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"])
  const [mounted, setMounted] = useState(false);

  const handleClick = async (lang: string) => {
    setCookie('NEXT_LOCALE', lang, { 
      maxAge: 3600 * 1000 * 24 * 365 * 10
    })

    router.refresh()
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && <div className=" flex flex-col justify-stretch gap-2  w-48 p-4 shadow-md bg-white">
      {
        list.map((item , idx) => 
        <div className="btn text-left hover:text-green-500" key={idx} onClick={() => handleClick(item.id)}>
          {item.id}
        </div>
      )
      }
    </div>
  )
};

export default LanguageSwitcher;
