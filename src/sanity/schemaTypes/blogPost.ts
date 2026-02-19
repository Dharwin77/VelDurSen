import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
            initialValue: '5 min read',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        defineField({
            name: 'coverImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'sections',
            title: 'Post Sections',
            description: 'Add references to section documents (Content, Cards, Applications, Challenges, Conclusion)',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    name: 'sectionReference',
                    title: 'Section Reference',
                    to: [
                        { type: 'blogNormalSection' },
                        { type: 'blogCards' },
                        { type: 'blogRealWorldApplications' },
                        { type: 'blogChallenges' },
                        { type: 'blogConclusion' },
                    ]
                }
            ]
        }),
    ],
})
