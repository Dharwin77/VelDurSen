import { defineField, defineType } from 'sanity'

// 1. Hero
export const servicesHero = defineType({
    name: 'servicesHero',
    title: '01. Hero',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Our Services' }),
        defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string', initialValue: 'Enterprise' }),
        defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string', initialValue: 'Performance.' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Explore Our Services' }),
        defineField({ name: 'globalNetworkText', title: 'Global Network Text', type: 'string', initialValue: 'Global Delivery Network' }),
        defineField({ name: 'backgroundVideo', title: 'Background Video (URL)', type: 'string', description: 'URL to the background video' }),
    ],
})

// 2. What's Included (Lifecycle Model)
export const whatsIncluded = defineType({
    name: 'whatsIncluded',
    title: '02. What\'s Included',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Lifecycle Model' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'What\'s Included.' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'string' }),
                    // Icons will be hardcoded/mapped in frontend for now or we use a string selector
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'e.g., CheckCircle2, Cpu, Layers' }),
                ]
            }]
        })
    ],
})

// 3. What's Included Explanation (Detail Steps)
export const whatsIncludedExplanation = defineType({
    name: 'whatsIncludedExplanation',
    title: '03. What\'s Included Explanation',
    type: 'document',
    fields: [
        defineField({
            name: 'steps',
            title: 'Explanation Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'titlePrefix', title: 'Title Prefix', type: 'string' }),
                    defineField({ name: 'titleSuffix', title: 'Title Suffix', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                    defineField({ name: 'outcome', title: 'Outcome', type: 'text' }),
                    defineField({ name: 'image', title: 'Image', type: 'image' }),
                ]
            }]
        })
    ],
})

// 4. Our Services (Solutions Architecture)
export const ourServices = defineType({
    name: 'ourServices',
    title: '04. Our Services',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'SOLUTIONS ARCHITECTURE' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Our Services.' }),
        defineField({
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'id', title: 'ID (Slug)', type: 'string' }),
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
                    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
                    defineField({ name: 'fullDescription', title: 'Full Description', type: 'text' }),
                    defineField({ name: 'image', title: 'Cover Image', type: 'image' }),
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
                    // Nested arrays for detailed content
                    defineField({
                        name: 'features',
                        title: 'Features',
                        type: 'array',
                        of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] }]
                    }),
                    defineField({
                        name: 'methodology',
                        title: 'Methodology Steps',
                        type: 'array',
                        of: [{ type: 'object', fields: [{ name: 'step', type: 'string' }, { name: 'title', type: 'string' }, { name: 'desc', type: 'text' }] }]
                    }),
                    defineField({
                        name: 'details',
                        title: 'Detailed Categories',
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                defineField({ name: 'title', type: 'string' }),
                                defineField({
                                    name: 'points',
                                    type: 'array',
                                    of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'description', type: 'text' }] }]
                                })
                            ]
                        }]
                    })
                ]
            }]
        })
    ],
})

// 5. Technology Pillars
export const technologyPillars = defineType({
    name: 'technologyPillars',
    title: '05. Technology Pillars',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Core Competencies' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Technology Pillars.' }),
        defineField({
            name: 'pillars',
            title: 'Pillars',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
                    defineField({ name: 'bgImage', title: 'Background Image', type: 'image' }),
                    defineField({ name: 'capabilities', title: 'Core Capabilities', type: 'array', of: [{ type: 'string' }] }),
                    defineField({ name: 'examples', title: 'Sector Impact Examples', type: 'array', of: [{ type: 'string' }] }),
                ]
            }]
        })
    ],
})

// 6. Bridging the Gap (Legacy Modernization) - REMOVED LEGACY CORE TEXTS
export const bridgingTheGap = defineType({
    name: 'bridgingTheGap',
    title: '06. Bridging the Gap',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Legacy to Modern' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Bridging the Gap Between Core & Cloud.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'cards',
            title: 'Feature Cards',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'desc', type: 'text' }),
                    defineField({ name: 'iconName', type: 'string' }),
                ]
            }]
        })
    ],
})

// 7. The Path (Execution Lifecycle) - REMOVED LIFECYCLE PROTOCOLS
export const thePath = defineType({
    name: 'thePath',
    title: '07. The Path',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Execution Lifecycle' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'The Path to Innovation.' }),
        defineField({
            name: 'steps',
            title: 'Roadmap Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'iconName', type: 'string' }),
                ]
            }]
        })
    ],
})

