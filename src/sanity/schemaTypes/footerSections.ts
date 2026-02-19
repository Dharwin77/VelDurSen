import { defineField, defineType } from 'sanity'

// 1. Company Column
export const footerCompany = defineType({
    name: 'footerCompany',
    title: 'Footer: Company',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Column Title', type: 'string', initialValue: 'Company' }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'link', type: 'string', title: 'Link (URL or Path)' },
                    ]
                }
            ],
            initialValue: [
                { label: 'About Us', link: '/about' },
                { label: 'Careers', link: '/careers' },
                { label: 'Internships', link: '/careers#internships' },
                { label: 'Achievements', link: '/#achievements' },
                { label: 'Contact Us', link: '/contact' },
            ]
        })
    ],
})

// 2. Services Column
export const footerServices = defineType({
    name: 'footerServices',
    title: 'Footer: Services',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Column Title', type: 'string', initialValue: 'Services' }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'link', type: 'string', title: 'Link (URL or Path)' },
                    ]
                }
            ],
            initialValue: [
                { label: 'All Services', link: '/services' },
                { label: 'Solutions Architecture', link: '/services#solutions' },
                { label: 'Technology Pillars', link: '/services#pillars' },
                { label: 'Engineering Excellence', link: '/services#engineering' },
                { label: 'Performance & Scalability', link: '/services#performance' },
            ]
        })
    ],
})

// 3. Industries Column
export const footerIndustries = defineType({
    name: 'footerIndustries',
    title: 'Footer: Industries',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Column Title', type: 'string', initialValue: 'Industries' }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'link', type: 'string', title: 'Link (URL or Path)' },
                    ]
                }
            ],
            initialValue: [
                { label: 'Our Industries', link: '/industries' },
                { label: 'Healthcare', link: '/industries/healthcare' },
                { label: 'Education', link: '/industries/education' },
                { label: 'Manufacturing', link: '/industries/manufacturing' },
                { label: 'Retail', link: '/industries/retail' },
                { label: 'FinTech', link: '/industries/fintech' },
            ]
        })
    ],
})

// 4. Resources Column (Fixed Links to Legal Pages)
export const footerResources = defineType({
    name: 'footerResources',
    title: 'Footer: Resources',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Column Title', type: 'string', initialValue: 'Resources' }),
        defineField({
            name: 'note',
            title: 'Note',
            type: 'string',
            readOnly: true,
            initialValue: 'Links in this section are fixed to: Sitemap, Privacy Policy, Terms of Service, Security. Manage their content in "Legal & Support Pages".'
        })
    ],
})

// 5. Branding (Logo, Title, Desc)
export const footerBranding = defineType({
    name: 'footerBranding',
    title: 'Footer: Branding',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'brandName',
            title: 'Brand Name',
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
            title: 'Description',
            type: 'text',
            initialValue: 'VelDurSen hosts a dynamic team of tech enthusiasts and incredibly skilled developers dedicated to creating some of the most bespoke software solutions for a wide variety of businesses and a plethora of industry verticals.'
        }),
    ],
})

// 6. Social Media
export const footerSocial = defineType({
    name: 'footerSocial',
    title: 'Footer: Social Media',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Follow Us' }),
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
    ],
})

// 7. Country Marquee
export const footerMarquee = defineType({
    name: 'footerMarquee',
    title: 'Footer: Country Marquee',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Country Marquee' }),
        defineField({
            name: 'countries',
            title: 'Countries List',
            description: 'Add country names to display in the scrolling marquee above the footer.',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                "INDIA", "LONDON", "USA", "AUSTRALIA", "UAE", "EUROPE",
                "SINGAPORE", "NEW ZEALAND", "CANADA", "GERMANY", "JAPAN",
                "FRANCE", "SWITZERLAND"
            ]
        })
    ]
})
