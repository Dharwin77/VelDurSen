
export const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VelDurSen Technologies",
    "url": "https://veldursen.com",
    "logo": "https://veldursen.com/logo.png",
    "foundingDate": "2010",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "areaServed": "Global",
        "availableLanguage": ["English"]
    },
    "sameAs": [
        "https://www.linkedin.com/company/veldursen",
        "https://twitter.com/veldursen",
        "https://www.facebook.com/veldursen"
    ]
};

export const WEBSITE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VelDurSen Technologies",
    "url": "https://veldursen.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://veldursen.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};
