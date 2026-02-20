import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function check() {
    const docs = await client.fetch(`*[_type == "homeSection13"]{_id, heading, _updatedAt}`);
    console.log(JSON.stringify(docs, null, 2));
}

check().catch(console.error);
