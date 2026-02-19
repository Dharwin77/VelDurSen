import { defineField, defineType } from 'sanity'

// 1. Hero
export const careersHero = defineType({
    name: 'careersHero',
    title: 'Careers Hero',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Careers' }),
        defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string', initialValue: 'Build the' }),
        defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string', initialValue: 'Future.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'backgroundVideo', title: 'Background Video (Upload)', type: 'file', options: { accept: 'video/*' } }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Join the Team' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string', initialValue: '/contact' }),
        defineField({
            name: 'stats',
            title: 'Hero Stats (Real-Time Insights)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'value', title: 'Value', type: 'number' }),
                    defineField({ name: 'suffix', title: 'Suffix', type: 'string' }),
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
                ]
            }]
        }),
    ],
})

// 2. Our Approach (Stats + Why Choose Us)
export const careersOurApproach = defineType({
    name: 'careersOurApproach',
    title: 'Our Approach',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Approach' }),
        defineField({ name: 'subHeading', title: 'Sub Heading', type: 'string', initialValue: 'Why Choose Us for Software Development.' }),
        defineField({ name: 'description', title: 'Description', type: 'text', initialValue: 'Fueling lasting growth by aligning talent, process excellence, and measurable performance.' }),
        defineField({
            name: 'whyChooseUsCards',
            title: 'Why Choose Us Cards',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Card Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ name: 'image', title: 'Card Image', type: 'image', options: { hotspot: true } }),
                    defineField({ name: 'rotation', title: 'Rotation (deg)', type: 'number' }),
                ]
            }]
        })
    ],
})

// 3. Life at Veldursen (Culture)
export const careersLifeAtVeldursen = defineType({
    name: 'careersLifeAtVeldursen',
    title: 'Life at Veldursen',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Life at Veldursen.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'stats',
            title: 'Culture Stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'value', title: 'Value', type: 'number' }),
                    defineField({ name: 'suffix', title: 'Suffix', type: 'string' }),
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                ]
            }]
        }),
        defineField({ name: 'cultureImage', title: 'Culture Image', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'values',
            title: 'Culture Values',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Value Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
                ]
            }]
        })
    ],
})

// 4. Growth (Simulator Data)
export const careersGrowth = defineType({
    name: 'careersGrowth',
    title: 'Growth Path',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Your Growth Path' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'stages',
            title: 'Growth Stages (Years)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'year', title: 'Year Label', type: 'string' }),
                    defineField({ name: 'role', title: 'Role Label', type: 'string' }),
                    defineField({ name: 'salaryRange', title: 'Salary Range', type: 'string' }),
                ]
            }]
        })
    ],
})

// 5. A Day in the Life (Employee Profiles)
export const careersDayInTheLife = defineType({
    name: 'careersDayInTheLife',
    title: 'A Day in the Life',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'A Day in the Life' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'profiles',
            title: 'Employee Profiles',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Name', type: 'string' }),
                    defineField({ name: 'role', title: 'Role', type: 'string' }),
                    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
                    defineField({ name: 'journey', title: 'Journey Quote', type: 'text' }),
                    defineField({
                        name: 'schedule',
                        title: 'Daily Schedule',
                        type: 'array',
                        of: [{ type: 'string' }]
                    }),
                    defineField({
                        name: 'tools',
                        title: 'Tools Used',
                        type: 'array',
                        of: [{ type: 'string' }]
                    }),
                ]
            }]
        })
    ],
})

// 6. Find Your Perfect Role (Openings)
export const careersFindYourRole = defineType({
    name: 'careersFindYourRole',
    title: 'Find Your Perfect Role',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Find Your Perfect Role.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'jobs',
            title: 'Open Positions',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'role', title: 'Role Title', type: 'string' }),
                    defineField({ name: 'department', title: 'Department', type: 'string' }),
                    defineField({ name: 'location', title: 'Location', type: 'string' }),
                    defineField({ name: 'type', title: 'Employment Type', type: 'string' }),
                    defineField({ name: 'description', title: 'Job Description', type: 'text' }),
                    defineField({ name: 'applyLink', title: 'Apply Link', type: 'string', initialValue: '/contact' }),
                ]
            }]
        })
    ],
})

// 7. Our Hiring Journey
export const careersHiringJourney = defineType({
    name: 'careersHiringJourney',
    title: 'Hiring Journey',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Hiring Journey.' }),
        defineField({
            name: 'steps',
            title: 'Hiring Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'stepNumber', title: 'Step Number', type: 'number' }),
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'description', title: 'Description', type: 'text' }),
                    defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
                ]
            }]
        })
    ],
})

// 8. Hear From Our Team (Testimonials)
export const careersHearFromTeam = defineType({
    name: 'careersHearFromTeam',
    title: 'Hear From Our Team',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Hear From Our Team.' }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Name', type: 'string' }),
                    defineField({ name: 'role', title: 'Role', type: 'string' }),
                    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
                    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
                ]
            }]
        })
    ],
})

// 9. FAQ
export const careersFAQ = defineType({
    name: 'careersFAQ',
    title: 'Careers FAQ',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Frequently Asked Questions.' }),
        defineField({
            name: 'faqs',
            title: 'Questions & Answers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'question', title: 'Question', type: 'string' }),
                    defineField({ name: 'answer', title: 'Answer', type: 'text' }),
                ]
            }]
        })
    ],
})

// 10. Ready to Make an Impact?
export const careersReadyToMakeImpact = defineType({
    name: 'careersReadyToMakeImpact',
    title: 'Ready to Make an Impact',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Ready to Make an Impact?' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'applyButtonText', title: 'Apply Button Text', type: 'string', initialValue: 'Apply Today' }),
        defineField({ name: 'applyButtonLink', title: 'Apply Button Link', type: 'string', initialValue: '#openings' }),
        defineField({ name: 'contactButtonText', title: 'Contact Button Text', type: 'string', initialValue: 'Contact HR' }),
        defineField({ name: 'contactButtonLink', title: 'Contact Button Link', type: 'string', initialValue: 'mailto:careers@veldursen.com' }),
        defineField({ name: 'contactEmail', title: 'Contact Email Display', type: 'string', initialValue: 'careers@veldursen.com' }),
    ],
})
