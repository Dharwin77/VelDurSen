import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function publish() {
    const draft = await client.fetch(`*[_id == "drafts.homeSection13"][0]`);
    if (!draft) {
        console.error('❌ Draft not found! Recreating from seed...');
        const seedData = {
            _id: 'homeSection13',
            _type: 'homeSection13',
            heading: "Enterprise Solutions That Deliver Outcomes.",
            caseStudies: [
                { _key: "1", title: "FinGuard Core", description: "AI-powered banking core processing millions of transactions.", stat1: "99.9%", stat2: "40%" },
                { _key: "2", title: "MediSync Pro", description: "Telehealth platform connecting patients with specialists.", stat1: "300%", stat2: "15m" },
                { _key: "3", title: "LogiChain AI", description: "Predictive AI optimizing global fleet routes.", stat1: "25%", stat2: "Real-time" },
                { _key: "4", title: "RetailFlow", description: "Omni-channel platform unifying online and offline customer data.", stat1: "40%", stat2: "2x" }
            ]
        };
        await client.createOrReplace(seedData);
        console.log('✅ Recreated from seed.');
        return;
    }

    const { _id, ...content } = draft;
    await client.createOrReplace({
        ...content,
        _id: 'homeSection13',
    });
    console.log('✅ Published draft to homeSection13.');
}

publish().catch(console.error);
