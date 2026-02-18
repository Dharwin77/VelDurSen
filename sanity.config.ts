import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

// Get env variables or use defaults
// In a real app, these should be in .env
const projectId = 'kj78qpyy'
const dataset = 'production'

export default defineConfig({
    name: 'default',
    title: 'VelDurSen Studio',
    basePath: '/studio',

    projectId,
    dataset,

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Global Settings')
                            .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
                        S.divider(),
                        S.listItem()
                            .title('Home')
                            .child(S.document().schemaType('homePage').documentId('home')),
                        S.listItem()
                            .title('About Us')
                            .child(S.document().schemaType('aboutPage').documentId('about')),
                        S.listItem()
                            .title('What We Do')
                            .child(S.document().schemaType('whatWeDoPage').documentId('whatWeDo')),
                        S.listItem()
                            .title('Blog')
                            .child(S.document().schemaType('blogPage').documentId('blog')),
                        S.listItem()
                            .title('Careers')
                            .child(S.document().schemaType('careersPage').documentId('careers')),
                        S.listItem()
                            .title('Contact')
                            .child(S.document().schemaType('contactPage').documentId('contact')),
                        S.divider(),
                        S.listItem()
                            .title('Blog Posts')
                            .child(S.documentTypeList('blogPost').title('Blog Posts')),
                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
