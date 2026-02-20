import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2 } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import Ticker from './Ticker';
import heroBg from "@/assets/hero-bg.jpg";

// Animation Variants
const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

export default function Hero({ data, tickerData }: { data: any, tickerData?: any }) {
    const bgImage = data?.backgroundImage ? urlFor(data.backgroundImage).url() : heroBg;
    const heading = data?.heading || "VelDurSen";
    const subheading = data?.subheading || "Global Enterprise Technology Partner";
    const description = data?.description || "We architect intelligent, secure, and sustainable enterprise ecosystems that power mission-critical operations across industries worldwide.";

    // Parse heading to handle <br/> or special formatting if needed. 
    // For now simple rendering. If data.heading contains specifically "Digital Transformation." we might want to color it.
    // The user schema just has "heading".

    return (
        <section className="hero-section bg-white">
            <motion.div
                onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] brightness-110 hover:scale-105"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10" />

            <div className="enterprise-container relative z-20">
                <motion.div
                    variants={scaleUp}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-red-600 mb-3 sm:mb-6 px-4 py-1.5 bg-red-50 rounded-full border border-red-100 backdrop-blur-md shadow-sm">
                        {subheading}
                    </span>
                    <h1 className="text-[1.85rem] xs:text-[2.25rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] font-bold text-slate-900 leading-[0.95] mb-4 sm:mb-8 tracking-tighter break-words hyphens-auto">
                        {/* Hack to style the heading similar to hardcoded version if it matches basic structure, 
                 otherwise just render text */}
                        {data?.heading ? (
                            <>
                                {data.heading.split(' ').slice(0, -2).join(' ')} <br />
                                <span className="text-red-600">{data.heading.split(' ').slice(-2).join(' ')}</span>
                            </>
                        ) : (
                            <>
                                VelDurSen <br />
                                <span className="text-red-600">Digital Transformation.</span>
                            </>
                        )}
                    </h1>
                    <p className="text-sm sm:text-lg md:text-2xl text-slate-600 font-medium mb-6 sm:mb-12 max-w-2xl leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        {data?.ctaButtons && data.ctaButtons.length > 0 ? (
                            data.ctaButtons.map((btn: any, i: number) => (
                                i === 0 ? (
                                    <Link key={i} to={btn.link} state={{ fromButton: true }} className="btn-enterprise py-3 sm:py-5 px-8 sm:px-12 text-sm sm:text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-red-600/10">
                                        {btn.label} <ArrowRight size={18} className="ml-2" />
                                    </Link>
                                ) : (
                                    <div key={i} className="flex items-center gap-4 px-6 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                                        <Globe2 size={16} className="text-red-600" /> {btn.label}
                                    </div>
                                )
                            ))
                        ) : (
                            <>
                                <Link to="/contact" state={{ fromButton: true }} className="btn-enterprise py-3 sm:py-5 px-8 sm:px-12 text-sm sm:text-lg rounded-full bg-red-600 border-red-600 hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-red-600/10">
                                    Talk to Experts <ArrowRight size={18} className="ml-2" />
                                </Link>
                                <div className="flex items-center gap-4 px-6 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                                    <Globe2 size={16} className="text-red-600" /> Trusted in 150+ Countries
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>

            <Ticker data={tickerData} />
        </section>
    );
}
