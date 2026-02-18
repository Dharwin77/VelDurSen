import { Studio } from 'sanity'
import config from '../../sanity.config'

export default function SanityStudio() {
    return (
        <div style={{ height: '100vh', maxHeight: '100dvh', overflow: 'hidden' }}>
            <Studio config={config} />
        </div>
    )
}