// 8. Reliability (Performance)
export const reliability = defineType({
    name: 'reliability',
    title: '08. Reliability',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Precision Telemetry' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Reliability Calculated.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'stats',
            title: 'Stats Grid',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'id', title: 'Ref ID', type: 'string' }),
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'value', title: 'Value', type: 'string' }),
                    defineField({ name: 'unit', title: 'Unit', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                ]
            }]
        })
    ],
})

// 9. Innovation Engine (R&D Lab)
export const innovationEngine = defineType({
    name: 'innovationEngine',
    title: '09. Innovation Engine',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Internal R&D Lab' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'The VelDurSen Innovation Engine.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'projects',
            title: 'Lab Projects',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'List Title', type: 'string' }),
                    defineField({ name: 'tag', title: 'Tag', type: 'string' }),
                    defineField({ name: 'progress', title: 'Progress %', type: 'number' }),
                    defineField({ name: 'fullTitle', title: 'Full Title', type: 'string' }),
                    defineField({ name: 'fullDesc', title: 'Full Description', type: 'text' }),
                    defineField({ name: 'image', title: 'Project Image', type: 'image' }),
                    defineField({ name: 'milestones', title: 'Core Milestones', type: 'array', of: [{ type: 'string' }] }),
                ]
            }]
        })
    ],
})

// 10. Why Global Leaders Choose Us (Value Prop)
export const whyGlobalLeadersChooseUs = defineType({
    name: 'whyGlobalLeadersChooseUs',
    title: '10. Why Global Leaders Choose Us',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Why Global Leaders Choose Us.' }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'description', type: 'text' }),
                    defineField({ name: 'note', type: 'text' }),
                    defineField({ name: 'iconName', type: 'string' }),
                ]
            }]
        })
    ],
})

// 11. Client Stories (Testimonials)
export const clientStories = defineType({
    name: 'clientStories',
    title: '11. Client Stories',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Client Stories' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Trusted by Industry Visionaries' }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
                    defineField({ name: 'author', title: 'Author Initials', type: 'string' }),
                    defineField({ name: 'role', title: 'Role', type: 'string' }),
                    defineField({ name: 'company', title: 'Company', type: 'string' }),
                    defineField({ name: 'color', title: 'Gradient Class (Optional)', type: 'string' }),
                ]
            }]
        })
    ],
})

// 12. Our Industries
export const ourIndustries = defineType({
    name: 'ourIndustries',
    title: '12. Our Industries',
    type: 'document',
    fields: [
        defineField({ name: 'mainTitle', title: 'Main Title', type: 'string', initialValue: 'Our Industries.' }),
        defineField({ name: 'mainDesc', title: 'Main Quote/Desc', type: 'text' }),
        defineField({ name: 'mainImage', title: 'Main Hero Image', type: 'image' }),
        defineField({ name: 'mainIntroText', title: 'Main Intro Text', type: 'text' }),
        defineField({
            name: 'industriesList',
            title: 'Individual Industries',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Industry Name', type: 'string' }),
                    defineField({ name: 'badge', title: 'Badge', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ name: 'image', title: 'Image', type: 'image' }),
                    // Flexible fields for specific industry stats/features
                    defineField({
                        name: 'features',
                        title: 'Features/Stats',
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                defineField({ name: 'label', type: 'string' }),
                                defineField({ name: 'value', type: 'string' }),
                                defineField({ name: 'desc', type: 'text' }),
                                defineField({ name: 'iconName', type: 'string' }),
                            ]
                        }]
                    }),
                    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
                ]
            }]
        })
    ],
})

// 13. Strategic Differentiation (The VelDurSen Edge)
export const strategicDifferentiation = defineType({
    name: 'strategicDifferentiation',
    title: '13. Strategic Differentiation',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Strategic Differentiation' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'The VelDurSen Edge.' }),
        // Reuse specific items from whyChooseUsData if needed, or just a generic list
        defineField({
            name: 'items',
            title: 'Differentiation Items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'description', type: 'text' }),
                    defineField({ name: 'note', type: 'text' }),
                    defineField({ name: 'iconName', type: 'string' }),
                ]
            }]
        })
    ],
})

// 14. The VelDurSen Advantage (Cross-Industry)
export const velDurSenAdvantage = defineType({
    name: 'velDurSenAdvantage',
    title: '14. The VelDurSen Advantage',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'The VelDurSen Advantage' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: 'Standardized excellence across every vertical we serve.' }),
        defineField({
            name: 'items',
            title: 'Grid Items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'label', type: 'string' }),
                    defineField({ name: 'iconName', type: 'string' }),
                ]
            }]
        })
    ],
})
