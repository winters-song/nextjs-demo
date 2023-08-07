import { i18n } from './i18n-config'

const dictionaries = {
  'en-US': () => import('@/dictionaries/en-US.json').then((module) => module.default),
  'zh-CN': () => import('@/dictionaries/zh-CN.json').then((module) => module.default),
  nl: () => import('@/dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale) => 
  dictionaries[locale]?.() ?? dictionaries[i18n.defaultLocale]()