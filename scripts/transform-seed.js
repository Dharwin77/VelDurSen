
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedPath = path.join(__dirname, '../sanity/data/seed.json');
const data = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

const transformed = data.map(doc => {
    if (doc._id === 'home') {
        const newDoc = {
            _id: 'home',
            _type: 'homePage',
            title: 'Home',
        };

        if (doc.sections) {
            doc.sections.forEach(section => {
                let key = section._type;
                // specific mapping based on schema definition
                // homePage fields: hero, globalOperations, professionalAssistance, whatWeAreUpto, founders, timeline, deliveredOutcomes
                if (key === 'professionalAssistance') key = 'professionalAssistance'; // match schema field name

                newDoc[key] = section;
            });
        }
        return newDoc;
    }

    if (doc._id === 'careers') {
        const newDoc = {
            _id: 'careers',
            _type: 'careersPage',
            title: 'Careers',
        };
        if (doc.sections) {
            doc.sections.forEach(section => {
                newDoc[section._type] = section;
            });
        }
        return newDoc;
    }

    // Handle other pages
    const typeMap = {
        'about': 'aboutPage',
        'whatWeDo': 'whatWeDoPage',
        'contact': 'contactPage',
        'blog': 'blogPage'
    };

    if (typeMap[doc._id]) {
        const newDoc = {
            _id: doc._id,
            _type: typeMap[doc._id],
            title: doc.title,
        };
        if (doc.sections) {
            doc.sections.forEach(section => {
                newDoc[section._type] = section;
            });
        }
        return newDoc;
    }

    return doc;
});

// Remove generic pages if they exist as duplicates? No, we are transforming widely.
// Filter out old "page" types if we are replacing them?
// The map above replaces them.

// Output as NDJSON (Newline Delimited JSON) for robust import
const ndjson = transformed.map(doc => JSON.stringify(doc)).join('\n');
fs.writeFileSync(seedPath, ndjson);
console.log('Seed file transformed to NDJSON.');
