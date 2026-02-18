import { defineField, defineType } from 'sanity'

export const hero = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string', // or 'text' if multiline needed
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'backgroundVideo',
            title: 'Background Video',
            type: 'file',
            description: 'Upload a video file (MP4) for the background. Takes precedence over image.',
        }),
        defineField({
            name: 'ctaButtons',
            title: 'Call to Action Buttons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'link', type: 'string', title: 'Link' },
                        { name: 'variant', type: 'string', title: 'Variant', options: { list: ['primary', 'secondary', 'outline'], layout: 'radio' }, initialValue: 'primary' },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'backgroundImage',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Hero Section',
                subtitle: 'Hero',
                media,
            }
        },
    },
})
