
import { defineField, defineType } from 'sanity'

// Helper to create simple section documents
const createSection = (name: string, title: string, fields: any[]) => defineType({
    name,
    title,
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title (Internal)', type: 'string', initialValue: title }),
        ...fields
    ]
})

export const homeHero = defineType({
    name: 'homeHero',
    title: 'Home Hero',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title (Internal)', type: 'string', initialValue: 'Home Hero' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image' }),
        defineField({
            name: 'ctaButtons', title: 'Buttons', type: 'array', of: [{
                type: 'object', fields: [
                    { name: 'label', type: 'string' }, { name: 'link', type: 'string' }
                ]
            }]
        })
    ]
})

export const homeSection1 = createSection('homeSection1', 'Home Section 1 (Ticker)', [
    defineField({
        name: 'items', title: 'Ticker Items', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'text', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'icon', type: 'string', description: 'Icon name (e.g. Code, Trophy)' }
            ]
        }]
    })
])

export const homeSection2 = createSection('homeSection2', 'Home Section 2 (Global Network)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image' }),
    defineField({
        name: 'metrics', title: 'Metrics', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'value', type: 'string', title: 'Value (e.g. 50+)' },
                { name: 'label', type: 'string', title: 'Label (e.g. Countries Served)' },
                { name: 'sublabel', type: 'string', title: 'Sublabel (e.g. Worldwide operations)' }
            ]
        }]
    })
])

export const homeSection3 = createSection('homeSection3', 'Home Section 3 (Our Story)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'content', title: 'Content Paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'images', title: 'Carousel Images', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'ctaText', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'string' })
])

export const homeSection4 = createSection('homeSection4', 'Home Section 4 (Strategic Talent)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading (Highlight)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Side Image', type: 'image' })
])

export const homeSection5 = createSection('homeSection5', 'Home Section 5 (Partners)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'logos', title: 'Partner Logos', type: 'array', of: [{ type: 'image' }] })
])

export const homeSection6 = createSection('homeSection6', 'Home Section 6 (Highlights)', [
    defineField({ name: 'heading', title: 'Main Heading', type: 'string' }),
    defineField({
        name: 'stats', title: 'Stats', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'label', type: 'string' },
                { name: 'percentage', type: 'number' },
                { name: 'value', type: 'string' }
            ]
        }]
    }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image' }),
    defineField({ name: 'secondaryImage', title: 'Secondary Image', type: 'image' })
])

export const homeSection7 = createSection('homeSection7', 'Home Section 7 (What We Provide)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'tabs', title: 'Tabs', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'tabLabel', type: 'string', title: 'Tab Label (e.g. Candidate)' },
                { name: 'benefits', type: 'array', of: [{ type: 'string' }] },
                { name: 'image', type: 'image' }
            ]
        }]
    })
])

export const homeSection8 = createSection('homeSection8', 'Home Section 8 (Excellence/Awards Text)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'text', title: 'Text Content', type: 'array', of: [{ type: 'text' }] })
])

export const homeSection9 = createSection('homeSection9', 'Home Section 9 (Achievements Grid)', [
    defineField({
        name: 'achievements', title: 'Achievements', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'description', type: 'text' },
                { name: 'tags', type: 'array', of: [{ type: 'string' }] },
                { name: 'icon', type: 'string', description: 'Lucide Icon Name (e.g. Trophy, Award)' },
                { name: 'category', type: 'string' },
                { name: 'venue', type: 'string' },
                { name: 'date', type: 'string' },
                { name: 'image', type: 'image' }
            ]
        }]
    })
])

export const homeSection10 = createSection('homeSection10', 'Home Section 10 (Growth Trajectory)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({
        name: 'metrics', title: 'Metrics', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'label', type: 'string' },
                { name: 'value', type: 'string' },
                { name: 'icon', type: 'string' }
            ]
        }]
    })
])

export const homeSection11 = createSection('homeSection11', 'Home Section 11 (Deployment Milestones)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro Text', type: 'text' }),
    defineField({
        name: 'cards', title: 'Cards', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'items', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] },
                { name: 'description', type: 'text' }
            ]
        }]
    })
])

