"use client"

interface IProps {
    className?: string
}

export const IconLogo = (props: IProps) =>
    <svg aria-label="next-intl logo" className={props.className} viewBox="0 0 399 399" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path d="M528.8,509q-6.3,6-13.2,11.4a190,190,0,1,1,38-40.2" fill="none" stroke="#5fc3e7" strokeWidth="18" transform="translate(-197.5 -171.5)"></path>
        <circle cx="329.2" cy="339.5" fill="#5fc3e7" r="9"></circle>
        <line fill="none" stroke="#5fc3e7" strokeLinecap="square" strokeWidth="18" x1="40" x2="353.5" y1="105" y2="105.5"></line>
        <ellipse cx="202" cy="199.5" fill="none" rx="93.5" ry="190.5" stroke="#5fc3e7" strokeWidth="18"></ellipse>
        <line fill="none" stroke="#5fc3e7" strokeLinecap="square" strokeWidth="18" x1="49.5" x2="353.5" y1="304.5" y2="304.5"></line>
        <line fill="none" stroke="#5fc3e7" strokeLinecap="square" strokeWidth="18" x1="9" x2="389" y1="206" y2="206"></line>
        </g>
    </svg>

export const IconSeparator = () =>
    <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
        <path d="M22 5L9 28" stroke="var(--accents-2)" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>


export const IconBell = (props: IProps) => 
    <svg className={props.className} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" color="currentColor" width="32" height="32"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>


export const IconEllipsis = (props: IProps) =>
    <svg className={props.className} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" color="currentColor" width="32" height="32"><path d="M192 512c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m255.99999999 0c0 35.2 28.8 64 64.00000001 64.00000001s64-28.8 64.00000001-64.00000001-28.8-64-64.00000001-64.00000001-64 28.8-64.00000001 64.00000001z m256.00000001 0c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z" ></path></svg>