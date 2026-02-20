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
        console.log('🔄 Fixing homeSection39 structure...');

        const currentDoc = await client.getDocument('homeSection39');
        if (!currentDoc) {
            console.log('Creating new document...');
            await client.create({
                _id: 'homeSection39',
                _type: 'homeSection39',
                heading1: 'Give your business the',
                heading2: 'Professional Assistance',
                heading3: 'it requires with our team',
                description: 'Your vision is our starting point. Our team of expert developers, with 16+ years of experience, harmoniously collaborates with your team to create the custom software solution you aspire to.'
            });
        } else {
            console.log('Updating existing document...');
            await client
                .patch('homeSection39')
                .set({
                    heading1: 'Give your business the',
                    heading2: 'Professional Assistance',
                    heading3: 'it requires with our team',
                    description: currentDoc.description || 'Your vision is our starting point. Our team of expert developers, with 16+ years of experience, harmoniously collaborates with your team to create the custom software solution you aspire to.'
                })
                .unset(['heading']) // Remove old field
                .commit();
        }

        console.log('✅ Updated homeSection39 successfully.');

    } catch (err) {
        console.error('❌ Error updating document:', err.message);
    }
}

run();
