
import { defineField, defineType } from 'sanity'

export const careersPage = defineType({
    name: 'careersPage',
    title: 'Careers Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Careers',
            readOnly: true,
        }),
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'hero',
        }),
        defineField({
            name: 'culture',
            title: 'Culture & Values',
            type: 'culture',
        }),
        defineField({
            name: 'careersList',
            title: 'Job Openings List',
            type: 'careersList',
        }),
        defineField({
            name: 'faq',
            title: 'Frequently Asked Questions',
            type: 'faq',
        }),
        defineField({
            name: 'testimonials',
            title: 'Employee Testimonials',
            type: 'testimonials',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Careers Page',
            }
        },
    },
})
