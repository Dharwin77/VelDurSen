import { defineField, defineType } from 'sanity'

// 1. Hero Section
export const internshipHero = defineType({
    name: 'internshipHero',
    title: 'Internship: Hero',
    type: 'document',
    fields: [
        defineField({ name: 'tag', title: 'Top Tag', type: 'string', initialValue: 'Internships' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Growing' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2 (Highlighted)', type: 'string', initialValue: 'Future Tech.' }),
        defineField({ name: 'description', title: 'Description', type: 'text', initialValue: "VelDurSen's commitment to nurturing the next generation..." }),
        defineField({ name: 'heroVideo', title: 'Background Video (MP4)', type: 'file', options: { accept: 'video/mp4' } }),
        defineField({ name: 'heroImage', title: 'Background Image (Fallback)', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'primaryButtonText', title: 'Primary Button Text', type: 'string', initialValue: 'Apply for Internship' }),
        defineField({ name: 'primaryButtonLink', title: 'Primary Button Link', type: 'string', initialValue: '/contact' }),
        defineField({ name: 'secondaryTagText', title: 'Secondary Tag Text', type: 'string', initialValue: 'CSR DRIVEN INITIATIVE' }),
    ]
})

// 2. Ticker
export const internshipTicker = defineType({
    name: 'internshipTicker',
    title: 'Internship: Ticker',
    type: 'document',
    fields: [
        defineField({
            name: 'messages',
            title: 'Ticker Messages',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ["HIRING NOW: SUMMER 2025 COHORT", "JOIN THE FUTURE OF ENTERPRISE TECHNOLOGY"]
        })
    ]
})

// 3. Growing Future (Overview)
export const internshipGrowingFuture = defineType({
    name: 'internshipGrowingFuture',
    title: 'Internship: Growing Future (Overview)',
    type: 'document',
    fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string', initialValue: 'CSR Mission Architecture' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Growing' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2 (Highlighted)', type: 'string', initialValue: 'Future' }),
        defineField({ name: 'headingLine3', title: 'Heading Line 3', type: 'string', initialValue: 'Tech Leaders' }),
        defineField({ name: 'subHeading', title: 'Sub Heading', type: 'string', initialValue: 'This is not a coaching institute...' }),
        defineField({
            name: 'cards',
            title: 'Value Cards',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'tag', title: 'Tag', type: 'string' }),
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                    defineField({ name: 'bgImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
                    defineField({ name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' })
                ]
            }]
        })
    ]
})

// 4. Advisory
export const internshipAdvisory = defineType({
    name: 'internshipAdvisory',
    title: 'Internship: Advisory',
    type: 'document',
    fields: [
        defineField({ name: 'tag', title: 'Tag', type: 'string', initialValue: 'Proprietary Advisory' }),
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Program Integrity Notice' }),
        defineField({ name: 'content', title: 'Content', type: 'text' }),
        defineField({ name: 'sideTag', title: 'Side Vertical Tag', type: 'string', initialValue: 'SYSTEM_PRIORITY_HIGH' })
    ]
})

// 5. Technology Focus Areas
export const internshipTechnology = defineType({
    name: 'internshipTechnology',
    title: 'Internship: Technology Focus',
    type: 'document',
    fields: [
        defineField({ name: 'tag', title: 'Top Tag', type: 'string', initialValue: 'Architectural Core' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Technology' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2 (Highlighted)', type: 'string', initialValue: 'Focus Areas' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'focusAreas',
            title: 'Focus Areas',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
                    defineField({ name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' }),
                    defineField({ name: 'bgImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
                    defineField({
                        name: 'areas',
                        title: 'Tech Stack / Areas',
                        type: 'array',
                        of: [{ type: 'string' }]
                    })
                ]
            }]
        })
    ]
})

// 6. Pipeline
export const internshipPipeline = defineType({
    name: 'internshipPipeline',
    title: 'Internship: Pipeline',
    type: 'document',
    fields: [
        defineField({ name: 'smallTag', title: 'Small Tag', type: 'string', initialValue: 'System Execution Roadmap' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Operational' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2 (Highlighted)', type: 'string', initialValue: 'Pipeline.' }),
        defineField({
            name: 'phases',
            title: 'Pipeline Phases',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'phaseId', title: 'Phase ID', type: 'string', initialValue: '01' }),
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'tag', title: 'Tag', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({
                        name: 'activities',
                        title: 'Activities',
                        type: 'array',
                        of: [{ type: 'string' }]
                    })
                ]
            }]
        })
    ]
})

// 7. 12 Weeks (Summary)
export const internship12Weeks = defineType({
    name: 'internship12Weeks',
    title: 'Internship: 12 Weeks Summary',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', initialValue: '12 Weeks. Pure Architecture.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'value', title: 'Value', type: 'string' }),
                    defineField({ name: 'label1', title: 'Label Line 1', type: 'string' }),
                    defineField({ name: 'label2', title: 'Label Line 2', type: 'string' }),
                ]
            }]
        })
    ]
})

// 8. Candidate Eligibility
export const internshipEligibility = defineType({
    name: 'internshipEligibility',
    title: 'Internship: Eligibility',
    type: 'document',
    fields: [
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Candidate' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2 (Highlighted)', type: 'string', initialValue: 'Eligibility.' }),
        defineField({
            name: 'targetProfiles',
            title: 'Target Profiles',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'string' })
                ]
            }]
        }),
        defineField({
            name: 'coreCapabilities',
            title: 'Core Capabilities',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'string' })
                ]
            }]
        })
    ]
})

// 9. Evolution (CTA)
export const internshipEvolution = defineType({
    name: 'internshipEvolution',
    title: 'Internship: Evolution (CTA)',
    type: 'document',
    fields: [
        defineField({ name: 'tag', title: 'Top Tag', type: 'string', initialValue: 'System Ready for Admission' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Initiate Your' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2 (Highlighted)', type: 'string', initialValue: 'Evolution.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'primaryButtonText', title: 'Primary Button Text', type: 'string', initialValue: 'Commence Application' }),
        defineField({ name: 'primaryButtonLink', title: 'Primary Button Link', type: 'string', initialValue: '/contact' }),
        defineField({ name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string', initialValue: 'Full-Time Roles' }),
        defineField({ name: 'secondaryButtonLink', title: 'Secondary Button Link', type: 'string', initialValue: '/careers' }),
    ]
})
