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
        console.log('🔄 Checking globalSettings...');
        const doc = await client.fetch('*[_type == "globalSettings"][0]');

        if (!doc) {
            console.log('Creating globalSettings document...');
            await client.create({
                _type: 'globalSettings',
                loadingText: 'Welcome to VelDurSen'
            });
        } else {
            console.log('Updating globalSettings document...');
            await client
                .patch(doc._id)
                .setIfMissing({ loadingText: 'Welcome to VelDurSen' })
                .commit();
        }
        console.log('✅ globalSettings updated.');
    } catch (err) {
        console.error('❌ Error:', err.message);
    }
}

run();
