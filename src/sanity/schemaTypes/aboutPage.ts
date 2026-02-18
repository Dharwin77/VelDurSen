
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        // 1. Hero
        defineField({
            name: 'hero',
            title: '1. Hero Section',
            type: 'object',
            fields: [
                defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'About Veldursen' }),
                defineField({ name: 'title', title: 'Main Title', type: 'string', initialValue: 'Software with a human heartbeat.' }),
                defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 }),
                defineField({ name: 'video', title: 'Background Video', type: 'file', options: { accept: 'video/*' } }),
                defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Meet the team' }),
            ],
        }),

        // 2. Our Story
        defineField({
            name: 'story',
            title: '2. Our Story',
            type: 'object',
            fields: [
                defineField({ name: 'badge', title: 'Badge', type: 'string', initialValue: 'Our Story' }),
                defineField({ name: 'titlePrefix', title: 'Title Prefix', type: 'string', initialValue: 'Building the Digital Future Since Day One' }),
                defineField({ name: 'mainTitle', title: 'Main Title', type: 'string', initialValue: 'Human software, crafted with care' }),
                defineField({
                    name: 'paragraphs',
                    title: 'Story Paragraphs',
                    type: 'array',
                    of: [{ type: 'text', rows: 4 }],
                }),
                defineField({ name: 'highlightBox', title: 'Highlight Box Text', type: 'text', rows: 3 }),
                defineField({
                    name: 'stats',
                    title: 'Stats Cards',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'value', title: 'Value', type: 'string' }),
                                defineField({ name: 'label', title: 'Label', type: 'string' }),
                                defineField({ name: 'sublabel', title: 'Sublabel', type: 'string' }),
                            ]
                        }
                    ]
                })
            ],
        }),

        // 3. Vision
        defineField({
            name: 'vision',
            title: '3. Vision',
            type: 'object',
            fields: [
                defineField({ name: 'badge', title: 'Badge', type: 'string', initialValue: 'The North Star' }),
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Our Vision.' }),
                defineField({
                    name: 'points',
                    title: 'Vision Points',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', title: 'Title', type: 'string' }),
                                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
                            ],
                        },
                    ],
                }),
                defineField({ name: 'image', title: 'Vision Image', type: 'image', options: { hotspot: true } }),
            ],
        }),

        // 4. Mission
        defineField({
            name: 'mission',
            title: '4. Mission',
            type: 'object',
            fields: [
                defineField({ name: 'badge', title: 'Badge', type: 'string', initialValue: 'Driving Impact' }),
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Our Mission.' }),
                defineField({
                    name: 'points',
                    title: 'Mission Points',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', title: 'Title', type: 'string' }),
                                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
                            ],
                        },
                    ],
                }),
                defineField({ name: 'image', title: 'Mission Image', type: 'image', options: { hotspot: true } }),
            ],
        }),

        // 5. Leadership Collective
        defineField({
            name: 'leadership',
            title: '5. Leadership Collective',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                        defineField({ name: 'role', title: 'Role', type: 'string' }),
                        defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
                        defineField({
                            name: 'reports',
                            title: 'Direct Reports',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                                        defineField({ name: 'role', title: 'Role', type: 'string' }),
                                        defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
                                    ],
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),

        // 6. Evolution Journey
        defineField({
            name: 'evolutionJourney',
            title: '6. Evolution Journey',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'year', title: 'Year', type: 'string' }),
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
                        defineField({
                            name: 'highlights',
                            title: 'Highlights',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                        defineField({
                            name: 'images',
                            title: 'Gallery Images',
                            type: 'array',
                            of: [{ type: 'image', options: { hotspot: true } }],
                        }),
                    ],
                },
            ],
        }),

        // 7. Cultural Fabric
        defineField({
            name: 'culturalFabric',
            title: '7. Cultural Fabric',
            type: 'object',
            fields: [
                defineField({ name: 'badge', title: 'Badge', type: 'string', initialValue: 'Cultural Fabric' }),
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'The crew giving VelDurSen Its Spark.' }),
                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                    name: 'teamHighlights',
                    title: 'Team Highlights Cards',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                                defineField({ name: 'desc', title: 'Card Description', type: 'text', rows: 2 }),
                            ]
                        }
                    ]
                }),
                defineField({
                    name: 'teamPhotos',
                    title: 'Carousel Photos',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
                                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                                defineField({ name: 'badge', title: 'Badge Label', type: 'string' }),
                            ]
                        }
                    ]
                })
            ],
        }),

        // 8. Core Values
        defineField({
            name: 'coreValues',
            title: '8. Core Values',
            type: 'object',
            fields: [
                defineField({ name: 'badge', type: 'string', initialValue: 'Core Values' }),
                defineField({ name: 'title', type: 'string', initialValue: 'Principles that define us' }),
                defineField({ name: 'description', type: 'text', rows: 3 }),
                defineField({ name: 'mainImage', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'highlightTitle', type: 'string', initialValue: 'Values in action' }),
                defineField({ name: 'highlightHeading', type: 'text', rows: 2 }),
                defineField({ name: 'highlightDesc', type: 'text', rows: 3 }),
                defineField({
                    name: 'valuesList',
                    title: 'Values List',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' }),
                                defineField({ name: 'title', title: 'Title', type: 'string' }),
                                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
                            ],
                        },
                    ],
                })
            ]
        }),

        // 9. How We Work
        defineField({
            name: 'howWeWork',
            title: '9. How We Work',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'The values that guide how we work.' }),
                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                    name: 'points',
                    title: 'Points',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', title: 'Title', type: 'string' }),
                                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
                            ],
                        },
                    ],
                }),
            ],
        }),

        // 10. Team Behind The Scene
        defineField({
            name: 'teamBehindTheScene',
            title: '10. Team Behind The Scene',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Team behind the scene' }),
                defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
                defineField({
                    name: 'images',
                    title: 'Marquee Images',
                    type: 'array',
                    of: [{ type: 'image', options: { hotspot: true } }],
                }),
            ],
        }),
    ],
})
