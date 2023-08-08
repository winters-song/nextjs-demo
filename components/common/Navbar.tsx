"use client"

import React, { useState } from "react"
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { 
  IconHistory, 
  IconEllipsis, 
  IconLogo, 
  IconSeparator, 
  IconEnvelope,
  IconStar
} from "./Icons";
import { useTheme } from "next-themes";
import SettingDialog from "./SettingDialog";



const Navbar = ({t}: {t: any}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { theme, setTheme } = useTheme();

  const [settingVisible, setSettingVisible] = useState(false)

  // const inputRef = useRef<HTMLInputElement>(null)

  const navLinks = [{
    name: t.home,
    url: '/'
  },{
    name: t.subject,
    url: '/subject'
  },{
    name: t.live,
    url: '/live'
  },{
    name: t.job,
    url: '/job'
  }]


  // const focusSearch = (e: KeyboardEvent) => {
  //   if (e.metaKey && e.key === "k") {
  //     inputRef.current?.focus()
  //   }
  // }

  const goLogin =() => {

    if(window){
      location.href = 'http://localhost:8000/signin?redirect_uri='+ encodeURIComponent(location.href)
    }
    // if(pathname === '/'){
    //   router.push( '/login');
    // }else {
    //   const from = encodeURIComponent(`${pathname}?${searchParams.toString()}`)
    //   router.push( `/login?from=${from}`);
    // }
  }

  // useEffect(() => {
    
  //   window.addEventListener("keydown", focusSearch);

  //   return () => {
  //     window.removeEventListener("keydown", focusSearch);
  //   }
  
  // }, [inputRef.current])


  return (
    <header className="sci-navbar">
      <nav className="nav">
        <div className="links">
          <a className="logo" href="/">
            <IconLogo className="h-8" />
            <IconSeparator />
            <span className="font-bold font-serif text-2xl">
              SCI
            </span>
          </a>

          {navLinks.map((item, idx) => {
            const active = item.url === '/' ? pathname === item.url : pathname.startsWith(item.url)
            return <Link className={`link ${active? 'active': ''}`} key={idx} href={item.url} >{ item.name }</Link>
          })}
        </div>

        <div className="flex flex-row gap-4">
          <div className="search">
            <div className="input-box">
              <input className="input" type="search" spellCheck={false} placeholder={t.search_placeholder}/>
              <kbd className="kbd">
                <span className="nx-text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <button className="nav-btn" >
              <IconEnvelope className="w-6 h-6" />
            </button>

            <button className="nav-btn" >
              <IconHistory className="w-6 h-6" />
            </button>

            <button className="nav-btn" >
              <IconStar className="w-6 h-6 relative top-[-1px]" />
            </button> 

            <button className={`nav-btn setting-btn ${settingVisible ? 'active': ''}`} onClick={() => setSettingVisible(!settingVisible)}>
              <IconEllipsis className="w-6 h-6" />

              {/* <div className="picker-menu absolute top-8 left-0">
                <LanguageSwitcher />
              </div> */}
            </button>

            {/* <button className="relative flex items-center justify-center w-10 picker shrink-0 fill-gray-500 hover:fill-gray-700" title={t.notification}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              theme
            </button> */}

          </div>

          <button onClick={goLogin} className="shrink-0 min-w-[4rem] rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">{t.login}</button>
          <button className=" shrink-0 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-green-500 text-white hover:bg-green-600 ">
            {t.get_started}
          </button>
        </div>

        <SettingDialog t={t} visible={settingVisible} setVisible={setSettingVisible}/>
      </nav>
    </header>
  )
};

export default Navbar;
