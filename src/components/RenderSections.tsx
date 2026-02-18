import GlobalOperations from './sections/GlobalOperations';
import Testimonials from './sections/Testimonials';

import Founders from './sections/Founders';
import FAQ from './sections/FAQ';
import Culture from './sections/Culture';
import CareersList from './sections/CareersList';
import BlogList from './sections/BlogList';
import Timeline from './sections/Timeline';
import DeliveredOutcomes from './sections/DeliveredOutcomes';
import ProfessionalAssistance from './sections/ProfessionalAssistance';
import WhatWeAreUpto from './sections/WhatWeAreUpto';
import React from 'react';

// Map of Sanity _type to React Components
const sectionComponents: { [key: string]: React.ComponentType<any> } = {
    globalOperations: GlobalOperations,
    testimonials: Testimonials,
    founders: Founders,
    faq: FAQ,
    culture: Culture,
    careersList: CareersList,
    blogList: BlogList,
    whatWeAreUpto: WhatWeAreUpto,
    timeline: Timeline,
    deliveredOutcomes: DeliveredOutcomes,
    professionalAssistance: ProfessionalAssistance,
    // Add others as needed
};

export default function RenderSections({ sections }: { sections: any[] }) {
    if (!sections) return null;

    return (
        <>
            {sections.map((section) => {
                const Component = sectionComponents[section._type];
                if (!Component) {
                    // console.warn(`Unknown section type: ${section._type}`);
                    return null;
                }
                return <Component key={section._key} data={section} />;
            })}
        </>
    );
}
