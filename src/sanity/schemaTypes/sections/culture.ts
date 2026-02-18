import { defineField, defineType } from 'sanity'

export const culture = defineType({
    name: 'culture',
    title: 'Culture Section',
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
            name: 'values',
            title: 'Culture Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icon Name' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'image',
            title: 'Culture Image',
            type: 'image',
        }),
    ],
})
