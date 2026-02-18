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
                            .title('Home Page Content')
                            .child(
                                S.list()
                                    .title('Sections')
                                    .items([
                                        S.listItem().title('01. Hero').child(S.document().schemaType('homeHero').documentId('homeHero')),
                                        S.listItem().title('02. Ticker').child(S.document().schemaType('homeSection1').documentId('homeSection1')),
                                        S.listItem().title('03. Connectivity').child(S.document().schemaType('homeSection2').documentId('homeSection2')),
                                        S.listItem().title('04. Our Story').child(S.document().schemaType('homeSection3').documentId('homeSection3')),
                                        S.listItem().title('05. Strategic Talent').child(S.document().schemaType('homeSection4').documentId('homeSection4')),
                                        S.listItem().title('06. Partners').child(S.document().schemaType('homeSection5').documentId('homeSection5')),
                                        S.listItem().title('07. Highlights').child(S.document().schemaType('homeSection6').documentId('homeSection6')),
                                        S.listItem().title('08. What We Provide').child(S.document().schemaType('homeSection7').documentId('homeSection7')),
                                        S.listItem().title('09. Excellence Benchmarks').child(S.document().schemaType('homeSection8').documentId('homeSection8')),
                                        S.listItem().title('10. Achievements Grid').child(S.document().schemaType('homeSection9').documentId('homeSection9')),
                                        S.listItem().title('11. Growth Trajectory').child(S.document().schemaType('homeSection10').documentId('homeSection10')),
                                        S.listItem().title('12. Deploy Milestones').child(S.document().schemaType('homeSection11').documentId('homeSection11')),
                                        S.listItem().title('13. Chronicle').child(S.document().schemaType('homeSection12').documentId('homeSection12')),
                                        S.listItem().title('14. Delivered Outcomes').child(S.document().schemaType('homeSection13').documentId('homeSection13')),
                                        S.listItem().title('15. CRM Content').child(S.document().schemaType('homeSection14').documentId('homeSection14')),
                                        S.listItem().title('16. Expertise').child(S.document().schemaType('homeSection15').documentId('homeSection15')),
                                        S.listItem().title('17. Automation').child(S.document().schemaType('homeSection16').documentId('homeSection16')),
                                        S.listItem().title('18. Why Choose').child(S.document().schemaType('homeSection17').documentId('homeSection17')),
                                        S.listItem().title('19. Sector Expertise').child(S.document().schemaType('homeSection18').documentId('homeSection18')),
                                        S.listItem().title('20. Product Engineering').child(S.document().schemaType('homeSection20').documentId('homeSection20')),
                                        S.listItem().title('21. CRM Use Cases').child(S.document().schemaType('homeSection21').documentId('homeSection21')),
                                        S.listItem().title('22. Intelligent Automation').child(S.document().schemaType('homeSection22').documentId('homeSection22')),
                                        S.listItem().title('23. Why Choose').child(S.document().schemaType('homeSection23').documentId('homeSection23')),
                                        S.listItem().title('24. Accelerators').child(S.document().schemaType('homeSection24').documentId('homeSection24')),
                                        S.listItem().title('25. Innovation Framework').child(S.document().schemaType('homeSection25').documentId('homeSection25')),
                                        // New 11 sections
                                        S.listItem().title('26. Global Delivery').child(S.document().schemaType('homeSection26').documentId('homeSection26')),
                                        S.listItem().title('27. Modernization').child(S.document().schemaType('homeSection27').documentId('homeSection27')),
                                        S.listItem().title('28. Beyond Deployment').child(S.document().schemaType('homeSection28').documentId('homeSection28')),
                                        S.listItem().title('29. Advisory').child(S.document().schemaType('homeSection29').documentId('homeSection29')),
                                        S.listItem().title('30. Core Blueprint').child(S.document().schemaType('homeSection30').documentId('homeSection30')),
                                        S.listItem().title('31. Commercial Resilience').child(S.document().schemaType('homeSection31').documentId('homeSection31')),
                                        S.listItem().title('32. Engineering Labs').child(S.document().schemaType('homeSection32').documentId('homeSection32')),
                                        S.listItem().title('33. Data Command').child(S.document().schemaType('homeSection33').documentId('homeSection33')),
                                        S.listItem().title('34. Elastic Architecture').child(S.document().schemaType('homeSection34').documentId('homeSection34')),
                                        S.listItem().title('35. Banking-Grade').child(S.document().schemaType('homeSection35').documentId('homeSection35')),
                                        S.listItem().title('36. Green Computing').child(S.document().schemaType('homeSection36').documentId('homeSection36')),
                                        // Shifted sections
                                        S.listItem().title('37. Founders').child(S.document().schemaType('homeSection37').documentId('homeSection37')),
                                        S.listItem().title('38. Dome Gallery').child(S.document().schemaType('homeSection38').documentId('homeSection38')),
                                        S.listItem().title('39. Professional Assistance').child(S.document().schemaType('homeSection39').documentId('homeSection39')),
                                        S.listItem().title('40. Video Section').child(S.document().schemaType('homeSection40').documentId('homeSection40')),
                                        S.listItem().title('41. Testimonials').child(S.document().schemaType('homeSection41').documentId('homeSection41')),
                                        S.listItem().title('42. Global Operations').child(S.document().schemaType('homeSection42').documentId('homeSection42')),
                                        S.listItem().title('43. FAQ').child(S.document().schemaType('homeSection43').documentId('homeSection43')),
                                        S.listItem().title('44. Culture').child(S.document().schemaType('homeSection44').documentId('homeSection44')),
                                        S.listItem().title('45. Careers List').child(S.document().schemaType('homeSection45').documentId('homeSection45')),
                                        S.listItem().title('46. Blog List').child(S.document().schemaType('homeSection46').documentId('homeSection46')),
                                    ])
                            ),
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
