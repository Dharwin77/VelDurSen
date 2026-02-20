/**
 * Script to update the "Product Focus" (homeSection20) document in Sanity
 * with all 6 features that the component expects.
 * 
 * Usage: node scripts/fix-product-focus.mjs YOUR_SANITY_TOKEN
 */

import { createClient } from '@sanity/client';

const token = process.argv[2];

if (!token) {
    console.error('\n❌ Please provide a Sanity API token as an argument.');
    console.error('   Usage: node scripts/fix-product-focus.mjs YOUR_TOKEN_HERE\n');
    process.exit(1);
}

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-08-01',
    token: token,
    useCdn: false,
});

async function fix() {
    // First, fetch the current document to see what's there
    const current = await client.fetch(`*[_id == "homeSection20"][0]`);
    console.log('📋 Current Product Focus document:', JSON.stringify(current, null, 2));

    if (!current) {
        console.log('\n⚠️  Document does not exist. Creating it...');
        const doc = {
            _id: 'homeSection20',
            _type: 'homeSection20',
            title: 'Home Section 20 (Product Focus)',
            heading: 'Product Engineering & SaaS Development',
            subheading: 'From concept validation to enterprise-grade scale.',
            description: "VelDurSen builds digital products with long-term architecture in mind. We don't just ship features — we design scalable SaaS ecosystems that evolve with your business. Every release is structured for reliability, security, and performance under real-world enterprise load.",
            features: [
                'Product Discovery',
                'Scalable Development',
                'Performance Optimization',
                'System Architecture',
                'Security Validation 🔐',
                'Continuous Enhancement 🚀'
            ]
        };
        const result = await client.createOrReplace(doc);
        console.log('✅ Document created with all 6 features!');
        console.log('   ID:', result._id);
    } else {
        // Check features
        const featureCount = current.features?.length || 0;
        console.log(`\n📊 Current feature count: ${featureCount}`);

        if (featureCount < 6) {
            console.log('⚡ Updating features to include all 6...');
            const result = await client
                .patch('homeSection20')
                .set({
                    features: [
                        'Product Discovery',
                        'Scalable Development',
                        'Performance Optimization',
                        'System Architecture',
                        'Security Validation 🔐',
                        'Continuous Enhancement 🚀'
                    ]
                })
                .commit();
            console.log('✅ Features updated! Now has', result.features?.length, 'features');
        } else {
            console.log('✅ Document already has all features. No changes needed.');
        }
    }

    // Verify
    const updated = await client.fetch(`*[_id == "homeSection20"][0]`);
    console.log('\n📋 Final document:', JSON.stringify(updated, null, 2));
}

fix().catch(err => {
    console.error('❌ Error:', err.message);
});
