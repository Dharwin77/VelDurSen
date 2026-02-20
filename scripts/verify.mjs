import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});
const doc = await client.fetch(`*[_id == "homeSection20"][0]`);
console.log("features count:", doc?.features?.length);
console.log("features:", doc?.features);
