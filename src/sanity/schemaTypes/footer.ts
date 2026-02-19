import { defineField, defineType } from 'sanity'

export const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Footer Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            initialValue: 'VelDurSen'
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            initialValue: 'Enterprise Technology Partner'
        }),
        defineField({
            name: 'description',
            title: 'Footer Description',
            type: 'text',
            initialValue: 'VelDurSen hosts a dynamic team of tech enthusiasts and incredibly skilled developers dedicated to creating some of the most bespoke software solutions for a wide variety of businesses and a plethora of industry verticals.'
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', type: 'string', title: 'Platform' },
                        { name: 'url', type: 'url', title: 'URL' },
                        { name: 'iconName', type: 'string', title: 'Icon Name (Lucide)' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'footerSections',
            title: 'Footer Sections (Links)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Section Title' },
                        {
                            name: 'links',
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
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            initialValue: '© 2024 VelDurSen Technologies. All rights reserved.'
        })
    ],
})
