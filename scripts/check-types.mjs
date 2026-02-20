import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: 'skhyazdkFR0CWFU9wUCAiaorxducd2BKyG6bVbWqZAYfjcUfWoUHBRF7fbEtP0L9gZHIDmWmnSFLgaU7kE5mQnfg5qqyOyvELGZBnIBY0v9INmEEwl8sXDylDUJMc89FrIc33TiBdyY41WwQSAip1sJWrmA4sLkjIMj4GwAuKJjgLM01Lhvl',
    useCdn: false,
});

async function run() {
    const s13 = await client.fetch(`count(*[_type == "homeSection13"])`);
    const s14 = await client.fetch(`count(*[_type == "homeSection14"])`);
    const doType = await client.fetch(`count(*[_type == "deliveredOutcomes"])`);
    console.log('homeSection13 count:', s13);
    console.log('homeSection14 count:', s14);
    console.log('deliveredOutcomes count:', doType);
}

run().catch(console.error);
