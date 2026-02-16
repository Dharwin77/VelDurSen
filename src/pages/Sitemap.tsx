
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sitemap = () => {
    const sections = [
        {
            title: 'Main Pages',
            links: [
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },

                { label: 'Achievements', path: '/achievements' },
                { label: 'History', path: '/history' },
                { label: 'Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Internships', path: '/internships' },
                { label: 'Contact Us', path: '/contact' },
            ],
        },
        {
            title: 'Services',
            links: [
                { label: 'Enterprise AI Solutions', path: '/services#technology-pillars' },
                { label: 'Cloud & DevOps Engineering', path: '/services#technology-pillars' },
                { label: 'Cybersecurity & Compliance', path: '/services#technology-pillars' },
                { label: 'Data Engineering & Analytics', path: '/services#technology-pillars' },
                { label: 'Enterprise Software Development', path: '/services#our-solutions-architecture' },
            ],
        },
        {
            title: 'Industries',
            links: [
                { label: 'Healthcare', path: '/services#industries-full-content' },
                { label: 'Education', path: '/services#industries-full-content' },
                { label: 'Manufacturing', path: '/services#industries-full-content' },
                { label: 'FinTech', path: '/services#industries-full-content' },
                { label: 'Retail', path: '/services#industries-full-content' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms of Service', path: '/terms-of-service' },
                { label: 'Security', path: '/security' },
                { label: 'Sitemap', path: '/sitemap' },
            ],
        },
    ];

    return (
        <PageLayout>
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="bg-slate-50 py-24 border-b border-slate-200">
                    <div className="enterprise-container">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Navigation</span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                            Sitemap
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
                            Navigate the VelDurSen digital ecosystem.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="enterprise-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {sections.map((section, index) => (
                            <div key={index} className="space-y-8">
                                <h2 className="text-2xl font-black text-slate-900 border-b-2 border-red-600/10 pb-4 tracking-tight uppercase">
                                    {section.title}
                                </h2>
                                <ul className="space-y-4">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                to={link.path}
                                                className="group flex items-center gap-2 text-slate-600 hover:text-red-600 transition-all font-medium text-lg"
                                            >
                                                <ArrowRight size={16} className="text-slate-300 group-hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 duration-300" />
                                                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Sitemap;
