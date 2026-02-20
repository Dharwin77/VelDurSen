import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function check() {
    const doc = await client.fetch(`*[_id == "homeSection26"][0]`);
    console.log('📋 homeSection26 (Global Delivery):', JSON.stringify(doc, null, 2));
}

check().catch(err => console.error('❌ Error:', err.message));
