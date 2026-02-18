import { defineField, defineType } from 'sanity'

export const globalSettings = defineType({
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
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
        defineField({
            name: 'footer',
            title: 'Footer',
            type: 'object',
            fields: [
                defineField({
                    name: 'companyName',
                    type: 'string',
                }),
                defineField({
                    name: 'address',
                    type: 'text',
                }),
                defineField({
                    name: 'socialLinks',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'platform', type: 'string' },
                                { name: 'url', type: 'url' },
                            ],
                        },
                    ],
                }),
                defineField({
                    name: 'footerLinks',
                    title: 'Footer Links',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'label', type: 'string', title: 'Label' },
                                { name: 'link', type: 'string', title: 'Link' },
                            ]
                        }
                    ]
                })
            ],
        }),
    ],
})
