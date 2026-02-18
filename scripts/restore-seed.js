
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedPath = path.join(__dirname, '../sanity/data/seed.json');

const documents = [
    {
        _id: "home",
        _type: "homePage",
        title: "Home",
        hero: {
            _type: "hero",
            heading: "VelDurSen Digital Transformation.",
            subheading: "Global Enterprise Technology Partner",
            description: "We architect intelligent, secure, and sustainable enterprise ecosystems that power mission-critical operations across industries worldwide.",
            ctaButtons: [
                { _key: "btn1", label: "Talk to Experts", link: "/contact", variant: "primary" }
            ]
        },
        globalOperations: {
            _type: "globalOperations",
            heading: "Global Delivery Network",
            description: "Operating across multiple continents with a follow-the-sun delivery model, serving global enterprises around the clock.",
            stats: [
                { _key: "s1", label: "Countries Served", value: "50+" },
                { _key: "s2", label: "Enterprise Clients", value: "500+" },
                { _key: "s3", label: "System Uptime", value: "99.9%" },
                { _key: "s4", label: "Global Support", value: "24/7" }
            ]
        },
        partners: {
            _type: "partners",
            heading: "Trusted by Industry Leaders"
        },
        professionalAssistance: { _type: "professionalAssistance", heading: "Professional Assistance" },
        whatWeAreUpto: { _type: "whatWeAreUpto", heading: "What We Are Upto" },
        founders: { _type: "founders", heading: "Meet the Minds" },
        timeline: { _type: "timeline", heading: "Our Journey" },
        deliveredOutcomes: { _type: "deliveredOutcomes", heading: "Delivered Outcomes" }
    },
    {
        _id: "careers",
        _type: "careersPage",
        title: "Careers",
        hero: {
            _type: "hero",
            heading: "Join the Future of Tech",
            subheading: "Careers at VelDurSen",
            description: "Build the next generation of enterprise solutions with a global team of innovators."
        },
        culture: { _type: "culture", heading: "Our Culture" },
        careersList: { _type: "careersList", heading: "Open Positions" },
        faq: { _type: "faq", heading: "Frequently Asked Questions" },
        testimonials: { _type: "testimonials", heading: "Employee Stories" }
    },
    { _id: "about", _type: "aboutPage", title: "About Us", hero: { _type: "hero", heading: "About Us", description: "Our story and mission." } },
    { _id: "whatWeDo", _type: "whatWeDoPage", title: "What We Do", hero: { _type: "hero", heading: "Our Services", description: "Comprehensive enterprise solutions." } },
    { _id: "blog", _type: "blogPage", title: "Blog", hero: { _type: "hero", heading: "Latest Insights", description: "Tech trends and updates." } },
    { _id: "contact", _type: "contactPage", title: "Contact", hero: { _type: "hero", heading: "Get in Touch", description: "We'd love to hear from you." } }
];

const ndjson = documents.map(doc => JSON.stringify(doc)).join('\n');
fs.writeFileSync(seedPath, ndjson);
console.log('Seed file restored with full content.');
