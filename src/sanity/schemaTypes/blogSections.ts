import { defineField, defineType } from 'sanity'

// --- 1. Blog Page Content (Singleton-like) ---
export const blogPageHero = defineType({
    name: 'blogPageHero',
    title: 'Blog Page Hero',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Our Blogs' }),
        defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string', initialValue: 'VelDurSen' }),
        defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string', initialValue: 'Insights.' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({ name: 'backgroundVideo', title: 'Background Video (Upload)', type: 'file', options: { accept: 'video/*' } }),
    ],
})

// --- 2. Blog Post Sections (Reusable Documents) ---


// B. Normal Section
export const blogNormalSection = defineType({
    name: 'blogNormalSection',
    title: 'Blog Normal Section',
    type: 'document',
    fields: [
        defineField({ name: 'internalTitle', title: 'Internal Title', type: 'string' }),
        defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'bulletPoints',
            title: 'Bullet Points',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'card',
            title: 'Featured Card (Single)',
            type: 'object',
            fields: [
                defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                defineField({ name: 'description', title: 'Card Description', type: 'text' }),
                defineField({ name: 'points', title: 'Card Points', type: 'array', of: [{ type: 'string' }] }),
                defineField({ name: 'image', title: 'Card Image', type: 'image' }),
            ]
        }),
    ],
})

// C. Blog Cards (Multiple)
export const blogCards = defineType({
    name: 'blogCards',
    title: 'Blog Cards Grid',
    type: 'document',
    fields: [
        defineField({ name: 'internalTitle', title: 'Internal Title', type: 'string' }),
        defineField({ name: 'heading', title: 'Grid Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Grid Description', type: 'text' }),
        defineField({
            name: 'cards',
            title: 'Cards List',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] }),
                    defineField({ name: 'image', title: 'Image', type: 'image' }),
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
                ]
            }]
        })
    ],
})

// D. Real-World Applications
export const blogRealWorldApplications = defineType({
    name: 'blogRealWorldApplications',
    title: 'Real-World Applications',
    type: 'document',
    fields: [
        defineField({ name: 'internalTitle', title: 'Internal Title', type: 'string' }),
        defineField({ name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'Real-World Applications' }),
        defineField({ name: 'description', title: 'Intro Description', type: 'text' }),
        defineField({
            name: 'applications',
            title: 'Applications List',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'industry', title: 'Industry/Sector', type: 'string' }),
                    defineField({ name: 'application', title: 'Application', type: 'text' }),
                    defineField({ name: 'impact', title: 'Impact', type: 'text' }),
                ]
            }]
        })
    ],
})

// E. Challenges (with specific Regulation/Mitigation structure implied)
export const blogChallenges = defineType({
    name: 'blogChallenges',
    title: 'Challenges Section',
    type: 'document',
    fields: [
        defineField({ name: 'internalTitle', title: 'Internal Title', type: 'string' }),
        defineField({ name: 'heading', title: 'Section Heading', type: 'string', initialValue: 'Challenges' }),
        defineField({
            name: 'challengesList',
            title: 'Challenges List',
            type: 'array',
            of: [{
                type: 'object',
                title: 'Challenge Card',
                fields: [
                    defineField({ name: 'title', title: 'Challenge Title', type: 'string', description: 'e.g. Regulatory and Safety Certification' }),
                    defineField({ name: 'mitigationTitle', title: 'Mitigation Title', type: 'string', initialValue: 'Mitigation' }),
                    defineField({ name: 'mitigationContent', title: 'Mitigation Content', type: 'text' }),
                    // Added scenarios as optional points if needed
                    defineField({ name: 'scenarios', title: 'Scenarios/Points', type: 'array', of: [{ type: 'string' }] }),
                ]
            }]
        })
    ],
})

// F. Conclusion
export const blogConclusion = defineType({
    name: 'blogConclusion',
    title: 'Conclusion Section',
    type: 'document',
    fields: [
        defineField({ name: 'internalTitle', title: 'Internal Title', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Conclusion' }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
})
