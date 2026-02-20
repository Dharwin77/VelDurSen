import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function run() {
    // STEP 1: Delete old documents (published + drafts)
    console.log('Step 1: Deleting old homeSection13 documents...');
    await client.delete('homeSection13').catch(() => console.log('  No published doc to delete'));
    await client.delete('drafts.homeSection13').catch(() => console.log('  No draft doc to delete'));

    // STEP 2: Create fresh document with NO _type on array items
    // This matches the exact pattern used by homeSection9, homeSection10, etc.
    console.log('Step 2: Creating fresh homeSection13 document...');
    const data = {
        _id: 'homeSection13',
        _type: 'homeSection13',
        title: 'Home Section 13 (Delivered Outcomes)',
        heading: "Enterprise Solutions That Deliver Outcomes.",
        buttonText: "Explore All Case Studies",
        buttonLink: "/about",
        caseStudies: [
            {
                _key: "cs1",
                title: "FinGuard Core",
                description: "AI-powered banking core processing millions of transactions with real-time fraud detection.",
                stat1: "99.9%",
                stat1Label: "Fraud Detection",
                stat2: "40%",
                stat2Label: "Faster Onboarding"
            },
            {
                _key: "cs2",
                title: "MediSync Pro",
                description: "Telehealth platform connecting patients with specialists in under 2 minutes with integrated EHR.",
                stat1: "300%",
                stat1Label: "Patient Engagement",
                stat2: "15m",
                stat2Label: "Wait Time Reduction"
            },
            {
                _key: "cs3",
                title: "LogiChain AI",
                description: "Predictive AI optimizing global fleet routes, reducing fuel consumption across 50+ countries.",
                stat1: "25%",
                stat1Label: "Cost Reduction",
                stat2: "Real-time",
                stat2Label: "Global Visibility"
            },
            {
                _key: "cs4",
                title: "RetailFlow",
                description: "Omni-channel platform unifying online and offline customer data to drive personalized loyalty.",
                stat1: "40%",
                stat1Label: "Sales Increase",
                stat2: "2x",
                stat2Label: "Customer Retention"
            }
        ]
    };

    await client.createOrReplace(data);
    console.log('✅ Document created successfully!');

    // STEP 3: Verify
    const verify = await client.fetch(`*[_type == "homeSection13"][0]`);
    console.log('Step 3: Verification - document fields:', Object.keys(verify));
    console.log('  caseStudies count:', verify.caseStudies?.length);
    console.log('  First item keys:', Object.keys(verify.caseStudies[0]));
    console.log('  First item _type:', verify.caseStudies[0]._type || '(none - anonymous object ✅)');
    console.log('\n🎉 Done! Refresh Sanity Studio now.');
}

run().catch(console.error);
