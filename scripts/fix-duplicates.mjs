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

const types = [
    "homeHero", "homeSection1", "homeSection2", "homeSection3", "homeSection4",
    "homeSection5", "homeSection6", "homeSection7", "homeSection8", "homeSection9",
    "homeSection10", "homeSection11", "homeSection12", "homeSection13", "homeSection14",
    "homeSection15", "homeSection16", "homeSection17", "homeSection18", "homeSection19",
    "homeSection20", "homeSection21", "homeSection22", "homeSection23", "homeSection24",
    "homeSection25", "homeSection26", "homeSection27", "homeSection28", "homeSection29",
    "homeSection30", "homeSection31", "homeSection32", "homeSection33", "homeSection34",
    "homeSection35", "homeSection36", "homeSection37", "homeSection38", "homeSection39",
    "homeSection40", "homeSection41", "globalSettings"
];

async function fixDuplicates() {
    console.log('🧹 Starting cleanup of duplicate Sanity documents...');
    let totalDeleted = 0;

    for (const type of types) {
        // Fetch all documents of this type, including drafts
        const docs = await client.fetch(`*[_type == "${type}"] | order(_updatedAt desc) { _id, _updatedAt }`);

        if (docs.length > 1) {
            console.log(`[!] Found ${docs.length} documents for type "${type}".`);

            // The first one in the list (sorted by updatedAt) is our "source of truth"
            const sourceOfTruth = docs[0];
            const toDelete = docs.slice(1);

            console.log(`    Source of Truth: ${sourceOfTruth._id} (Last updated: ${sourceOfTruth._updatedAt})`);

            for (const doc of toDelete) {
                console.log(`    Deleting duplicate: ${doc._id} (Last updated: ${doc._updatedAt})`);
                try {
                    await client.delete(doc._id);
                    totalDeleted++;
                } catch (err) {
                    console.error(`    ❌ Failed to delete ${doc._id}: ${err.message}`);
                }
            }
        }
    }

    if (totalDeleted === 0) {
        console.log('✅ No duplicates found to clean up.');
    } else {
        console.log(`✅ Cleanup complete. Deleted ${totalDeleted} redundant documents.`);
    }
}

fixDuplicates().catch(err => console.error('❌ Error:', err.message));
