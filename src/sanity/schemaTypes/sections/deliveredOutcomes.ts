import { defineField, defineType } from 'sanity'

export const deliveredOutcomes = defineType({
    name: 'deliveredOutcomes',
    title: 'Delivered Outcomes Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'caseStudies',
            title: 'Case Studies',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'image', type: 'image', title: 'Image' },
                        { name: 'stats', type: 'array', of: [{ type: 'string' }], title: 'Key Stats' },
                        // Simplified for now, usually needs more structure
                    ],
                },
            ],
        }),
    ],
})
