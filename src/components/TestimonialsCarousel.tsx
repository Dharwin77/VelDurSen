import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { urlFor } from "@/lib/sanity";

const defaultReviews = [
    {
        quote: "They didn't just consult; they executed. The transformation in our operational efficiency was immediate and measurable.",
        author: "CP",
        role: "Client Partner",
        company: "Global Logistics Firm",
        color: "from-blue-400 to-purple-500"
    },
    {
        quote: "A game-changer for our digital strategy. The ROI was evident within the first quarter.",
        author: "SJ",
        role: "CTO",
        company: "FinTech Corp",
        color: "from-emerald-400 to-teal-500"
    },
    {
        quote: "Their security audit saved us from a potential breach. Highly recommended for enterprise-grade protection.",
        author: "MT",
        role: "CISO",
        company: "HealthData Systems",
        color: "from-red-400 to-orange-500"
    },
    {
        quote: "Seamless integration of AI into our workflow. The team is incredibly knowledgeable and professional.",
        author: "ER",
        role: "COO",
        company: "EduTech Solutions",
        color: "from-indigo-400 to-cyan-500"
    },
    {
        quote: "We achieved sustainable growth targets 2 years ahead of schedule thanks to their strategic roadmap.",
        author: "DK",
        role: "CEO",
        company: "GreenEnergy Inc.",
        color: "from-lime-400 to-green-500"
    }
];

const TestimonialsCarousel = ({ data }: { data?: any }) => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = data?.testimonials?.map((t: any, i: number) => ({
        quote: t.quote,
        author: t.author,
        role: t.role,
        company: t.company,
        image: t.image ? urlFor(t.image).url() : null,
        color: defaultReviews[i % defaultReviews.length].color // Fallback color cycle
    })) || defaultReviews;

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-20 bg-white text-[#0f172a] overflow-hidden relative">
            {/* Subtle Architectural Background */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container px-4 md:px-6 mx-auto relative z-10 box-border">

                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="text-[#dc2626] font-bold tracking-widest uppercase text-xs mb-2 block">Client Stories</span>
                    <h3 className="text-3xl font-black text-[#0f172a]">{data?.heading || "Trusted by Industry Visionaries"}</h3>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="relative bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.3)] overflow-hidden">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="absolute top-10 right-10 opacity-10">
                            <Quote className="w-24 h-24 text-white" />
                        </div>

                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentReview}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-white max-w-4xl tracking-tight">
                                        "{reviews[currentReview].quote}"
                                    </blockquote>

                                    <div className="flex flex-col items-center gap-4">
                                        {reviews[currentReview].image ? (
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                                                <img
                                                    src={reviews[currentReview].image}
                                                    alt={reviews[currentReview].author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className={`w-16 h-16 bg-gradient-to-br ${reviews[currentReview].color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-white/10`}>
                                                {reviews[currentReview].author}
                                            </div>
                                        )}

                                        <div>
                                            <div className="font-black text-lg text-white">{reviews[currentReview].author}</div>
                                            <div className="text-xs font-bold text-red-500 uppercase tracking-widest mt-1">
                                                {reviews[currentReview].role}, {reviews[currentReview].company}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls */}
                            <div className="flex items-center justify-between mt-12 px-4 md:px-12 border-t border-white/10 pt-8">
                                <button
                                    onClick={prevReview}
                                    className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#0f172a] transition-all">
                                        <ChevronLeft size={18} />
                                    </div>
                                    <span className="hidden md:inline">Previous</span>
                                </button>

                                <div className="flex gap-2">
                                    {reviews.map((_: any, i: number) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentReview(i)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentReview
                                                ? "bg-red-600 w-8"
                                                : "bg-slate-700 w-1.5 hover:bg-slate-500"
                                                }`}
                                            aria-label={`Review ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextReview}
                                    className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                                >
                                    <span className="hidden md:inline">Next</span>
                                    <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#0f172a] transition-all">
                                        <ChevronRight size={18} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
