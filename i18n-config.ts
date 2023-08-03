export const i18n = {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nl', 'zh-CN']
}

export type Locale = (typeof i18n)['locales'][number]