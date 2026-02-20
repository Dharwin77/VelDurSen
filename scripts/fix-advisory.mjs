import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function fix() {
    console.log('🔄 Fixing homeSection29 (Advisory)...');

    // Unset the unknown 'caption' field if it exists
    try {
        const doc = await client.fetch(`*[_id == "homeSection29"][0]`);
        if (doc?.caption) {
            console.log('Found rogue caption field. Unsetting...');
            await client.patch('homeSection29').unset(['caption']).commit();
        }
    } catch (e) {
        console.log('Error checking caption:', e.message);
    }

    const docData = {
        _id: 'homeSection29',
        _type: 'homeSection29',
        title: 'Home Section 29 (Advisory)',
        heading: 'Advisory & Leadership', // User: heading
        subheading: 'Strategic Consulting.', // User: subheading
        description: 'We align multi-decade technology roadmaps with immediate business performance, navigating the complexity of global digital transformation.', // User: desc
        quote: 'Strategy is useless without the engineering depth to execute it. VelDurSen bridges that gap.', // User: Quote under 'Visionary Execution'
        initiatives: [
            { _key: 'init1', title: 'Office of the CTO', desc: 'Advisory Council' },
            { _key: 'init2', title: 'Digital Strategy', desc: 'Restructuring digital operations for risk resilience.' },
            { _key: 'init3', title: 'CRM Transformation', desc: 'Enterprise-wide adoption roadmaps and optimization.' },
            { _key: 'init4', title: 'AI Integration', desc: 'Strategic implementation of predictive models.' },
        ]
    };

    const result = await client.createOrReplace(docData);
    console.log('✅ homeSection29 fixed!');
    console.log('   Heading:', result.heading);
    console.log('   Initiatives:', result.initiatives?.map(i => i.title));
}

fix().catch(err => console.error('❌ Error:', err.message));
