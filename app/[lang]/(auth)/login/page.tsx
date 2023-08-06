
import React from "react"

const page = (props: any) => {
  return (
    <div className="bg-white p-16 shadow-sm rounded-lg">
    <h2 className="text-left text-3xl text-secondary font-bold tracking-tight mb-4">Login to your account</h2>
    
    <form className="space-y-6" method="POST" action="/signin?{{query}}" >
    <input type="hidden" name="authKey" value="{{authKey}}" />

    <div className="flex flex-col space-y-2">
        <label htmlFor="email-address" className="text-label text-xs">Email address*</label>
        <input id="email-address" name="username" type="email" autoComplete="email" required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-label text-xs">Password*</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>

    <div className="flex items-center justify-between">
        <div className="flex items-center">
        <input id="remember-me" name="rememberMe" type="checkbox" className="checked:bg-primary" />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 select-none">Remember me</label>
        </div>

        <a href="/password/reset" className="font-medium text-sm text-secondary hover:text-primary">Forgot your password?</a>
    </div>
    <div>
        <button type="submit" className="relative flex w-full justify-center rounded-md border border-0 shadow-sm px-5 py-2.5  text-base font-bold text-white bg-primary-600 hover:bg-primary-700" id="submit">
        Login
        </button>

        <div className="mt-4 flex flex-row items-center justify-between">
        <p><a href="/signup" className="text-secondary hover:text-primary">Sign up Now!</a></p>
        </div>
    </div>
    </form>
</div>
  )
};

export default page;
