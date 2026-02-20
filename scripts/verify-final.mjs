import { createClient } from '@sanity/client';
import fs from 'fs';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function run() {
    const doc = await client.fetch(`*[_id == "homeSection13"][0]`);
    fs.writeFileSync('s13_final_verify.json', JSON.stringify(doc, null, 2));
    console.log('Written to s13_final_verify.json');
}

run().catch(console.error);
