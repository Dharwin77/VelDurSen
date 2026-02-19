import { defineField, defineType } from 'sanity'

// 1. Hero
export const contactHero = defineType({
    name: 'contactHero',
    title: 'Contact Hero',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Contact & Support' }),
        defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string', initialValue: "Let's Build the" }),
        defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string', initialValue: 'Extraordinary.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'backgroundVideo', title: 'Background Video (Upload)', type: 'file', options: { accept: 'video/*' } }),
    ],
})

// 2. Connectivity Status (Digital Command Center)
export const contactConnectivity = defineType({
    name: 'contactConnectivity',
    title: 'Connectivity Status',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Connectivity Status' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Live Operations' }),
        defineField({ name: 'systemStatus', title: 'System Status', type: 'string', initialValue: 'OPTIMAL' }),
        defineField({ name: 'avgResponseTime', title: 'Avg Response Time', type: 'string', initialValue: '< 15 mins' }),
        defineField({
            name: 'locations',
            title: 'Active Locations',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'city', title: 'City', type: 'string' }),
                    defineField({ name: 'timeZone', title: 'Time Zone Label', type: 'string' }),
                    defineField({ name: 'status', title: 'Status', type: 'string', initialValue: 'Active' }),
                    defineField({ name: 'color', title: 'Status Color Class', type: 'string', initialValue: 'bg-emerald-500' }),
                ]
            }]
        })
    ],
})

// 3. Initiate Request (Form Section)
export const contactRequest = defineType({
    name: 'contactRequest',
    title: 'Initiate Request',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Initiate Request' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({
            name: 'formLabels',
            title: 'Form Labels & Placeholders',
            type: 'object',
            fields: [
                defineField({ name: 'firstNameLabel', title: 'First Name Label', type: 'string', initialValue: 'First Name' }),
                defineField({ name: 'lastNameLabel', title: 'Last Name Label', type: 'string', initialValue: 'Last Name' }),
                defineField({ name: 'emailLabel', title: 'Email Label', type: 'string', initialValue: 'Work Email' }),
                defineField({ name: 'companyLabel', title: 'Company Label', type: 'string', initialValue: 'Company Name' }),
                defineField({ name: 'budgetLabel', title: 'Budget Label', type: 'string', initialValue: 'Estimated Project Budget' }),
                defineField({ name: 'urgencyLabel', title: 'Urgency Label', type: 'string', initialValue: 'Urgent Request?' }),
                defineField({ name: 'urgencyDesc', title: 'Urgency Description', type: 'string', initialValue: 'Priority routing to senior architects.' }),
                defineField({ name: 'messageLabel', title: 'Message Label', type: 'string', initialValue: 'Project Brief' }),
            ]
        }),
        defineField({
            name: 'budgetOptions',
            title: 'Budget Range Options',
            description: 'Add exactly 5 values for the budget slider (e.g., $50k+, $100k+)',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ['$50k+', '$100k+', '$250k+', '$500k+', '$1M+']
        }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Deploy Inquiry' }),
    ],
})

// 4. Executive Line
export const contactExecutive = defineType({
    name: 'contactExecutive',
    title: 'Executive Line',
    type: 'document',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Executive Line' }),
        defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string', initialValue: '+1 (800) 555-TECH' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
    ],
})

// 5. Global Persistence (Map)
export const contactGlobal = defineType({
    name: 'contactGlobal',
    title: 'Global Persistence',
    type: 'document',
    fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', initialValue: 'Global Persistence' }),
        defineField({ name: 'headingLine1', title: 'Heading Line 1', type: 'string', initialValue: 'Empowering' }),
        defineField({ name: 'headingLine2', title: 'Heading Line 2', type: 'string', initialValue: '4 Continents.' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'mapImage', title: 'Map Image', type: 'image', options: { hotspot: true } }),
        defineField({
            name: 'markers',
            title: 'Map Markers',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'top', title: 'Top Position (%)', type: 'string' }),
                    defineField({ name: 'left', title: 'Left Position (%)', type: 'string' }),
                    defineField({ name: 'color', title: 'Color', type: 'string', initialValue: 'blue' }),
                ]
            }]
        })
    ],
})
