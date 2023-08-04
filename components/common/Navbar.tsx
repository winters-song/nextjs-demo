"use client"

import React from "react"
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Navbar = ({t}: {t: any}) => {
  const pathname = usePathname()

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

  return (
    <header className="sci-navbar" onClick={() => console.log(t)}>
      <nav className="nav">
        <div className="links">
          <a className="logo" href="/">
            <svg aria-label="next-intl logo" className="h-8" viewBox="0 0 399 399" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M528.8,509q-6.3,6-13.2,11.4a190,190,0,1,1,38-40.2" fill="none" stroke="#5fc3e7" strokeWidth="18" transform="translate(-197.5 -171.5)"></path>
                <circle cx="329.2" cy="339.5" fill="#5fc3e7" r="9"></circle>
                <line fill="none" stroke="#5fc3e7" strokeLinecap="square" strokeWidth="18" x1="40" x2="353.5" y1="105" y2="105.5"></line>
                <ellipse cx="202" cy="199.5" fill="none" rx="93.5" ry="190.5" stroke="#5fc3e7" strokeWidth="18"></ellipse>
                <line fill="none" stroke="#5fc3e7" strokeLinecap="square" strokeWidth="18" x1="49.5" x2="353.5" y1="304.5" y2="304.5"></line>
                <line fill="none" stroke="#5fc3e7" strokeLinecap="square" strokeWidth="18" x1="9" x2="389" y1="206" y2="206"></line>
              </g>
            </svg>
            <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
              <path d="M22 5L9 28" stroke="var(--accents-2)" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            <span className="font-bold font-serif text-2xl">
              SCI
            </span>
          </a>

          {navLinks.map((item, idx) => {
            const active = pathname === item.url
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

          <button className=" shrink-0">Sign in</button>
          <button className=" shrink-0 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-green-500 text-white hover:bg-green-600 ">Get Started</button>
        </div>


        {/* <a className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200" aria-current="false" href="/docs/getting-started">
          <span className="nx-absolute nx-inset-x-0 nx-text-center">Docs</span>
          <span className="nx-invisible nx-font-medium">Docs</span></a>
        <a className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-font-medium nx-subpixel-antialiased" aria-current="true" href="/examples/app-router">
          <span className="nx-absolute nx-inset-x-0 nx-text-center">Examples</span>
          <span className="nx-invisible nx-font-medium">Examples</span>
        </a>
        <a className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200" aria-current="false" href="/blog">
          <span className="nx-absolute nx-inset-x-0 nx-text-center">Blog</span>
          <span className="nx-invisible nx-font-medium">Blog</span>
        </a>
        <div className="nextra-search nx-relative md:nx-w-64 nx-hidden md:nx-inline-block mx-min-w-[200px]">
          <div className="nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300">
            <input spellCheck="false" className="nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current" type="search" placeholder="Search documentation…" value="" />
            <kbd className="nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5 nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500 nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50 contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current nx-items-center nx-gap-1 nx-pointer-events-none nx-hidden sm:nx-flex nx-opacity-100">
              <span className="nx-text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
        <a href="https://github.com/amannn/next-intl" target="_blank" rel="noreferrer" className="nx-p-2 nx-text-current">
          <svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
            <title>GitHub</title>
            <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
          </svg>
          <span className="nx-sr-only">GitHub</span>
          <span className="nx-sr-only"> (opens in a new tab)</span>
        </a>
        <button type="button" aria-label="Menu" className="nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden">
          <svg fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" className="">
            <g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16"></path></g>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"></path>
            <g><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path></g>
          </svg>
        </button> */}
      </nav>
    </header>
  )
};

export default Navbar;
