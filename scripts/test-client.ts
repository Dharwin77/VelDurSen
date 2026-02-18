
import { getCliClient } from 'sanity/cli'

const run = async () => {
    try {
        const client = getCliClient()
        console.log('Project ID:', client.config().projectId)
    } catch (err) {
        console.error('Error:', err)
    }
}

run()
