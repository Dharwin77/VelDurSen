import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    schema?: object;
}

const SEO = ({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    schema
}: SEOProps) => {
    useEffect(() => {
        // Set document title
        document.title = title;

        // Set or update meta tags
        const setMetaTag = (name: string, content: string, property: boolean = false) => {
            const attr = property ? 'property' : 'name';
            let tag = document.querySelector(`meta[${attr}="${name}"]`);

            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute(attr, name);
                document.head.appendChild(tag);
            }

            tag.setAttribute('content', content);
        };

        // Basic meta tags
        setMetaTag('description', description);
        if (keywords) {
            setMetaTag('keywords', keywords);
        }

        // Open Graph tags
        setMetaTag('og:title', ogTitle || title, true);
        setMetaTag('og:description', ogDescription || description, true);
        setMetaTag('og:type', 'website', true);

        // Twitter Card tags
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', ogTitle || title);
        setMetaTag('twitter:description', ogDescription || description);

        // Add JSON-LD schema if provided
        if (schema) {
            let scriptTag = document.querySelector('script[type="application/ld+json"]');

            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.setAttribute('type', 'application/ld+json');
                document.head.appendChild(scriptTag);
            }

            scriptTag.textContent = JSON.stringify(schema);
        }

        // Cleanup function
        return () => {
            // Optional: Remove schema on unmount if needed
        };
    }, [title, description, keywords, ogTitle, ogDescription, schema]);

    return null; // This component doesn't render anything
};

export default SEO;
