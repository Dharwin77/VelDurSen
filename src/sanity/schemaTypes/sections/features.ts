import { defineField, defineType } from 'sanity'

export const features = defineType({
    name: 'features',
    title: 'Features Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
        }),
        defineField({
            name: 'features',
            title: 'Features List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icon Name (Lucide)', description: 'e.g. Brain, Cloud, Shield' },
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
                title: title || 'Features Section',
                subtitle: 'Features',
            }
        },
    },
})