export const homeSection12 = createSection('homeSection12', 'Home Section 12 (Timeline)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
        name: 'milestones', title: 'Timeline Milestones', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'year', type: 'string' },
                { name: 'title', type: 'string' },
                { name: 'desc', type: 'text' },
                { name: 'image', type: 'image' },
                { name: 'icon', type: 'string', description: 'Lucide Icon name (e.g. Rocket, Code)' }
            ]
        }]
    })
])

// Using existing types wrapped in documents for the rest where appropriate, or simple placeholders
export const homeSection13 = createSection('homeSection13', 'Home Section 13 (Delivered Outcomes)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
    defineField({
        name: 'caseStudies', title: 'Case Studies', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'text', title: 'Description' },
                { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
                { name: 'stat1', type: 'string', title: 'Stat 1 Value (e.g. 99.9%)' },
                { name: 'stat1Label', type: 'string', title: 'Stat 1 Label (e.g. Fraud Detection)' },
                { name: 'stat2', type: 'string', title: 'Stat 2 Value (e.g. 40%)' },
                { name: 'stat2Label', type: 'string', title: 'Stat 2 Label (e.g. Faster Onboarding)' }
            ]
        }]
    })
])

export const homeSection14 = createSection('homeSection14', 'Home Section 14 (Enterprise CRM)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'biSystems', title: 'BI Systems List', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'desc', type: 'string' }] }] })
])

export const homeSection15 = createSection('homeSection15', 'Home Section 15 (Our Expertise)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
        name: 'areas', title: 'Areas', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'desc', type: 'text', title: 'Description' },
                { name: 'icon', type: 'string', title: 'Icon Name (unused, kept for compat)' },
                { name: 'features', type: 'array', title: 'Features', of: [{ type: 'string' }] },
                { name: 'image', type: 'image', title: 'Avatar Image (main photo)', options: { hotspot: true } },
                { name: 'cardIcon', type: 'image', title: 'Card Icon (floating icon image)', options: { hotspot: true } },
            ]
        }]
    })
])

export const homeSection16 = createSection('homeSection16', 'Home Section 16 (Automation)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'columns', title: 'Columns', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'desc', type: 'string' },
                { name: 'items', type: 'array', of: [{ type: 'string' }] }
            ]
        }]
    })
])

export const homeSection17 = createSection('homeSection17', 'Home Section 17 (Why Choose)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'reasons',
        title: 'Reasons',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) =>
            Rule.custom((items) => {
                if (!items) return true
                const values = (items as string[]).map((item) => (item || '').trim())
                if (values.some((item) => !item)) return 'Reasons cannot contain empty items'
                if (new Set(values).size !== values.length) return 'Reasons must be unique'
                return true
            })
    }),
    defineField({
        name: 'features',
        title: 'Features List',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) =>
            Rule.custom((items) => {
                if (!items) return true
                const values = (items as string[]).map((item) => (item || '').trim())
                if (values.some((item) => !item)) return 'Features cannot contain empty items'
                if (new Set(values).size !== values.length) return 'Features must be unique'
                return true
            })
    }),
    defineField({
        name: 'stats', title: 'Stats', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'label', title: 'Card Title', type: 'string' },
                { name: 'value', title: 'Metric 1 Value', type: 'string' },
                { name: 'desc', title: 'Metric 1 Description', type: 'string' },
                { name: 'value2', title: 'Metric 2 Value', type: 'string' },
                { name: 'desc2', title: 'Metric 2 Description', type: 'string' },
                { name: 'value3', title: 'Metric 3 Value', type: 'string' },
                { name: 'desc3', title: 'Metric 3 Description', type: 'string' }
            ]
        }]
    })
])

export const homeSection18 = createSection('homeSection18', 'Home Section 18 (Sector Expertise)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'sectors', title: 'Sectors', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'name', type: 'string' },
                { name: 'count', type: 'string' },
                { name: 'icon', type: 'string' }
            ]
        }]
    })
])

