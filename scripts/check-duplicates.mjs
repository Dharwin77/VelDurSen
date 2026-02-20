import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function check() {
    console.log('🔍 Checking for homeSection29 documents...');
    const docs = await client.fetch(`*[_type == "homeSection29"]{_id, _type, heading, subheading}`);
    console.log(`Found ${docs.length} documents:`);
    docs.forEach(d => {
        console.log(`- ID: ${d._id}`);
        console.log(`  Heading: ${d.heading}`);
        console.log(`  Subheading: ${d.subheading}`);
    });

    if (docs.length > 1) {
        console.log('⚠️  WARNING: Multiple documents found! Creating confusion.');
    } else if (docs.length === 0) {
        console.log('❌ ERROR: No document found!');
    } else {
        console.log('✅ Single document found (Correct).');
    }
}

check().catch(err => console.error('❌ Error:', err.message));
