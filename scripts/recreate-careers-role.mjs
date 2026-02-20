/**
 * Script to recreate the "Find Your Perfect Role" singleton document in Sanity.
 * 
 * USAGE:
 * 1. Get a Sanity API token from: https://www.sanity.io/manage/project/kj78qpyy/api#tokens
 *    - Create a token with "Editor" permissions
 * 2. Run: node scripts/recreate-careers-role.mjs YOUR_TOKEN_HERE
 */

import { createClient } from '@sanity/client';

const token = process.argv[2];

if (!token) {
    console.error('\n❌ Please provide a Sanity API token as an argument.');
    console.error('   Get one from: https://www.sanity.io/manage/project/kj78qpyy/api#tokens');
    console.error('   Usage: node scripts/recreate-careers-role.mjs YOUR_TOKEN_HERE\n');
    process.exit(1);
}

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    apiVersion: '2023-08-01',
    token: token,
    useCdn: false,
});

const doc = {
    _id: 'careersFindYourRole',
    _type: 'careersFindYourRole',
    heading: 'Find Your Perfect Role.',
    description: 'Explore our open positions and find the role that matches your skills and ambitions.',
    jobs: [
        {
            _key: 'job1',
            role: 'Senior AI/ML Engineer',
            department: 'Engineering',
            location: 'Remote – Global',
            type: 'Full-time',
            description: 'Design and implement cutting-edge AI models for enterprise scale.',
            applyLink: '/contact',
        },
        {
            _key: 'job2',
            role: 'Cloud Architect',
            department: 'SRE & Cloud',
            location: 'New York, USA',
            type: 'Full-time',
            description: 'Architect resilient, global cloud infrastructures on AWS and Azure.',
            applyLink: '/contact',
        },
        {
            _key: 'job3',
            role: 'DevOps Engineer',
            department: 'SRE & Cloud',
            location: 'Berlin, Germany',
            type: 'Full-time',
            description: 'Automate delivery pipelines and scale containerized workloads.',
            applyLink: '/contact',
        },
        {
            _key: 'job4',
            role: 'Cybersecurity Analyst',
            department: 'Security',
            location: 'Singapore',
            type: 'Full-time',
            description: 'Defend global enterprise networks with zero-trust frameworks.',
            applyLink: '/contact',
        },
        {
            _key: 'job5',
            role: 'Data Engineer',
            department: 'Engineering',
            location: 'London, UK',
            type: 'Full-time',
            description: 'Build data pipelines that drive insights and decision-making.',
            applyLink: '/contact',
        },
        {
            _key: 'job6',
            role: 'Full Stack Developer',
            department: 'Engineering',
            location: 'Bangalore, India',
            type: 'Full-time',
            description: 'Build beautiful, responsive web interfaces that millions use daily.',
            applyLink: '/contact',
        },
    ],
};

async function recreate() {
    try {
        console.log('🔄 Creating "Find Your Perfect Role" document...');
        const result = await client.createOrReplace(doc);
        console.log('✅ Document created successfully!');
        console.log('   ID:', result._id);
        console.log('   Type:', result._type);
        console.log('   Jobs:', result.jobs?.length || 0);
        console.log('\n📝 You can now edit this document in the Sanity Studio.');
    } catch (err) {
        console.error('❌ Failed to create document:', err.message);
    }
}

recreate();
