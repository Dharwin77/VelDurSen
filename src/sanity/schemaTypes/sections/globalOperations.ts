import { defineField, defineType } from 'sanity'

export const globalOperations = defineType({
    name: 'globalOperations',
    title: 'Global Operations Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'metrics',
            title: 'Metrics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'value', type: 'string', title: 'Value (e.g. 50+)' },
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'sublabel', type: 'string', title: 'Sublabel' },
                    ],
                },
            ],
        }),
    ],
})
