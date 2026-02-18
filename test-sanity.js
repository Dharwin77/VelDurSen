import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
});

async function testFetch() {
    try {
        console.log("--- FETCHING ALL homeSection8 ---");
        const sections = await client.fetch('*[_type == "homeSection8"]');
        console.log("Count:", sections.length);
        sections.forEach(doc => {
            console.log("ID:", doc._id);
            console.log("Heading:", doc.heading);
            console.log("Text:", JSON.stringify(doc.text));
            console.log("-------------------");
        });

    } catch (err) {
        console.error("Error:", err);
    }
}

testFetch();
