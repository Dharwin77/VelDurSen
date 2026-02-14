import { motion } from "framer-motion";

interface Benefit {
    title: string;
    description: string;
    image: string;
    rotation: number;
}

const benefits: Benefit[] = [
    {
        title: "Scalable teams for sustainable growth",
        description: "Expand confidently with teams built for long-term success and cost efficiency. We create the ideal structure and ensure effortless scaling to match your evolving business goals.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        rotation: -6
    },
    {
        title: "Operational excellence",
        description: "Leverage optimized tools and refined processes that drive measurable efficiency, consistent performance, and continuous productivity improvements.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        rotation: 4
    },
    {
        title: "Transparent collaboration",
        description: "Work with clarity and confidence through open communication and hands-on leadership from experienced Technical and Delivery Managers who keep your projects aligned and on schedule.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        rotation: -3
    },
    {
        title: "Dependable delivery and lasting knowledge",
        description: "Preserve quality, speed, and continuity with structured knowledge sharing and flexible scalability — enabling smooth onboarding, ramp-ups, or downsizing whenever needed.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
        rotation: 5
    }
];

const WhyChooseUsCards = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#C0392B] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="text-[#C0392B] font-semibold text-sm uppercase tracking-wider">Our Approach</span>
                    <h2 className="text-5xl font-bold mt-4 mb-6 text-slate-900">Why Choose Us for Software Development</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Fueling lasting growth by aligning talent, process excellence, and measurable performance.
                    </p>
                </motion.div>

                {/* Polaroid Cards Container */}
                <div className="relative flex items-center justify-center min-h-[600px] py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 max-w-7xl w-full">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotateZ: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    rotateZ: benefit.rotation
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotateZ: 0,
                                    zIndex: 50,
                                    transition: { duration: 0.3 }
                                }}
                                className="group cursor-pointer"
                                style={{
                                    transformOrigin: "center center"
                                }}
                            >
                                {/* Polaroid Card */}
                                <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-4 hover:shadow-[0_20px_60px_rgba(192,57,43,0.4)] transition-all duration-300">
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[4/3] bg-slate-200 rounded-md overflow-hidden mb-4">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#C0392B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="px-2 pb-2">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#C0392B] transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Pin effect on top */}
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-400 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsCards;
