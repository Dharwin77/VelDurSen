import { defineField, defineType } from 'sanity'

export const founders = defineType({
    name: 'founders',
    title: 'Founders Section',
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
            name: 'founders',
            title: 'Founders List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'role', type: 'string', title: 'Role' },
                        { name: 'image', type: 'image', title: 'Portrait' },
                        { name: 'bio', type: 'text', title: 'Bio' },
                        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
                        { name: 'twitter', type: 'url', title: 'Twitter URL' },
                        { name: 'email', type: 'email', title: 'Email' },
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
                title: title || 'Founders Section',
                subtitle: 'Founders',
            }
        }
    }
})
