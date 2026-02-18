import { defineField, defineType } from 'sanity'

export const faq = defineType({
    name: 'faq',
    title: 'FAQ Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'faqs',
            title: 'Questions',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer' },
                    ],
                },
            ],
        }),
    ],
})
