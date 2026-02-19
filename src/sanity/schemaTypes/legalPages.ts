import { defineField, defineType } from 'sanity'

// 1. Sitemap
export const pageSitemap = defineType({
    name: 'pageSitemap',
    title: 'Page: Sitemap',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'Sitemap' }),
        defineField({ name: 'introText', title: 'Introduction Text', type: 'text' }),
        // Map allows flexible link adding if needed, or simple text for now
    ],
})

// 2. Privacy Policy
export const pagePrivacyPolicy = defineType({
    name: 'pagePrivacyPolicy',
    title: 'Page: Privacy Policy',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'Privacy Policy' }),
        defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
})

// 3. Terms of Service
export const pageTermsOfService = defineType({
    name: 'pageTermsOfService',
    title: 'Page: Terms of Service',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'Terms of Service' }),
        defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
})

// 4. Security
export const pageSecurity = defineType({
    name: 'pageSecurity',
    title: 'Page: Security',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'Security' }),
        defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
})
