import React, { useEffect, useRef, useState } from "react"
import { IconArrowRight, IconTranslate, IconMoon } from "./Icons";
import LanguageMenu from "./LanguageMenu";
import AppearanceMenu from "./AppearanceMenu";


interface IProps {
  t: any,
  visible: boolean,
  setVisible: (v: boolean) => void
}

enum STATE {
  ROOT,
  APPEARANCE,
  LANGUAGE
}


/* 
  Used for unlogin User:
  Appearance, Language
*/
const SettingDialog = (props: IProps) => {

  const {t, visible, setVisible} = props
  const domRef = useRef<HTMLDivElement>(null)

  const visibleRef = useRef(visible)
  const [state, setState] = useState(STATE.ROOT)


  const itemList = [{
    name: t.appearance,
    state: STATE.APPEARANCE,
    icon: <IconMoon className="svg" />
  }, {
    name: t.language,
    state: STATE.LANGUAGE,
    icon: <IconTranslate className="svg" />
  }]

  // click elsewhere to close this dialog
  const clickHandler = (e : Event) => {
    if(!domRef.current){
      return
    }

    if(visible && !(domRef.current === e.target || domRef.current.contains(e.target as Node))){
      setVisible(false)
    }
  }

  const closeSubMenu = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation();
    setState(STATE.ROOT)
  }

  useEffect(() => {
    visibleRef.current = visible

    if(visible){
      document.addEventListener('click', clickHandler)
    }
    return () => {
      setState(STATE.ROOT)
      document.removeEventListener('click', clickHandler)
    }
  },[visible])

  return (
    visible ? <div className="sci-menu right-6" ref={domRef}>
      {
        state === STATE.ROOT && 
          <>
          { 
            itemList.map((item, idx) => 
              <div className="menu-item" key={idx} onClick={(e) => {
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation();
                setState(item.state)
              }}>
                <div className="menu-item-label">
                  {item.icon} <span>{item.name}</span>
                </div>
                <IconArrowRight className="arrow" />
              </div>
            )
          }
          </>
      }
      {
        state === STATE.APPEARANCE && <AppearanceMenu t={t} onClose={closeSubMenu}/>
      } 
      {
        state === STATE.LANGUAGE && <LanguageMenu t={t} onClose={closeSubMenu}/>
      } 
    </div> : <></>
  )
};

export default React.memo(SettingDialog);
