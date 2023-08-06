"use client"

import React from "react"
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import { i18n, i18nLocaleName, Locale } from "@/i18n-config"

const LanguageSwitcher = () => {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"])

  const handleClick = async (lang: Locale) => {
    setCookie('NEXT_LOCALE', lang, { 
      maxAge: 3600 * 1000 * 24 * 365 * 10
    })

    router.refresh()
  }

  return (
    <div className=" flex flex-col justify-stretch gap-2  w-48 p-4 shadow-md bg-white">
      {
        i18n.locales.map((item: Locale , idx) => 
        <button className="btn text-left hover:text-green-500" key={idx} onClick={() => handleClick(item)}>
          {i18nLocaleName[item]}
        </button>
      )
      }
      
    </div>
  )
};

export default LanguageSwitcher;
