import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import ImageCarousel from '@/components/shared/ImageCarousel';
import aboutTeam from "@/assets/coptercode3.png.jpeg";
import aboutImage1 from "@/assets/coptercode1.png.jpeg";
import aboutImage2 from "@/assets/coptercode2.jpeg";

// Animation variants
const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};
const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

export default function OurStory({ data }: { data: any }) {
    // Fallback content if data is missing (or if we want to show default while loading/if unconnected)
    // However, data should be passed from parent if available.

    const heading = data?.heading || (
        <>Your Trusted Partner in<br /><span className="text-green-600">Enterprise Transformation</span></>
    );

    const subheading = data?.subheading || "Our Story";

    const content = data?.content ? data.content.map((block: string, i: number) => (
        <p key={i} className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
            {block}
        </p>
    )) : (
        <>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                VelDurSen is a global Enterprise Technology & Digital Transformation company specializing in AI-first, security-first, and sustainability-driven solutions for the world's most demanding enterprises.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                With operations spanning multiple continents and regional delivery centers worldwide, we deliver cutting-edge technology solutions that help organizations achieve their digital transformation goals while maintaining the highest standards of security, scalability, and sustainability.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                From Fortune 500 enterprises to high-growth organizations across healthcare, finance, manufacturing, and beyond—our architecture-first engineering approach ensures every system we build is resilient, performant, and future-proof for global operations.
            </p>
        </>
    );

    const images = data?.images?.length
        ? data.images.map((img: any) => urlFor(img).url())
        : [aboutTeam, aboutImage1, aboutImage2];

    const ctaText = data?.ctaText || "Learn More About Us";
    const ctaLink = data?.ctaLink || "/about";

    return (
        <section className="section-padding bg-green-50/50">
            <motion.div
                onViewportEnter={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: '#16a34a' } }))}
                onViewportLeave={() => window.dispatchEvent(new CustomEvent('navbar-theme-change', { detail: { color: null } }))}
                viewport={{ margin: "-10% 0px -70% 0px" }}
                className="enterprise-container"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-green-600 mb-6 block">{subheading}</span>
                        <h2 className="section-title leading-[1.1] mb-8 font-black tracking-tighter">{heading}</h2>

                        {content}

                        <Link
                            to={ctaLink}
                            state={{ fromButton: true }}
                            className="btn-enterprise !bg-green-600 !border-green-600 hover:!bg-slate-950 hover:!border-slate-950"
                        >
                            {ctaText} <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <ImageCarousel images={images} interval={4000} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
