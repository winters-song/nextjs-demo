"use client"

import React, { FormEvent, useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation';
import {useDispatch} from "react-redux";
import {updateUser } from "@/store/reducers/auth";
import { userData } from "@/mock/auth";

interface IProps {
  t: any
}

export default function ({ t } : IProps) {
    const dispatch = useDispatch()

    const router = useRouter();
    const searchParams = useSearchParams()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  
    const onSubmit = (e: FormEvent) => {
  
      e.preventDefault();
  
      console.log(e)
  
      localStorage.setItem('token', "someValue")
  
      const from = searchParams.get('from')
      const url = from ? decodeURIComponent(from): '/'
  
      dispatch(updateUser(userData))
  
      router.push(url);
    }

  return (
    <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {t.your_email}
        </label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required 
            value={email}
            onChange={(e) => {
            setEmail(e.target.value)
            }}
        />
        </div>
        <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {t.password}
        </label>
        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
            value={password}
            minLength={6}
            onChange={(e) => {
            setPassword(e.target.value)
            }}
        />
        </div>
        <div className="flex items-center justify-between">
        <div className="flex items-start">
            <div className="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">{t.remember_me}</label>
            </div>
        </div>
        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">{t.forgot_password}</a>
        </div>
        <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            {t.login}
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {t.no_account} 
            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                {t.sign_up}
            </a>
        </p>
    </form>
  )
};
