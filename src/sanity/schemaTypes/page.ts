import { defineField, defineType } from 'sanity'

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'features' }, // We will define this next
                { type: 'globalOperations' },
                { type: 'testimonials' },
                { type: 'careersList' },
                { type: 'faq' },
                { type: 'founders' },
                { type: 'culture' },
                { type: 'blogList' },
                { type: 'timeline' },
                { type: 'deliveredOutcomes' },
                { type: 'professionalAssistance' },
                { type: 'whatWeAreUpto' },
                // Add other section types here
            ],
        }),
    ],
})
