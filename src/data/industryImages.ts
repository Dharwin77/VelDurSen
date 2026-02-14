// Image Data Structure for Industries Page
// Replace src URLs with actual image paths when available

export const industryImages = {
    healthcare: {
        overview: {
            src: '/images/industries/healthcare-overview-crm.webp',
            alt: 'Healthcare CRM Software Dashboard - Patient Management System with EHR Integration and Medical Analytics',
            width: 1200,
            height: 800
        },
        dashboard: {
            src: '/images/industries/healthcare-dashboard-analytics.webp',
            alt: 'Healthcare Analytics Dashboard - Patient Data Visualization and Clinical Insights for Cloud CRM Platform',
            width: 1200,
            height: 800
        }
    },
    education: {
        overview: {
            src: '/images/industries/education-overview-crm.webp',
            alt: 'Education CRM Platform - Student Enrollment Management and Academic Performance Tracking System',
            width: 1200,
            height: 800
        },
        dashboard: {
            src: '/images/industries/education-crm-dashboard.webp',
            alt: 'Education CRM Dashboard - Learning Management Integration and Student Communication Portal',
            width: 1200,
            height: 800
        }
    },
    manufacturing: {
        overview: {
            src: '/images/industries/manufacturing-industry-overview.webp',
            alt: 'Manufacturing CRM Software - Production Management and Supply Chain Coordination Platform',
            width: 1200,
            height: 800
        },
        dashboard: {
            src: '/images/industries/supply-chain-crm-dashboard.webp',
            alt: 'Supply Chain CRM Dashboard - Inventory Tracking and Vendor Management for Manufacturing',
            width: 1200,
            height: 800
        }
    },
    fintech: {
        dashboard: {
            src: '/images/industries/fintech-financial-dashboard.webp',
            alt: 'FinTech CRM Platform - Secure Financial Dashboard with Regulatory Compliance and Client Management',
            width: 1200,
            height: 800
        }
    },
    retail: {
        overview: {
            src: '/images/industries/retail-analytics-overview.webp',
            alt: 'Retail CRM Analytics - Customer Purchase Behavior and Omnichannel Sales Performance Dashboard',
            width: 1200,
            height: 800
        },
        dashboard: {
            src: '/images/industries/retail-ecommerce-crm.webp',
            alt: 'E-commerce CRM Platform - Online Customer Management and Order Fulfillment Tracking System',
            width: 1200,
            height: 800
        }
    },
    // New Industries Added for Rebuild
    logistics: {
        overview: {
            src: 'https://images.unsplash.com/photo-1566576912906-253c72d67c51?q=80&w=1200&auto=format&fit=crop', // Placeholder Unsplash
            alt: 'Logistics and Supply Chain Management Dashboard',
            width: 1200,
            height: 800
        }
    },
    realestate: {
        overview: {
            src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop', // Placeholder Unsplash
            alt: 'Real Estate CRM Property Management Dashboard',
            width: 1200,
            height: 800
        }
    },
    travel: {
        overview: {
            src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop', // Placeholder Unsplash
            alt: 'Travel and Hospitality Booking Management System',
            width: 1200,
            height: 800
        }
    },
    saas: {
        overview: {
            src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', // Placeholder Unsplash
            alt: 'SaaS Analytics and User Growth Dashboard',
            width: 1200,
            height: 800
        }
    },
    government: {
        overview: {
            src: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1200&auto=format&fit=crop', // Placeholder Unsplash
            alt: 'Government Public Sector Service Portal',
            width: 1200,
            height: 800
        }
    }
};

export type IndustryImageData = typeof industryImages;
