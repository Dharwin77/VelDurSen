import { createClient } from '@sanity/client';

const client = createClient({
    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: process.env.VITE_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
    token: process.env.SANITY_API_TOKEN // Optional: for private datasets/write access
});

if (!process.env.VITE_SANITY_PROJECT_ID) {
    console.warn("Warning: VITE_SANITY_PROJECT_ID is not set. The client might not work.");
}

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
