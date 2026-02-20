import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function fix() {
    // Check both published and draft versions
    const published = await client.fetch(`*[_id == "homeSection26"][0]`);
    const draft = await client.fetch(`*[_id == "drafts.homeSection26"][0]`);

    console.log('📋 Published has founders?', !!published?.founders);
    console.log('📋 Draft has founders?', !!draft?.founders);

    // Remove founders from published version and set correct data
    if (published) {
        console.log('🔄 Fixing published homeSection26...');
        await client
            .patch('homeSection26')
            .unset(['founders'])
            .set({
                title: 'Home Section 26 (Global Delivery Ecosystem)',
                heading: 'Meet the Minds Behind VelDurSen',
                badge: 'Global Presence',
                description: 'Our distributed technology centers enable "Follow-the-Sun" engineering cycles, ensuring uninterrupted innovation benchmarks and rapid response scalability across every timezone.',
                regions: [
                    'North America',
                    'Europe',
                    'Asia-Pacific',
                    'Middle East',
                    'Latin America',
                ],
                features: [
                    { _key: 'feat1', title: 'Sustained Operational Uptime', desc: 'Redundant governance ensuring system continuity.' },
                    { _key: 'feat2', title: 'Localized Compliance Hubs', desc: 'Data residency and regional regulatory alignment.' },
                ]
            })
            .commit();
        console.log('✅ Published fixed!');
    }

    // Remove founders from draft version too
    if (draft) {
        console.log('🔄 Fixing draft homeSection26...');
        await client
            .patch('drafts.homeSection26')
            .unset(['founders'])
            .set({
                title: 'Home Section 26 (Global Delivery Ecosystem)',
                heading: 'Meet the Minds Behind VelDurSen',
                badge: 'Global Presence',
                description: 'Our distributed technology centers enable "Follow-the-Sun" engineering cycles, ensuring uninterrupted innovation benchmarks and rapid response scalability across every timezone.',
                regions: [
                    'North America',
                    'Europe',
                    'Asia-Pacific',
                    'Middle East',
                    'Latin America',
                ],
                features: [
                    { _key: 'feat1', title: 'Sustained Operational Uptime', desc: 'Redundant governance ensuring system continuity.' },
                    { _key: 'feat2', title: 'Localized Compliance Hubs', desc: 'Data residency and regional regulatory alignment.' },
                ]
            })
            .commit();
        console.log('✅ Draft fixed!');
    }

    // Verify
    const final = await client.fetch(`*[_id in ["homeSection26", "drafts.homeSection26"]]`);
    for (const doc of final) {
        console.log(`\n📋 ${doc._id}:`);
        console.log('   founders?', !!doc.founders);
        console.log('   heading:', doc.heading);
        console.log('   regions:', doc.regions);
    }
}

fix().catch(err => console.error('❌ Error:', err.message));
