import React, { useRef, useState, useEffect, useId } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// --- Spotlight Card ---
export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative border border-slate-200 bg-white overflow-hidden rounded-xl",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

// --- Neon Gradient Card ---
export const NeonGradientCard = ({
    children,
    className = "",
    containerClassName = "",
    innerClassName = "",
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    innerClassName?: string;
}) => {
    return (
        <div className={cn("relative group rounded-xl p-[2px] overflow-hidden", containerClassName)}>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#C0392B] via-[#FFD700] to-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
            />
            <div className={cn("relative h-full bg-white rounded-[10px] z-10", className, innerClassName)}>{children}</div>
        </div>
    );
};

// --- Hover Border Gradient Card ---
export const HoverBorderGradientCard = ({
    children,
    className = "",
    containerClassName = "",
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div className={cn("relative p-[1px] group overflow-hidden rounded-xl", containerClassName)}>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0392B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md"
                animate={{
                    x: ["-100%", "100%"]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                }}
            />
            <div className={cn("relative h-full bg-slate-50 rounded-xl p-6 border-2 border-transparent group-hover:border-transparent transition-all z-10", className)}>
                {children}
            </div>
        </div>
    );
};

// --- Image Reveal Card (New) ---
export const ImageRevealCard = ({
    title,
    description,
    image,
    icon: Icon,
    className = "",
}: {
    title: string;
    description: string;
    image: string;
    icon?: React.ElementType;
    className?: string;
}) => {
    return (
        <div className={cn("group relative w-full h-[400px] overflow-hidden rounded-2xl shadow-xl", className)}>
            {/* Background Image with Zoom Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                <div className="transform translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Title with decorative line */}
                    <div className="mb-4">
                        {Icon && <Icon className="text-[#C0392B] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" size={32} />}
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h3>
                        <div className="w-12 h-1 bg-[#C0392B] rounded-full mb-4 transition-all duration-500 group-hover:w-full" />
                    </div>

                    {/* Description (Revealed on Hover) */}
                    <p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                        {description}
                    </p>

                    {/* Optional Button/Link (Revealed slightly later) */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <span className="inline-block px-4 py-2 bg-[#C0392B] text-white text-sm font-bold rounded-md uppercase tracking-wide hover:bg-[#a02f24] transition-colors cursor-pointer">
                            Learn More
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Expanding Card (Accordion Style) ---
export const ExpandingCard = ({
    items,
    className = "",
}: {
    items: {
        title: string;
        desc: string;
        image: string;
        icon: React.ElementType;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first expanded

    return (
        <div className={cn("w-full flex flex-col lg:flex-row h-auto lg:h-[500px] gap-2", className)}>
            {items.map((item, index) => {
                const isHovered = hoveredIndex === index;
                return (
                    <motion.div
                        key={index}
                        layout
                        onMouseEnter={() => setHoveredIndex(index)}
                        className={cn(
                            "relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out",
                            isHovered ? "flex-[10]" : "flex-[1]",
                            "h-[300px] lg:h-full" // Fixed height for mobile, full for desktop
                        )}
                    >
                        {/* Background Image */}
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center"
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.7 }}
                            style={{ backgroundImage: `url(${item.image})` }}
                        />

                        {/* Overlay */}
                        <div className={cn("absolute inset-0 bg-black/60 transition-opacity duration-500", isHovered ? "bg-black/40" : "bg-black/70")} />

                        {/* Content Container */}
                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="relative z-10"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[#C0392B] flex items-center justify-center mb-4 shadow-lg text-white">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                        <p className="text-slate-200 text-lg leading-relaxed max-w-md">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Collapsed Title (Only visible when NOT hovered and on Desktop) */}
                            {!isHovered && (
                                <div className="absolute inset-0 hidden lg:flex items-center justify-center pb-8">
                                    <h3 className="text-white font-bold text-xl whitespace-nowrap tracking-wider transform -rotate-90 origin-center absolute bottom-24">
                                        {item.title}
                                    </h3>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center absolute bottom-8 text-white">
                                        <item.icon size={20} />
                                    </div>
                                </div>
                            )}

                            {/* Mobile Collapsed State (If not hovered on mobile, show title normally) */}
                            {!isHovered && (
                                <div className="lg:hidden absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white text-shadow-sm">{item.title}</h3>
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

// --- Circular 3D Carousel (Gallery) ---
export const CircularGallery = ({
    items,
    className = "",
}: {
    items: {
        title: string;
        desc: string;
        image: string;
        icon: React.ElementType;
    }[];
    className?: string;
}) => {
    const [rotation, setRotation] = React.useState(0);

    // Auto-rotate effect
    React.useEffect(() => {
        let animationFrame: number;
        const animate = () => {
            setRotation(prev => (prev - 0.2) % 360);
            animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const radius = 600; // Adjusted for better view
    const cardWidth = 280;
    const cardHeight = 400;
    const count = items.length;
    const angleStep = 360 / count;

    return (
        <div className={cn("relative w-full h-[600px] overflow-hidden flex items-center justify-center perspective-[1000px]", className)}>
            <div
                className="relative preserve-3d transition-transform duration-100 ease-linear"
                style={{
                    width: cardWidth,
                    height: cardHeight,
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotation}deg)`,
                }}
            >
                {items.map((item, index) => {
                    const angle = index * angleStep;
                    return (
                        <div
                            key={index}
                            className="absolute top-0 left-0 backface-visible"
                            style={{
                                width: '100%',
                                height: '100%',
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer bg-slate-900 transition-transform hover:scale-105 duration-300">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    loading="lazy"
                                />
                                {/* Overlay/Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-[#C0392B] flex items-center justify-center mb-3 shadow-lg text-white">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{item.title}</h3>
                                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Interactive Overlay Gradients to mask edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        </div>
    );
};

// --- Glowing Card (Neon Border) ---
export const GlowingCard = ({
    title,
    desc,
    image,
    icon: Icon,
    className = "",
}: {
    title: string;
    desc: string;
    image: string;
    icon?: React.ElementType;
    className?: string;
}) => {
    return (
        <div className={cn("relative group h-[420px] w-full", className)}>
            {/* Glowing Gradient Backdrop (Border Effect) */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-[#C0392B] via-[#FFD700] to-[#C0392B] rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-gradient-xy" />

            {/* Card Content */}
            <div className="relative h-full w-full bg-slate-900 rounded-2xl overflow-hidden flex flex-col border border-white/10 group-hover:border-transparent transition-colors">

                {/* Full Background Image */}
                <div className="absolute inset-0">
                    {/* Darker overlay in normal state, clearer on hover */}
                    <div className="absolute inset-0 bg-slate-900/60 z-10 group-hover:bg-black/20 transition-colors duration-500" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">

                    {/* Text Container */}
                    <div className="relative z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {Icon && (
                            <div className="w-12 h-12 bg-[#C0392B] rounded-xl flex items-center justify-center text-white mb-4 shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <Icon size={24} />
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300 drop-shadow-md">
                            {title}
                        </h3>

                        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                            <p className="text-slate-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm font-medium">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Swipe Cards (Tinder-like Stack) ---
export const SwipeCards = ({
    items,
    className = "",
}: {
    items: {
        title: string;
        desc: string;
        image: string;
        icon: React.ElementType;
    }[];
    className?: string;
}) => {
    const [cards, setCards] = React.useState(items);

    const removeCard = (id: string) => {
        setCards((prev) => prev.filter((item) => item.title !== id));
    };

    return (
        <div className={cn("relative w-full h-[500px] flex items-center justify-center overflow-hidden", className)}>
            <div className="relative w-full max-w-sm h-full flex items-center justify-center">
                <AnimatePresence>
                    {cards.map((item, index) => (
                        <Card
                            key={item.title}
                            item={item}
                            index={index}
                            total={cards.length}
                            onRemove={removeCard}
                        />
                    ))}
                </AnimatePresence>
                {cards.length === 0 && (
                    <div className="text-center z-0">
                        <p className="text-slate-500 mb-4 font-medium">All benefits viewed!</p>
                        <button
                            onClick={() => setCards(items)}
                            className="px-6 py-2 bg-[#C0392B] text-white rounded-full hover:bg-[#a02f24] transition-all shadow-lg hover:shadow-[#C0392B]/30"
                        >
                            Review Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const Card = ({ item, index, total, onRemove }: any) => {
    const x = useMotionValue(0);
    const rotate = useMotionTemplate`${x}deg`;
    const isFront = index === total - 1;
    const offset = total - 1 - index; // 0 is front

    // Deterministic "random" rotation for scattered look
    const randomRotate = (index % 2 === 0 ? 3 : -3) * Math.min(offset, 2);

    const handleDragEnd = (e: any, { offset, velocity }: any) => {
        const swipe = Math.abs(offset.x) * velocity.x;
        if (swipe < -100 || swipe > 100) {
            onRemove(item.title);
        }
    };

    return (
        <motion.div
            style={{
                x,
                rotate: isFront ? rotate : randomRotate,
                zIndex: index,
            }}
            drag={isFront ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
                scale: 1 - offset * 0.05,
                opacity: 1 - offset * 0.05,
                y: -offset * 10,
                x: isFront ? 0 : (index % 2 === 0 ? 1 : -1) * Math.min(offset * 60, 180), // Fan out up to 180px
                rotate: isFront ? 0 : (index % 2 === 0 ? 1 : -1) * offset * 2, // Slight rotation to match fan
            }}
            exit={{ x: 300, opacity: 0, rotate: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-0 w-[350px] h-[480px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-grab active:cursor-grabbing origin-bottom"
        >
            {/* Image */}
            <div className="absolute inset-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-90 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                <div className="w-16 h-16 bg-[#C0392B] rounded-2xl flex items-center justify-center mb-4 shadow-xl text-white transform -rotate-3">
                    <item.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg leading-tight">{item.title}</h3>
                <p className="text-slate-100 text-lg leading-relaxed drop-shadow-md font-medium">
                    {item.desc}
                </p>
                <div className="mt-8 flex justify-between items-center text-white/40 text-sm font-medium uppercase tracking-widest">
                    <span>← Swipe Left</span>
                    <span>Swipe Right →</span>
                </div>
            </div>
        </motion.div>
    );
};

// --- Scroll-Based Stagger Reveal Grid ---
export const ScrollStaggerGallery = ({
    items,
    className = "",
}: {
    items: {
        title: string;
        desc: string;
        image: string;
        icon: React.ElementType;
    }[];
    className?: string;
}) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", className)}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1, // Stagger effect
                        ease: "easeOut"
                    }}
                    className="relative group h-[450px] w-full bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:shadow-2xl hover:shadow-[#C0392B]/20 transition-shadow duration-500"
                >
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/10 transition-colors duration-500" />
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-12 bg-[#C0392B] rounded-xl flex items-center justify-center text-white mb-4 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <item.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300 drop-shadow-md">
                                {item.title}
                            </h3>

                            <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                                <p className="text-slate-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// --- Expandable Technical Cards (Shared Layout) ---
export const ExpandableTechGallery = ({ items, className }: any) => {
    const [active, setActive] = useState<any | null>(null);
    const id = useId();

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActive(null);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 h-full w-full z-[100] backdrop-blur-sm"
                        onClick={() => setActive(null)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-[101] pointer-events-none p-4">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-slate-900 sm:rounded-3xl overflow-hidden pointer-events-auto border border-white/10 shadow-2xl relative"
                        >
                            <motion.button
                                key={`button-${active.title}-${id}`}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white rounded-full p-2 hover:bg-black/70 z-50 transition-colors"
                                onClick={() => setActive(null)}
                            >
                                <X size={20} />
                            </motion.button>

                            <div className="relative h-48 md:h-64 w-full shrink-0">
                                <motion.img
                                    layoutId={`image-${active.title}-${id}`}
                                    src={active.image}
                                    alt={active.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="p-8 flex flex-col bg-slate-900">
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        layoutId={`icon-bg-${active.title}-${id}`}
                                        className="w-14 h-14 bg-[#C0392B] rounded-xl flex items-center justify-center text-white shadow-lg shrink-0"
                                    >
                                        <active.icon size={28} />
                                    </motion.div>
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="text-3xl font-bold text-white leading-tight"
                                    >
                                        {active.title}
                                    </motion.h3>
                                </div>
                                <motion.div
                                    layoutId={`desc-${active.title}-${id}`}
                                    className="text-slate-300 text-base leading-relaxed space-y-4"
                                >
                                    <p>{active.desc}</p>
                                    <p className="text-slate-400">
                                        This benefit is designed to support your professional growth and personal well-being. At Veldursen, we believe that investing in our people is the key to our success. Enjoy access to premium resources, flexible options, and a supportive community.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full", className)}>
                {items.map((item: any) => (
                    <motion.div
                        layoutId={`card-${item.title}-${id}`}
                        key={item.title}
                        onClick={() => setActive(item)}
                        className="group relative h-[320px] w-full bg-slate-900 border border-white/10 hover:border-[#C0392B]/50 rounded-2xl cursor-pointer hover:shadow-2xl transition-all overflow-hidden flex flex-col"
                    >
                        {/* Thumbnail Image */}
                        <div className="absolute inset-0 h-full w-full">
                            <motion.img
                                layoutId={`image-${item.title}-${id}`}
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                        </div>

                        {/* Card Content Overlay */}
                        <div className="relative z-10 flex flex-col justify-end h-full p-6">
                            <motion.div
                                layoutId={`icon-bg-${item.title}-${id}`}
                                className="w-12 h-12 bg-[#C0392B] rounded-lg flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                            >
                                <item.icon size={24} />
                            </motion.div>

                            <motion.h3
                                layoutId={`title-${item.title}-${id}`}
                                className="text-xl font-bold text-white mb-2 group-hover:text-[#C0392B] transition-colors"
                            >
                                {item.title}
                            </motion.h3>

                            <motion.div
                                layoutId={`desc-${item.title}-${id}`}
                                className="text-slate-400 text-sm line-clamp-2 group-hover:text-slate-200 transition-colors"
                            >
                                {item.desc}
                            </motion.div>

                            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs text-white uppercase tracking-wider font-bold">Read details</span>
                                <span className="text-white">→</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
};
