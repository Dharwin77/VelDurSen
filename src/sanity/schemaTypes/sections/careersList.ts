import { defineField, defineType } from 'sanity'

export const careersList = defineType({
    name: 'careersList',
    title: 'Careers List Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'jobs',
            title: 'Jobs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'role', type: 'string', title: 'Role' },
                        { name: 'department', type: 'string', title: 'Department' },
                        { name: 'location', type: 'string', title: 'Location' },
                        { name: 'type', type: 'string', title: 'Job Type', options: { list: ['Full-time', 'Part-time', 'Contract', 'Internship'] } },
                        { name: 'description', type: 'text', title: 'Short Description' },
                        { name: 'applyLink', type: 'string', title: 'Apply Link (or email)' },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Careers List',
                subtitle: 'Careers',
            }
        }
    }
})
