import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function run() {
    const published = await client.fetch(`*[_id == "homeSection13"][0]`);
    const draft = await client.fetch(`*[_id == "drafts.homeSection13"][0]`);
    console.log('Published homeSection13 exists:', !!published);
    console.log('Draft homeSection13 exists:', !!draft);
    if (draft) console.log('Draft content heading:', draft.heading);
    if (published) console.log('Published content heading:', published.heading);
}

run().catch(console.error);
