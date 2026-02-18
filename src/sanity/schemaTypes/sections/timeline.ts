import { defineField, defineType } from 'sanity'

export const timeline = defineType({
    name: 'timeline',
    title: 'Timeline / Journey Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'milestones',
            title: 'Milestones',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'year', type: 'string', title: 'Year' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'image', type: 'image', title: 'Image' },
                        { name: 'icon', type: 'string', title: 'Icon Name (e.g. Rocket, Code)' },
                    ],
                },
            ],
        }),
    ],
})
