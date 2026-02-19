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

                                        // Refined Sections 15-19 per user request
                                        S.listItem().title('15. Enterprise CRM').child(S.document().schemaType('homeSection14').documentId('homeSection14')),
                                        S.listItem().title('16. Product Focus').child(S.document().schemaType('homeSection20').documentId('homeSection20')),
                                        S.listItem().title('17. Our Expertise').child(S.document().schemaType('homeSection15').documentId('homeSection15')),
                                        S.listItem().title('18. Automation').child(S.document().schemaType('homeSection16').documentId('homeSection16')),
                                        S.listItem().title('19. Why Choose').child(S.document().schemaType('homeSection17').documentId('homeSection17')),

                                        // Continuing with subsequent sections, adjusting numbering as needed or keeping distinct
                                        // The user mentioned "then comes why choose", implying the list continues or ends there.
                                        // I will keep the remaining unique sections but re-number them to avoid gaps/confusion, 
                                        // or comment out ones that seem plainly redundant (like the duplicate Why Choose).

                                        // Previous 24. Accelerators -> Now 20
                                        S.listItem().title('20. Accelerators').child(S.document().schemaType('homeSection24').documentId('homeSection24')),
                                        // Previous 25. Innovation -> Now 21
                                        S.listItem().title('21. Innovation Framework').child(S.document().schemaType('homeSection25').documentId('homeSection25')),
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
                                        // Shifted sections
                                        S.listItem().title('37. Dome Gallery').child(S.document().schemaType('homeSection38').documentId('homeSection38')),
                                        S.listItem().title('38. Professional Assistance').child(S.document().schemaType('homeSection39').documentId('homeSection39')),
                                        S.listItem().title('39. Video Section').child(S.document().schemaType('homeSection40').documentId('homeSection40')),
                                        S.listItem().title('40. Testimonials').child(S.document().schemaType('homeSection41').documentId('homeSection41')),
                                    ])
                            ),
                        S.listItem()
                            .title('About Page Content')
                            .child(
                                S.list()
                                    .title('Sections')
                                    .items([
                                        S.listItem().title('01. Hero').child(S.document().schemaType('aboutSection1').documentId('aboutSection1')),
                                        S.listItem().title('02. Our Story').child(S.document().schemaType('aboutSection2').documentId('aboutSection2')),
                                        S.listItem().title('03. Vision').child(S.document().schemaType('aboutSection3').documentId('aboutSection3')),
                                        S.listItem().title('04. Mission').child(S.document().schemaType('aboutSection4').documentId('aboutSection4')),
                                        S.listItem().title('05. Leadership').child(S.document().schemaType('aboutSection5').documentId('aboutSection5')),
                                        S.listItem().title('06. Evolution').child(S.document().schemaType('aboutSection6').documentId('aboutSection6')),
                                        S.listItem().title('07. Cultural Fabric').child(S.document().schemaType('aboutSection7').documentId('aboutSection7')),
                                        S.listItem().title('08. Core Values').child(S.document().schemaType('aboutSection8').documentId('aboutSection8')),
                                        S.listItem().title('09. How We Work').child(S.document().schemaType('aboutSection9').documentId('aboutSection9')),
                                        S.listItem().title('10. Team BTS').child(S.document().schemaType('aboutSection10').documentId('aboutSection10')),
                                    ])
                            ),
                        S.listItem()
                            .title('Services Page Content')
                            .child(
                                S.list()
                                    .title('Sections')
                                    .items([
                                        S.listItem().title('01. Hero').child(S.document().schemaType('servicesHero').documentId('servicesHero')),
                                        S.listItem().title('02. What\'s Included').child(S.document().schemaType('whatsIncluded').documentId('whatsIncluded')),
                                        S.listItem().title('03. What\'s Included Explanation').child(S.document().schemaType('whatsIncludedExplanation').documentId('whatsIncludedExplanation')),
                                        S.listItem().title('04. Our Services').child(S.document().schemaType('ourServices').documentId('ourServices')),
                                        S.listItem().title('05. Technology Pillars').child(S.document().schemaType('technologyPillars').documentId('technologyPillars')),
                                        S.listItem().title('06. Bridging the Gap').child(S.document().schemaType('bridgingTheGap').documentId('bridgingTheGap')),
                                        S.listItem().title('07. The Path').child(S.document().schemaType('thePath').documentId('thePath')),
                                        S.listItem().title('08. Reliability').child(S.document().schemaType('reliability').documentId('reliability')),
                                        S.listItem().title('09. Innovation Engine').child(S.document().schemaType('innovationEngine').documentId('innovationEngine')),
                                        S.listItem().title('10. Why Global Leaders Choose Us').child(S.document().schemaType('whyGlobalLeadersChooseUs').documentId('whyGlobalLeadersChooseUs')),
                                        S.listItem().title('11. Client Stories').child(S.document().schemaType('clientStories').documentId('clientStories')),
                                        S.listItem().title('12. Our Industries').child(S.document().schemaType('ourIndustries').documentId('ourIndustries')),
                                        S.listItem().title('13. Strategic Differentiation').child(S.document().schemaType('strategicDifferentiation').documentId('strategicDifferentiation')),
                                        S.listItem().title('14. The VelDurSen Advantage').child(S.document().schemaType('velDurSenAdvantage').documentId('velDurSenAdvantage')),
                                    ])
                            ),

                        S.listItem()
                            .title('Blog Page Content')
                            .child(
                                S.list()
                                    .title('Sections')
                                    .items([
                                        S.listItem().title('01. Hero').child(S.document().schemaType('blogPageHero').documentId('blogPageHero')),
                                    ])
                            ),
                        S.listItem()
                            .title('Blog Posts')
                            .child(S.documentTypeList('blogPost').title('All Blog Posts')),
                        S.listItem()
                            .title('Careers Page Content')
                            .child(
                                S.list()
                                    .title('Sections')
                                    .items([
                                        S.listItem().title('01. Hero').child(S.document().schemaType('careersHero').documentId('careersHero')),
                                        S.listItem().title('02. Our Approach').child(S.document().schemaType('careersOurApproach').documentId('careersOurApproach')),
                                        S.listItem().title('03. Life at Veldursen').child(S.document().schemaType('careersLifeAtVeldursen').documentId('careersLifeAtVeldursen')),
                                        S.listItem().title('04. Growth').child(S.document().schemaType('careersGrowth').documentId('careersGrowth')),
                                        S.listItem().title('05. A Day in the Life').child(S.document().schemaType('careersDayInTheLife').documentId('careersDayInTheLife')),
                                        S.listItem().title('06. Find Your Perfect Role').child(S.document().schemaType('careersFindYourRole').documentId('careersFindYourRole')),
                                        S.listItem().title('07. Our Hiring Journey').child(S.document().schemaType('careersHiringJourney').documentId('careersHiringJourney')),
                                        S.listItem().title('08. Hear From Our Team').child(S.document().schemaType('careersHearFromTeam').documentId('careersHearFromTeam')),
                                        S.listItem().title('09. FAQ').child(S.document().schemaType('careersFAQ').documentId('careersFAQ')),
                                        S.listItem().title('10. Ready to Make an Impact?').child(S.document().schemaType('careersReadyToMakeImpact').documentId('careersReadyToMakeImpact')),
                                    ])
                            ),
                        S.listItem()
                            .title('Contact')
                            .child(S.document().schemaType('contactPage').documentId('contact')),

                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
