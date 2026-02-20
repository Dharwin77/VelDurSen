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
        console.log('🔄 Cleaning up homeSection16 (Automation)...');

        // Remove the 'features' field which is not used in frontend
        await client
            .patch('homeSection16')
            .unset(['features'])
            .commit();

        console.log('✅ Successfully removed "features" field from homeSection16.');

    } catch (err) {
        console.error('❌ Error updating document:', err.message);
    }
}

run();
