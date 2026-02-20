import { defineField, defineType } from 'sanity'

export const globalSettings = defineType({
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Brand Name',
            type: 'string',
            initialValue: 'VelDurSen'
        }),
        defineField({
            name: 'tagline',
            title: 'Brand Tagline',
            type: 'string',
            initialValue: 'Enterprise Technology Partner'
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'loadingImages',
            title: 'Loading Screen Images',
            description: 'Upload 3 images for the split-screen loading background (Left, Center, Right).',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.max(3)
        }),
        defineField({
            name: 'loadingText',
            title: 'Loading Screen Text',
            description: 'Text to display (e.g., "Welcome to VelDurSen").',
            type: 'string',
            initialValue: 'Welcome to VelDurSen'
        }),
        // Main Nav could stay here or move to a separate Menu document, keeping here for now as simpler global setting
        defineField({
            name: 'mainNav',
            title: 'Main Navigation',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'link', type: 'string', title: 'Link' },
                    ],
                },
            ],
        }),
    ],
})
