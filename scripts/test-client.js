
const { getCliClient } = require('sanity/cli')
const client = getCliClient()
console.log('Project ID:', client.config().projectId)
