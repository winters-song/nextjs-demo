import React, { useEffect, useRef } from "react"
import { IconArrowRight, IconTranslate, IconMoon } from "./Icons";


interface IProps {
  t: any,
  visible: boolean,
  setVisible: (v: boolean) => void
}

/* 
  Used for unlogin User:
  Appearance, Language
*/
const SettingDialog = (props: IProps) => {

  const {t, visible, setVisible} = props
  const domRef = useRef<HTMLDivElement>(null)

  const visibleRef = useRef(visible)


  const clickHandler = (e : Event) => {
    if(!domRef.current){
      return
    }

    if(visible && !(domRef.current === e.target || domRef.current.contains(e.target as Node))){
      setVisible(false)
    }
  }


  useEffect(() => {
    visibleRef.current = visible

    if(visible){
      document.addEventListener('click', clickHandler)
    }
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  },[visible])

  return (
    visible ? <div className="sci-menu right-6" ref={domRef}>
      <div className="menu-item">
        <div className="menu-item-label">
          <IconMoon className="svg" /> <span>{t.appearance}</span>
        </div>
        <IconArrowRight className="arrow" />
      </div>
      <div className="menu-item">
        <div className="menu-item-label">
          <IconTranslate className="svg" /> <span>{t.language}</span>
        </div>
        <IconArrowRight className="arrow" />
      </div>
    </div> : <></>
  )
};

export default React.memo(SettingDialog);
