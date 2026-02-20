import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function run() {
    const data = {
        _id: 'homeSection13',
        _type: 'homeSection13',
        heading: "Enterprise Solutions That Deliver Outcomes.",
        buttonText: "Explore All Case Studies",
        buttonLink: "/about", // Updated to /about
        caseStudies: [
            {
                _key: "1",
                title: "FinGuard Core",
                description: "AI-powered banking core processing millions of transactions with real-time fraud detection.",
                stat1: "99.9%",
                stat2: "40%"
            },
            {
                _key: "2",
                title: "MediSync Pro",
                description: "Telehealth platform connecting patients with specialists in under 2 minutes with integrated EHR.",
                stat1: "300%",
                stat2: "15m"
            },
            {
                _key: "3",
                title: "LogiChain AI",
                description: "Predictive AI optimizing global fleet routes, reducing fuel consumption across 50+ countries.",
                stat1: "25%",
                stat2: "Real-time"
            },
            {
                _key: "4",
                title: "RetailFlow",
                description: "Omni-channel platform unifying online and offline customer data to drive personalized loyalty.",
                stat1: "40%",
                stat2: "2x"
            }
        ]
    };

    console.log('Restoring homeSection13 with /about link...');
    await client.createOrReplace(data);
    console.log('✅ Restoration complete.');

    // Cleanup drafts to avoid schema mismatch errors if stay on a draft
    await client.delete('drafts.homeSection13').catch(() => { });
    console.log('✅ Cleanup drafts complete.');
}

run().catch(console.error);
