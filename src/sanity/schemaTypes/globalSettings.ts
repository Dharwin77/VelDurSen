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
            name: 'loadingImage',
            title: 'Loading Screen Image',
            description: 'Image displayed during page loading.',
            type: 'image',
            options: { hotspot: true },
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
