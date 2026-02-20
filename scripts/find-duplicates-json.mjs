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

async function findDuplicates() {
    const report = {};
    for (const type of types) {
        const docs = await client.fetch(`*[_type == "${type}"] | order(_updatedAt desc) { _id, _updatedAt }`);
        if (docs.length > 1) {
            report[type] = docs;
        }
    }
    console.log(JSON.stringify(report, null, 2));
}

findDuplicates().catch(err => console.error('❌ Error:', err.message));
