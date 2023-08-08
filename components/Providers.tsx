"use client"

import { Provider as ReduxProvider } from 'react-redux';
import ThemeProvider from "@/theme/ThemeProvider";

import { store } from '@/store';


export default async function Providers({ children }: {
    children: React.ReactNode;
  }) {
    return (
        <ReduxProvider store={store}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ReduxProvider>
    )
  }