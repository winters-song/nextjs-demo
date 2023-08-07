import React from "react"
import { getDictionary } from '@/dictionaries'
import LoginModal from "@/components/auth/LoginModal";

interface IProps {
  params: {
    lang: string
  }
}

export default async function ({ params: { lang } } : IProps) {

  const dict = await getDictionary(lang)
  const t = dict.page_login

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {t.page_title}
        </h1>
        <LoginModal t={t}/>
      </div>
    </div>
  )
};
