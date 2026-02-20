import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function fix() {
    const current = await client.fetch(`*[_id == "homeSection25"][0]`);
    console.log('📋 Current document:', JSON.stringify(current, null, 2));

    const doc = {
        _id: 'homeSection25',
        _type: 'homeSection25',
        title: 'Home Section 25 (Innovation Framework)',
        heading: 'Enterprise Product Innovation Framework',
        subheading: 'Structured Software Engineering for Long-Term Scalability.',
        phases: [
            { _key: 'phase1', step: '01', title: 'Blueprinting', icon: 'Code' },
            { _key: 'phase2', step: '02', title: 'Microservices', icon: 'Server' },
            { _key: 'phase3', step: '03', title: 'Secure DevOps', icon: 'Shield' },
            { _key: 'phase4', step: '04', title: 'Rollouts', icon: 'Rocket' },
            { _key: 'phase5', step: '05', title: 'Iteration', icon: 'RefreshCcw' },
        ]
    };

    const result = await client.createOrReplace(doc);
    console.log('✅ Document created/updated!');
    console.log('   Phases:', result.phases?.map(p => `${p.step} ${p.title} (${p.icon})`));
}

fix().catch(err => console.error('❌ Error:', err.message));
