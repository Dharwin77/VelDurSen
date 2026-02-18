
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'kj78qpyy',
    dataset: 'production',
    useCdn: false, // Ensure fresh data
    apiVersion: '2023-05-03',
});

async function verify() {
    try {
        const home = await client.fetch('*[_type == "homePage"][0]');
        console.log('Home Page:', home ? 'Found' : 'Not Found');
        if (home) {
            console.log(' - Title:', home.title);
            console.log(' - Hero:', home.hero ? 'Present' : 'Missing');
            console.log(' - Global Ops:', home.globalOperations ? 'Present' : 'Missing');
        }

        const careers = await client.fetch('*[_type == "careersPage"][0]');
        console.log('Careers Page:', careers ? 'Found' : 'Not Found');
        if (careers) {
            console.log(' - Title:', careers.title);
            console.log(' - Hero:', careers.hero ? 'Present' : 'Missing');
        }

    } catch (err) {
        console.error('Verification failed:', err.message);
    }
}

verify();
