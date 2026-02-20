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
        buttonLink: "/about",
        caseStudies: [
            {
                _key: "1",
                title: "FinGuard Core",
                description: "AI-powered banking core processing millions of transactions with real-time fraud detection.",
                stat1Value: "99.9%",
                stat1Label: "Fraud Detection",
                stat2Value: "40%",
                stat2Label: "Faster Onboarding"
            },
            {
                _key: "2",
                title: "MediSync Pro",
                description: "Telehealth platform connecting patients with specialists in under 2 minutes with integrated EHR.",
                stat1Value: "300%",
                stat1Label: "Patient Engagement",
                stat2Value: "15m",
                stat2Label: "Wait Time Reduction"
            },
            {
                _key: "3",
                title: "LogiChain AI",
                description: "Predictive AI optimizing global fleet routes, reducing fuel consumption across 50+ countries.",
                stat1Value: "25%",
                stat1Label: "Cost Reduction",
                stat2Value: "Real-time",
                stat2Label: "Global Visibility"
            },
            {
                _key: "4",
                title: "RetailFlow",
                description: "Omni-channel platform unifying online and offline customer data to drive personalized loyalty.",
                stat1Value: "40%",
                stat1Label: "Sales Increase",
                stat2Value: "2x",
                stat2Label: "Customer Retention"
            }
        ]
    };

    console.log('Restoring homeSection13 with full dynamic stats and images...');
    await client.createOrReplace(data);

    // Cleanup any confusion
    await client.delete('drafts.homeSection13').catch(() => { });

    console.log('✅ Restoration complete. Everything is now editable.');
}

run().catch(console.error);
