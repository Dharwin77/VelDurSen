
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Security = () => {
    return (
        <PageLayout>
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="bg-slate-50 py-24 border-b border-slate-200">
                    <div className="enterprise-container">
                        <span className="text-red-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Trust & Compliance</span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                            Security & Compliance
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
                            Enterprise-grade security embedded at every layer.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="enterprise-container max-w-4xl mx-auto space-y-16">

                        {/* 1. Security Philosophy */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">1. Security Philosophy</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                VelDurSen integrates security from architecture to deployment. Security is not an add-on — it is foundational.
                            </p>
                        </div>

                        {/* 2. Security Frameworks */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">2. Security Frameworks</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">We implement:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Zero-trust architecture</li>
                                <li>Identity & access management</li>
                                <li>Multi-factor authentication</li>
                                <li>Secure API gateways</li>
                                <li>Encrypted communication</li>
                            </ul>
                        </div>

                        {/* 3. Infrastructure Protection */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3. Infrastructure Protection</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">Our infrastructure includes:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Cloud-native security controls</li>
                                <li>Real-time monitoring systems</li>
                                <li>Automated threat detection</li>
                                <li>Incident response protocols</li>
                            </ul>
                        </div>

                        {/* 4. Compliance Standards */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">4. Compliance Standards</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">We design systems aligned with:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Global data protection standards</li>
                                <li>Industry-specific regulatory requirements</li>
                                <li>Enterprise compliance frameworks</li>
                            </ul>
                        </div>

                        {/* 5. Continuous Monitoring */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">5. Continuous Monitoring</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">Security operations include:</p>
                            <ul className="list-disc list-outside pl-6 space-y-3 text-slate-600 text-lg marker:text-red-600 font-medium">
                                <li>Ongoing vulnerability assessments</li>
                                <li>Penetration testing</li>
                                <li>Risk evaluation processes</li>
                                <li>Proactive threat intelligence</li>
                            </ul>
                        </div>

                        {/* 6. Responsible Disclosure */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">6. Responsible Disclosure</h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-medium">
                                Security researchers may responsibly report vulnerabilities through our official communication channels.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Security;
