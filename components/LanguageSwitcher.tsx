"use client"

import React from "react"
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import { i18n, Locale } from "@/i18n-config"

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
    <div className="flex flex-row gap-2">
      {
        i18n.locales.map((item , idx) => 
        <button className="btn" key={idx} onClick={() => handleClick(item)}>
          {item}
        </button>
      )
      }
      
    </div>
  )
};

export default LanguageSwitcher;
