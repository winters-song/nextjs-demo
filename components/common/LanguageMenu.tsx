import React, { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import { IconBackArrow, IconCheck } from "./Icons";
import { ILang } from "@/models/common";


const list = [{
  id: 'en-US',
  name: 'English (US)'
}, 
// {
//   id: 'nl',
//   name: 'Nederlands'
// }, 
{
  id: 'zh-CN',
  name: '中文 (简体)'
}]

interface IProps extends ILang {
  onClose: (e: React.MouseEvent) => void
}

const LanguageMenu = (props : IProps) => {
  const {t, onClose} = props
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"])

  const handleClick = async (lang: string) => {
    setCookie('NEXT_LOCALE', lang, {
      maxAge: 3600 * 1000 * 24 * 365 * 10
    })

    router.refresh()
  }

  return (
    <>
      <div className="header">
        <div className="back-btn" onClick={onClose}>
          <IconBackArrow className="w-4 " />
        </div>
        {t.choose_language}
      </div>
      <div className="scroll">
        <div className="inner">
          {
            list.map((item, idx) =>
              <div className="menu-item relative" key={idx} onClick={() => handleClick(item.id)}>
                <div className="menu-item-label checkable">
                  {
                    cookie['NEXT_LOCALE'] === item.id && <IconCheck className={`absolute svg checked left-5 top-3`} />
                  }
                  <span>{item.name}</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
};

export default LanguageMenu;
