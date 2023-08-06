export const i18n = {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nl', 'zh-CN']
}


export const i18nLocaleName : { [name: string]: string } = {
    'en-US' : 'English (US)',
    'nl': 'Nederlands',
    'zh-CN': '中文 (简体)'
} 


export type Locale = (typeof i18n)['locales'][number]