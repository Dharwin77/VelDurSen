import { createClient } from '@sanity/client';

const token = process.argv[2];
if (!token) {
    console.error('❌ Missing token argument');
    process.exit(1);
}

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-05-03',
    token: token,
    useCdn: false,
});

async function run() {
    try {
        console.log('🔄 Adding "author" field to homeSection29...');

        // Fetch current doc to see if author exists
        const doc = await client.getDocument('homeSection29');
        if (!doc) {
            console.error('❌ Document homeSection29 not found!');
            return;
        }

        if (doc.author) {
            console.log(`✅ Author already set to: "${doc.author}"`);
            return;
        }

        // Patch
        const res = await client
            .patch('homeSection29')
            .set({ author: 'Visionary Execution' })
            .commit();

        console.log('✅ Successfully updated homeSection29 with author field.');
        console.log('Author:', res.author);

    } catch (err) {
        console.error('❌ Error updating document:', err.message);
    }
}

run();
