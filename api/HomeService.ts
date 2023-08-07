import { 
    topSubjectData, 
    topSubjectDataEn,
    sliderData 
} from "@/mock/home"


const topSubjectMap : { [name: string]: { [name: string]: string }[]}= {
    'en-US': topSubjectDataEn,
    'zh-CN': topSubjectData
}

const HomeService = {
    getTopSubjects : (lang: string) => {
        return topSubjectMap.hasOwnProperty(lang) ? topSubjectMap[lang] : topSubjectMap['en-US']
    },

    getSliderData : () => {
        return sliderData;
    }
}

export default HomeService