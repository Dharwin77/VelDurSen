import { defineField, defineType } from 'sanity'

export const blogList = defineType({
    name: 'blogList',
    title: 'Blog List Section',
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
            type: 'text'
        }),
        defineField({
            name: 'limit',
            title: 'Number of posts to show',
            type: 'number',
            initialValue: 3
        })
    ],
})
