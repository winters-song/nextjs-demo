"use client"

import {createTheme, ThemeOptions, ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {Roboto} from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})


const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 12,
  },
  palette: {
    background: {
      default: '#09f'
    },
    components: {}
  },
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({children}: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}