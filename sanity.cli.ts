import { defineCliConfig } from 'sanity/cli'

const projectId = 'kj78qpyy'
const dataset = 'production'

export default defineCliConfig({
    api: {
        projectId,
        dataset,
    }
})
