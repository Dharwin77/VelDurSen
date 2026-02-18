import { defineField, defineType } from 'sanity'

export const whatWeAreUpto = defineType({
    name: 'whatWeAreUpto',
    title: 'What We Are Upto Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' },
                        { name: 'percentage', type: 'number', title: 'Percentage' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }]
        })
    ],
})
