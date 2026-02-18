import { defineField, defineType } from 'sanity'

export const testimonials = defineType({
    name: 'testimonials',
    title: 'Testimonials Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'highlight', type: 'string', title: 'Highlight Quote' },
                        { name: 'content', type: 'text', title: 'Review Content' },
                        { name: 'author', type: 'string', title: 'Author Name' },
                        { name: 'role', type: 'string', title: 'Role' },
                        { name: 'company', type: 'string', title: 'Company' },
                        { name: 'image', type: 'image', title: 'Author Image' },
                        { name: 'rating', type: 'number', title: 'Rating (1-5)', initialValue: 5 },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Testimonials Section',
                subtitle: 'Testimonials',
            }
        },
    },
})
