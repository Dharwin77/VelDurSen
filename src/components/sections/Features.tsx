import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Props {
    data: {
        heading?: string;
        features?: { title: string; description: string; icon: string }[];
    }
}

export default function Features({ data }: Props) {
    // Simplified version of WhatWeProvide from Index.tsx
    // Since Sanity structure might differ slightly from the tabs, I'll adapt it to list benefits.
    // However, if we want tabs (Candidate/Client), the schema should have supported it.
    // My schema for 'features' was generic list.
    // I'll stick to a generic features list for now or try to match the "What We Provide" two-column layout.

    // For now, I'll render the features list.
    const {
        heading = "What We Provide",
        features = []
    } = data || {};

    if (!features.length) return null;

    return (
        <section className="section-padding">
            <div className="enterprise-container">
                <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <Check size={16} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{f.title}</h3>
                                <p className="text-slate-600">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
