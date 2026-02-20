import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function search() {
    const results = await client.fetch(`*[heading match "Outcomes" || title match "Outcomes"]{_id, _type, heading, title}`);
    console.log('Search results:', JSON.stringify(results, null, 2));

    const s13Count = await client.fetch(`count(*[_type == "homeSection13"])`);
    console.log('Total homeSection13 documents:', s13Count);
}

search().catch(console.error);
