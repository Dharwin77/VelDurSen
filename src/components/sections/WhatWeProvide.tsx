import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlareHover from '@/components/shared/GlareHover';
import { urlFor } from '@/lib/sanity';
import img1 from "@/assets/coptercode11.png.jpeg";
import img2 from "@/assets/coptercode12.png.jpeg";

export default function WhatWeProvide({ data }: { data: any }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // Default tabs if no data provided
    const defaultTabs = [
        {
            tabLabel: "You as a Candidate",
            benefits: [
                "Get suggestions and advice from our search consultants/recruiters on your career path",
                "Get career directions from us",
                "Get right-fit positions/career opportunities",
                "Your profile would get positioned appropriately with our global customers, resulting in you getting the role/growth you have been looking for",
                "Get suggestion & advice on compensation & benefits"
            ],
            image: img1
        },
        {
            tabLabel: "You as a Client",
            benefits: [
                "Get dedicated support in fulfilling your human resource needs",
                "Get a partner who has expertise in identifying candidates in many niche segments",
                "Get a partner who has a global network of middle & senior-level technology professionals",
                "Get an account manager who understands your business language & delivers on-time"
            ],
            image: img2
        }
    ];

    const tabs = data?.tabs?.map((tab: any) => ({
        tabLabel: tab.tabLabel,
        benefits: tab.benefits,
        image: tab.image ? urlFor(tab.image).url() : null
    })) || defaultTabs;

    // Fallback to default images if Sanity image is missing
    if (tabs[0] && !tabs[0].image) tabs[0].image = img1;
    if (tabs[1] && !tabs[1].image) tabs[1].image = img2;


    const activeTab = tabs[activeTabIndex] || tabs[0];

    return (
        <div className="section-padding bg-white">
            <div className="enterprise-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                        {data?.heading || "What We Provide"}
                    </h2>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap gap-6 mb-10 border-b border-border">
                    {tabs.map((tab: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => setActiveTabIndex(index)}
                            className={`pb-3 px-2 text-base font-semibold transition-all relative ${activeTabIndex === index
                                ? 'text-blue-600'
                                : 'text-slate-600 hover:text-foreground'
                                }`}
                        >
                            {tab.tabLabel}
                            {activeTabIndex === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <motion.div
                    key={activeTabIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Benefits List */}
                    <div className="space-y-5">
                        {activeTab.benefits?.map((benefit: string, index: number) => (
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
                                    src={activeTab.image}
                                    alt={activeTab.tabLabel}
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
