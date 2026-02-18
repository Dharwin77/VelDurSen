
import { getCliClient } from 'sanity/cli'

const run = async () => {
    const client = getCliClient()
    console.log('Project ID:', client.config().projectId)
}

run()
