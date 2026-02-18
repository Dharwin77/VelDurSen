import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { urlFor } from "@/lib/sanity";

interface Testimonial {
    highlight: string;
    content: string;
    author: string;
    role: string;
    company: string;
    image: any;
}

interface Props {
    data: {
        heading?: string;
        testimonials?: Testimonial[];
    }
}

export default function Testimonials({ data }: Props) {
    const {
        heading = "Hear From Our Team",
        testimonials = []
    } = data || {};

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (testimonials.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    if (!testimonials.length) return null;

    const current = testimonials[currentIndex];
    // Helper to get image URL
    const imageUrl = current.image ? urlFor(current.image).width(200).url() : "https://via.placeholder.com/150";

    return (
        <div className="max-w-5xl mx-auto py-24">
            <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900 text-center">
                    {heading}
                </h2>

                <div className="h-full bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col justify-center text-center">
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 italic max-w-3xl mx-auto">
                        "{current.content || current.highlight}"
                    </p>

                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-slate-100">
                        <img
                            src={imageUrl}
                            alt={current.author}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    <h5 className="text-lg font-bold text-[#050B20]">{current.author}</h5>
                    <p className="text-sm font-medium text-slate-500">
                        {current.role} at {current.company}
                    </p>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-slate-800 w-10'
                                : 'bg-slate-300 w-2 hover:bg-slate-400'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
