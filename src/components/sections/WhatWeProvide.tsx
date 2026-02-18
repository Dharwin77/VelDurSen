import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlareHover from '@/components/shared/GlareHover';
import { urlFor } from '@/lib/sanity';
import img1 from "@/assets/coptercode11.png.jpeg";
import img2 from "@/assets/coptercode12.png.jpeg";

export default function WhatWeProvide({ data }: { data: any }) {
    const [activeTab, setActiveTab] = useState<'candidate' | 'client'>('candidate');

    const candidateBenefits = data?.candidateBenefits || [
        "Get suggestions and advice from our search consultants/recruiters on your career path",
        "Get career directions from us",
        "Get right-fit positions/career opportunities",
        "Your profile would get positioned appropriately with our global customers, resulting in you getting the role/growth you have been looking for",
        "Get suggestion & advice on compensation & benefits"
    ];
    const candidateImage = data?.candidateImage ? urlFor(data.candidateImage).url() : img1;

    const clientBenefits = data?.clientBenefits || [
        "Get dedicated support in fulfilling your human resource needs",
        "Get a partner who has expertise in identifying candidates in many niche segments",
        "Get a partner who has a global network of middle & senior-level technology professionals",
        "Get an account manager who understands your business language & delivers on-time"
    ];
    const clientImage = data?.clientImage ? urlFor(data.clientImage).url() : img2;

    const currentContent = activeTab === 'candidate'
        ? { benefits: candidateBenefits, image: candidateImage }
        : { benefits: clientBenefits, image: clientImage };

    return (
        <div className="section-padding bg-white">
            <div className="enterprise-container">
                {/* Tab Buttons */}
                <div className="flex gap-6 mb-10 border-b border-border">
                    <button
                        onClick={() => setActiveTab('candidate')}
                        className={`pb-3 px-2 text-base font-semibold transition-all relative ${activeTab === 'candidate'
                            ? 'text-blue-600'
                            : 'text-slate-600 hover:text-foreground'
                            }`}
                    >
                        You as a Candidate
                        {activeTab === 'candidate' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('client')}
                        className={`pb-3 px-2 text-base font-semibold transition-all relative ${activeTab === 'client'
                            ? 'text-blue-600'
                            : 'text-slate-600 hover:text-foreground'
                            }`}
                    >
                        You as a Client
                        {activeTab === 'client' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                </div>

                {/* Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Benefits List */}
                    <div className="space-y-5">
                        {currentContent.benefits.map((benefit: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Check size={14} className="text-white stroke-[3px]" />
                                </div>
                                <p className="text-base text-foreground leading-relaxed">
                                    {benefit}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                    >
                        <GlareHover glareOpacity={0.2} glareSize={400} className="rounded-2xl">
                            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                                <img
                                    src={currentContent.image}
                                    alt={activeTab === 'candidate' ? 'Career opportunities' : 'Client solutions'}
                                    className="w-full max-h-[400px] object-contain transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </GlareHover>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
