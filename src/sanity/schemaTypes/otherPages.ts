
import { defineField, defineType } from 'sanity'





export const contactPage = defineType({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'Contact', readOnly: true }),
        defineField({ name: 'hero', title: 'Hero Section', type: 'hero' }),
    ],
})

export const blogPage = defineType({
    name: 'blogPage',
    title: 'Blog Page',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Page Title', type: 'string', initialValue: 'Blog', readOnly: true }),
        defineField({ name: 'hero', title: 'Hero Section', type: 'hero' }),
        defineField({ name: 'blogList', title: 'Blog List Configuration', type: 'blogList' }),
    ],
})
