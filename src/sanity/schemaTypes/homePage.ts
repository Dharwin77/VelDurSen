
import { defineField, defineType } from 'sanity'

export const homePage = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Home',
            readOnly: true,
        }),
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
        }),
        defineField({
            name: 'globalOperations',
            title: 'Global Operations',
            type: 'globalOperations',
        }),
        defineField({
            name: 'professionalAssistance',
            title: 'Professional Assistance / Trusted Partner',
            type: 'professionalAssistance',
        }),
        defineField({
            name: 'whatWeAreUpto',
            title: 'What We Are Upto / Highlights',
            type: 'whatWeAreUpto',
        }),
        defineField({
            name: 'founders',
            title: 'Founders / Meet the Minds',
            type: 'founders',
        }),
        defineField({
            name: 'timeline',
            title: 'Company Journey / Timeline',
            type: 'timeline',
        }),
        defineField({
            name: 'deliveredOutcomes',
            title: 'Achievements / Delivered Outcomes',
            type: 'deliveredOutcomes',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Home Page',
            }
        },
    },
})
