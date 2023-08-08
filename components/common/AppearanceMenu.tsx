import React, { useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import { IconBackArrow, IconCheck } from "./Icons";
import { ILang } from "@/models/common";
import { useTheme } from "next-themes";



interface IProps extends ILang {
  onClose: (e: React.MouseEvent) => void
}

const AppearanceMenu = (props : IProps) => {
  const {t, onClose} = props
  const router = useRouter();
  const {theme, setTheme} = useTheme()


  const list = [{
    id: 'light',
    name: 'Light'
  }, 
  // {
  //   id: 'nl',
  //   name: 'Nederlands'
  // }, 
  {
    id: 'dark',
    name: 'Dark'
  }]

  const handleClick = async (value: string) => {
    setTheme(value)
  }

  return (
    <>
      <div className="header">
        <div className="back-btn" onClick={onClose}>
          <IconBackArrow className="w-4" />
        </div>
        {t.appearance}
      </div>
      <div className="scroll">
        <div className="inner">
          {
            list.map((item, idx) =>
              <div className="menu-item relative" key={idx} onClick={() => handleClick(item.id)}>
                <div className="menu-item-label checkable">
                  {
                    theme === item.id && <IconCheck className={`absolute svg checked left-5 top-3`} />
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

export default AppearanceMenu;
