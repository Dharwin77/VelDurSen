import { page } from './page'
import { globalSettings } from './globalSettings'
import { blogPost } from './blogPost'
import { hero } from './sections/hero'
import { features } from './sections/features'
import { globalOperations } from './sections/globalOperations'
import { testimonials } from './sections/testimonials'
import { founders } from './sections/founders'
import { careersList } from './sections/careersList'
import { culture } from './sections/culture'
import { faq } from './sections/faq'
import { blogList } from './sections/blogList'
import { whatWeAreUpto } from './sections/whatWeAreUpto'
import { timeline } from './sections/timeline'
import { deliveredOutcomes } from './sections/deliveredOutcomes'
import { professionalAssistance } from './sections/professionalAssistance'
import { homePage } from './homePage'
import { careersPage } from './careersPage'
import { aboutPage, whatWeDoPage, contactPage, blogPage } from './otherPages'

export const schemaTypes = [
    globalSettings,
    homePage,
    careersPage,
    aboutPage,
    whatWeDoPage,
    contactPage,
    blogPage,
    page, // Keeping generic page for now just in case
    blogPost,
    hero,
    features,
    globalOperations,
    testimonials,
    founders,
    careersList,
    culture,
    faq,
    blogList,
    whatWeAreUpto,
    timeline,
    deliveredOutcomes,
    professionalAssistance,
]
