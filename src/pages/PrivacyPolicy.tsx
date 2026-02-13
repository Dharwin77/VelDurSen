
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const PrivacyPolicy = () => {
    return (
        <PageLayout>
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="bg-slate-50 py-24 border-b border-slate-200">
                    <div className="enterprise-container">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Legal</span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                            Privacy Policy
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
                            Your data privacy and trust are fundamental to VelDurSen’s operations.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="enterprise-container max-w-4xl mx-auto space-y-16">

                        {/* 1. Introduction */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">1. Introduction</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                VelDurSen is committed to protecting the privacy of our clients, partners, employees, and website visitors. This Privacy Policy explains how we collect, use, store, and protect personal and enterprise data.
                            </p>
                        </div>

                        {/* 2. Information We Collect */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">2. Information We Collect</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">We may collect:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Contact information (name, email, phone number)</li>
                                <li>Business and organization details</li>
                                <li>Technical data (IP address, browser type, device information)</li>
                                <li>Inquiry and communication records</li>
                                <li>Website usage analytics</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed text-lg pt-2 font-bold text-slate-900">
                                We do not collect unnecessary personal data.
                            </p>
                        </div>

                        {/* 3. How We Use Information */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3. How We Use Information</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">We use collected information to:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Respond to inquiries</li>
                                <li>Provide enterprise services</li>
                                <li>Improve website experience</li>
                                <li>Ensure platform security</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        {/* 4. Data Protection & Security */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">4. Data Protection & Security</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">VelDurSen applies enterprise-grade security practices including:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Encryption protocols</li>
                                <li>Access control mechanisms</li>
                                <li>Zero-trust security models</li>
                                <li>Secure data storage frameworks</li>
                            </ul>
                        </div>

                        {/* 5. Data Sharing */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">5. Data Sharing</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">We do not sell personal or business data.</p>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">Information may be shared only:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>With authorized service providers</li>
                                <li>For regulatory compliance</li>
                                <li>With explicit consent</li>
                            </ul>
                        </div>

                        {/* 6. Data Retention */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">6. Data Retention</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                Data is retained only as long as necessary for operational, contractual, or legal purposes.
                            </p>
                        </div>

                        {/* 7. Your Rights */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">7. Your Rights</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">Users may:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Request access to stored data</li>
                                <li>Request correction or deletion</li>
                                <li>Withdraw consent</li>
                                <li>Contact us regarding privacy concerns</li>
                            </ul>
                        </div>

                        {/* 8. Updates to This Policy */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">8. Updates to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                VelDurSen may update this Privacy Policy periodically to reflect evolving regulatory requirements and operational practices.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default PrivacyPolicy;
