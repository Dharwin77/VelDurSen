import { createClient } from '@sanity/client';
const token = process.argv[2];
const client = createClient({
    projectId: 'kj78qpyy', dataset: 'production', apiVersion: '2023-08-01', token, useCdn: false,
});

async function addCards() {
    console.log('🔄 Adding 4 feature cards to Product Focus...');
    const result = await client
        .patch('homeSection20')
        .set({
            cards: [
                {
                    _key: 'card1',
                    label: 'CRM Platforms',
                    desc: 'Enterprise-ready customer intelligence systems.',
                    icon: 'Users',
                    color: 'text-blue-600',
                },
                {
                    _key: 'card2',
                    label: 'Workflow Automation',
                    desc: 'Streamlined cross-department orchestration.',
                    icon: 'Workflow',
                    color: 'text-blue-700',
                },
                {
                    _key: 'card3',
                    label: 'Enterprise Dashboards',
                    desc: 'Executive-level visibility & real-time monitoring.',
                    icon: 'BarChart',
                    color: 'text-blue-800',
                },
                {
                    _key: 'card4',
                    label: 'BI Systems',
                    desc: 'Data modeling and predictive analytics built for decisions.',
                    icon: 'Activity',
                    color: 'text-red-600',
                },
            ]
        })
        .commit();

    console.log('✅ Done! Cards count:', result.cards?.length);
    console.log('Cards:', result.cards?.map((c) => c.label));
}

addCards().catch(err => console.error('❌ Error:', err.message));