export const homeSection19 = createSection('homeSection19', 'Home Section 19 (Innovation)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'string' }] })
])

export const homeSection20 = createSection('homeSection20', 'Home Section 20 (Product Focus)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'features', title: 'Features (Right Side List)', type: 'array', of: [{ type: 'string' }] }),
    defineField({
        name: 'cards', title: 'Feature Cards (Left Side Tiles)', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'label', type: 'string', title: 'Card Label' },
                { name: 'desc', type: 'text', title: 'Card Description' },
                { name: 'icon', type: 'string', title: 'Icon Name (e.g. Users, Workflow, BarChart, Activity)' },
                { name: 'color', type: 'string', title: 'Icon Color Class (e.g. text-blue-600)' },
            ]
        }]
    })
])

export const homeSection21 = createSection('homeSection21', 'Home Section 21 (CRM Use Cases)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
        name: 'cases', title: 'Use Cases', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'desc', type: 'string' },
                { name: 'image', type: 'image' }
            ]
        }]
    })
])

export const homeSection22 = createSection('homeSection22', 'Home Section 22 (Intelligent Automation)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'cards', title: 'Cards', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'desc', type: 'string' },
                { name: 'list', type: 'array', of: [{ type: 'string' }] }
            ]
        }]
    })
])

export const homeSection23 = createSection('homeSection23', 'Home Section 23 (Why Choose & Case Studies)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'reasons',
        title: 'Reasons',
        type: 'array',
        of: [{ type: 'string' }],
        validation: (Rule) =>
            Rule.custom((items) => {
                if (!items) return true
                const values = (items as string[]).map((item) => (item || '').trim())
                if (values.some((item) => !item)) return 'Reasons cannot contain empty items'
                if (new Set(values).size !== values.length) return 'Reasons must be unique'
                return true
            })
    }),
    defineField({
        name: 'stats', title: 'Case Study Stats', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'val1', type: 'string' }, { name: 'lab1', type: 'string' },
                { name: 'val2', type: 'string' }, { name: 'lab2', type: 'string' },
                { name: 'val3', type: 'string' }, { name: 'lab3', type: 'string' }
            ]
        }]
    })
])

export const homeSection24 = createSection('homeSection24', 'Home Section 24 (Sector Accelerators)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
        name: 'accelerators', title: 'Accelerators', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'sub', type: 'string' },
                { name: 'image', type: 'image' }
            ]
        }]
    })
])

export const homeSection25 = createSection('homeSection25', 'Home Section 25 (Innovation Framework)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({
        name: 'phases', title: 'Phases', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'step', type: 'string', title: 'Step Number (e.g. 01)' },
                { name: 'title', type: 'string', title: 'Phase Title' },
                { name: 'icon', type: 'string', title: 'Icon Name (e.g. Code, Server, Shield, Rocket, RefreshCcw)' }
            ]
        }]
    })
])

// New 11 Sections
export const homeSection26 = createSection('homeSection26', 'Home Section 26 (Global Delivery Ecosystem)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'badge', title: 'Badge Label (e.g. Global Presence)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'regions', title: 'Regions List', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'desc', type: 'text' }] }] })
])

export const homeSection27 = createSection('homeSection27', 'Home Section 27 (Modernization Framework)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'metrics', title: 'Metrics', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'value', type: 'string' }] }] })
])

export const homeSection28 = createSection('homeSection28', 'Home Section 28 (Beyond Deployment)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [{ type: 'object', fields: [{ name: 'val', type: 'string' }, { name: 'lab', type: 'string' }] }] })
])

export const homeSection29 = createSection('homeSection29', 'Home Section 29 (Advisory)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }), // "Advisory & Leadership"
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'author', title: 'Quote Author', type: 'string' }),
    defineField({ name: 'initiatives', title: 'Initiatives', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'desc', type: 'string' }] }] })
])

