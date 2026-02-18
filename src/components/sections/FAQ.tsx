
// This is already done.
// I will create `src/components/sections/FAQ.tsx` and `Culture.tsx` as requested.
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface Props {
    data: {
        heading?: string;
        faqs?: FAQItem[];
    }
}

export default function FAQ({ data }: Props) {
    const { heading = "Frequently Asked Questions", faqs = [] } = data || {};
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    if (!faqs.length) return null;

    return (
        <section className="section-padding bg-slate-50">
            <div className="enterprise-container max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">{heading}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-slate-800">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-blue-600 shrink-0" />
                                ) : (
                                    <Plus className="text-slate-400 shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
