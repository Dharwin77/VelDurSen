
export const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VelDurSen Technologies",
    "alternateName": "VelDurSen",
    "url": "https://veldursen.com",
    "logo": "https://veldursen.com/logo.png",
    "description": "Global enterprise technology company delivering AI-driven digital transformation, cloud engineering, cybersecurity, data analytics, and enterprise software solutions to Fortune 500 companies worldwide.",
    "foundingDate": "2010",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "Global",
        "addressRegion": "Worldwide Operations"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "areaServed": "Global",
        "availableLanguage": ["English", "Spanish", "French", "German", "Chinese", "Japanese"]
    },
    "sameAs": [
        "https://www.linkedin.com/company/veldursen",
        "https://twitter.com/veldursen",
        "https://www.facebook.com/veldursen"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
    },
    "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "3500"
    },
    "knowsAbout": [
        "Enterprise AI Solutions",
        "Digital Transformation",
        "Cloud Engineering",
        "Cybersecurity",
        "Data Analytics",
        "DevOps",
        "Machine Learning",
        "Big Data",
        "Enterprise Software Development"
    ]
};

export const WEBSITE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VelDurSen Technologies",
    "url": "https://veldursen.com",
    "description": "Enterprise AI solutions, digital transformation, and cloud engineering services for global Fortune 500 companies",
    "publisher": {
        "@type": "Organization",
        "name": "VelDurSen Technologies",
        "logo": {
            "@type": "ImageObject",
            "url": "https://veldursen.com/logo.png"
        }
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://veldursen.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};
