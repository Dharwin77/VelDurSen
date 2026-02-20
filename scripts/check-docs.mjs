import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function check() {
    const s13 = await client.fetch(`*[_type == "homeSection13"]`);
    const s14 = await client.fetch(`*[_type == "homeSection14"]`);
    console.log('S13 (Delivered Outcomes) count:', s13.length);
    console.log('S14 (Enterprise CRM) count:', s14.length);
    if (s13.length > 0) console.log('S13 documents:', JSON.stringify(s13, null, 2));
    if (s14.length > 0) console.log('S14 documents:', JSON.stringify(s14, null, 2));
}

check().catch(console.error);
