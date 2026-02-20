import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function fix() {
    const doc = await client.fetch(`*[_id == "homeSection15"][0]`);
    console.log('📋 Current areas count:', doc?.areas?.length || 0);
    console.log('📋 Current areas:', doc?.areas?.map((a) => a.title));

    if (!doc) {
        console.log('⚠️ Document not found. Nothing to update.');
        return;
    }

    // Check if Manufacturing B2B already exists
    const hasMfg = doc.areas?.some((a) => a.title?.includes('Manufacturing'));

    if (!hasMfg) {
        console.log('🔄 Adding "Manufacturing B2B" card...');
        const result = await client
            .patch('homeSection15')
            .append('areas', [{
                _key: 'area4',
                title: 'Manufacturing B2B',
                desc: 'Supply chain visibility, dealer network management, demand forecasting, and performance dashboards for large scale industries.',
            }])
            .commit();
        console.log('✅ Added! New areas count:', result.areas?.length);
        console.log('Areas:', result.areas?.map((a) => a.title));
    } else {
        console.log('✅ Manufacturing B2B already exists.');
    }
}

fix().catch(err => console.error('❌ Error:', err.message));
