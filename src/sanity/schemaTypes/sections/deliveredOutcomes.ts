import { defineField, defineType } from 'sanity'

export const deliveredOutcomes = defineType({
    name: 'deliveredOutcomes',
    title: 'Delivered Outcomes Section',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Main Heading', type: 'string' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
        defineField({
            name: 'caseStudies',
            title: 'Case Studies',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                    { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
                    { name: 'stat1', type: 'string', title: 'Stat 1 Value' },
                    { name: 'stat1Label', type: 'string', title: 'Stat 1 Label' },
                    { name: 'stat2', type: 'string', title: 'Stat 2 Value' },
                    { name: 'stat2Label', type: 'string', title: 'Stat 2 Label' }
                ]
            }],
        }),
    ],
})
