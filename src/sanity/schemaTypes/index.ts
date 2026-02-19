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
import * as homeSections from './homeSections'

import { homePage } from './homePage'
import * as aboutSections from './aboutSections'
import * as servicesSections from './servicesSections'
import * as blogSections from './blogSections'
import * as careersSections from './careersSections'
import * as contactSections from './contactSections'
import * as footerSections from './footerSections'
import * as legalPages from './legalPages'
import * as internshipSections from './internshipSections'
import { contactPage } from './otherPages'

export const schemaTypes = [
    globalSettings,
    homePage,


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
    ...Object.values(homeSections),
    ...Object.values(aboutSections),
    ...Object.values(servicesSections),
    ...Object.values(blogSections),
    ...Object.values(careersSections),
    ...Object.values(contactSections),
    ...Object.values(footerSections),
    ...Object.values(legalPages),
    ...Object.values(internshipSections),
]
