
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
    twitterCard?: 'summary_large_image' | 'summary';
    schemas?: object[]; // Array of Schema.org JSON-LD objects
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = [],
    canonical,
    ogType = 'website',
    ogImage = '/og-image.jpg', // Default OG image
    twitterCard = 'summary_large_image',
    schemas = []
}) => {
    const location = useLocation();
    const siteUrl = 'https://veldursen.com'; // Replace with actual domain

    // If canonical is provided use it, otherwise use current pathname
    const currentPath = location.pathname === '/' ? '' : location.pathname;
    const fullCanonical = canonical
        ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
        : `${siteUrl}${currentPath}`;

    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Structured Data (JSON-LD) */}
            {schemas.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(schemas)}
                </script>
            )}
        </Helmet>
    );
};