export const homeSection30 = createSection('homeSection30', 'Home Section 30 (Core Blueprint)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }), // "Core Blueprint v2.0"
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'layers', title: 'Layers', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'tech', type: 'string' }] }] })
])

export const homeSection31 = createSection('homeSection31', 'Home Section 31 (Commercial Resilience)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [{ type: 'object', fields: [{ name: 'val', type: 'string' }, { name: 'lab', type: 'string' }, { name: 'desc', type: 'string' }] }] })
])

export const homeSection32 = createSection('homeSection32', 'Home Section 32 (Engineering Labs)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }), // "Product Engineering Labs"
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'desc', type: 'string' }] }] }),
    defineField({ name: 'status', title: 'Status', type: 'string' })
])

export const homeSection33 = createSection('homeSection33', 'Home Section 33 (Enterprise Data Command)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'metrics', title: 'Metrics', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'value', type: 'string' }] }] })
])


export const homeSection34 = createSection('homeSection34', 'Home Section 34 (Elastic Architecture)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }), // "Elastic Architecture"
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [{ type: 'object', fields: [{ name: 'val', type: 'string' }, { name: 'lab', type: 'string' }] }] })
])

export const homeSection35 = createSection('homeSection35', 'Home Section 35 (Banking-Grade)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }), // "Banking-Grade Obsidian Guard"
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'desc', type: 'string' }] }] })
])

export const homeSection36 = createSection('homeSection36', 'Home Section 36 (Green Computing)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }), // "Green Computing"
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [{ type: 'object', fields: [{ name: 'val', type: 'string' }, { name: 'lab', type: 'string' }] }] })
])

export const homeSection37 = createSection('homeSection37', 'Home Section 37 (Founders)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'founders', title: 'Founders List', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'name', type: 'string' },
                { name: 'role', type: 'string' },
                { name: 'bio', type: 'text' },
                { name: 'image', type: 'image' }
            ]
        }]
    })
])

export const homeSection38 = createSection('homeSection38', 'Home Section 38 (Dome Gallery)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] })
])

export const homeSection39 = createSection('homeSection39', 'Home Section 39 (Professional Assistance)', [
    defineField({ name: 'heading1', title: 'Heading Line 1', type: 'string' }), // "Give your business the"
    defineField({ name: 'heading2', title: 'Highlighted Text', type: 'string' }), // "Professional Assistance"
    defineField({ name: 'heading3', title: 'Heading Line 2', type: 'string' }), // "it requires with our team"
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Team Image', type: 'image', options: { hotspot: true } })
])

export const homeSection40 = createSection('homeSection40', 'Home Section 40 (Video Section)', [
    defineField({ name: 'videoUrl', title: 'Video URL', type: 'url' }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' })
])

export const homeSection41 = createSection('homeSection41', 'Home Section 41 (Testimonials)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'testimonials', title: 'Testimonials List', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'quote', type: 'text' },
                { name: 'author', type: 'string' },
                { name: 'role', type: 'string' },
                { name: 'company', type: 'string' },
                { name: 'image', type: 'image' }
            ]
        }]
    })
])

export const homeSection42 = createSection('homeSection42', 'Home Section 42 (Global Operations)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({
        name: 'metrics', title: 'Metrics', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'value', type: 'string' },
                { name: 'label', type: 'string' },
                { name: 'sublabel', type: 'string' }
            ]
        }]
    })
])

export const homeSection43 = createSection('homeSection43', 'Home Section 43 (FAQ)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
        name: 'faqs', title: 'FAQs', type: 'array', of: [{
            type: 'object', fields: [
                { name: 'question', type: 'string' },
                { name: 'answer', type: 'text' }
            ]
        }]
    })
])

export const homeSection44 = createSection('homeSection44', 'Home Section 44 (Culture)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' })
])

export const homeSection45 = createSection('homeSection45', 'Home Section 45 (Careers List)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' })
])

export const homeSection46 = createSection('homeSection46', 'Home Section 46 (Blog List)', [
    defineField({ name: 'heading', title: 'Heading', type: 'string' })
])

