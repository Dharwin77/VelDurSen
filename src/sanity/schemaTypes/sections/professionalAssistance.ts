import { defineField, defineType } from 'sanity'

export const professionalAssistance = defineType({
    name: 'professionalAssistance',
    title: 'Professional Assistance Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string', // Supports HTML or newline if needed
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ],
})
