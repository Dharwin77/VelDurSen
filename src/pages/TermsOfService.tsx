
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { SEO } from '@/components/shared/SEO';

const TermsOfService = () => {
    return (
        <PageLayout>
            <SEO
                title="Terms of Service | VelDurSen Technologies"
                description="Review the terms and conditions for using VelDurSen Technologies services and platforms."
            />
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="bg-slate-50 py-24 border-b border-slate-200">
                    <div className="enterprise-container">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Legal</span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                            Terms of Service
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
                            Conditions governing the use of VelDurSen’s website and services.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="enterprise-container max-w-4xl mx-auto space-y-16">

                        {/* 1. Acceptance of Terms */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                By accessing this website or engaging with VelDurSen services, you agree to comply with these Terms of Service.
                            </p>
                        </div>

                        {/* 2. Scope of Services */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">2. Scope of Services</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">VelDurSen provides enterprise technology services including:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>AI solutions</li>
                                <li>Cloud & DevOps engineering</li>
                                <li>Cybersecurity services</li>
                                <li>Data engineering</li>
                                <li>Digital transformation consulting</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed text-lg pt-2 font-bold text-slate-900">
                                Specific terms may be defined in individual contracts.
                            </p>
                        </div>

                        {/* 3. Use of Website */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3. Use of Website</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">Users agree to:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Provide accurate information</li>
                                <li>Avoid unauthorized access</li>
                                <li>Not misuse website content</li>
                                <li>Comply with applicable laws</li>
                            </ul>
                        </div>

                        {/* 4. Intellectual Property */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">4. Intellectual Property</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                All content on this website, including text, graphics, design, and branding, is the property of VelDurSen and protected under intellectual property laws.
                            </p>
                        </div>

                        {/* 5. Limitation of Liability */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">5. Limitation of Liability</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">VelDurSen is not liable for:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Indirect damages</li>
                                <li>Website interruptions</li>
                                <li>Third-party service disruptions</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed text-lg pt-2 font-bold text-slate-900">
                                Liability limitations may be further defined in contractual agreements.
                            </p>
                        </div>

                        {/* 6. Termination */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">6. Termination</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                VelDurSen reserves the right to suspend or terminate access to services in case of violation of terms.
                            </p>
                        </div>

                        {/* 7. Governing Law */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">7. Governing Law</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                These Terms shall be governed by applicable legal jurisdiction in accordance with enterprise contractual standards.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default TermsOfService;
