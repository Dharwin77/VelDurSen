import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import loadingBg from "@/assets/loading.png";
import loadingLeft from "@/assets/coptercode8.png.jpeg";
import loadingRight from "@/assets/coptercode7.png.jpeg";
import { client, urlFor } from "@/lib/sanity";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState<any>(null);

    useEffect(() => {
        // Fetch global settings
        const fetchSettings = async () => {
            try {
                const data = await client.fetch(`*[_type == "globalSettings"][0]{
                    loadingImages,
                    loadingText
                }`);
                if (data) setSettings(data);
            } catch (error) {
                console.error("Failed to fetch loading settings:", error);
            }
        };

        fetchSettings();

        // Artificial loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    // Helper to get image URL or fallback
    const getImage = (index: number, fallback: string) => {
        if (settings?.loadingImages && settings.loadingImages[index]) {
            return urlFor(settings.loadingImages[index]).url();
        }
        return fallback;
    };

    // Helper to render text with split color if it matches default pattern, else full text
    const renderText = () => {
        const text = settings?.loadingText || "Welcome to VelDurSen";
        if (text.includes("VelDurSen")) {
            const parts = text.split("VelDurSen");
            return (
                <>
                    <span className="text-white text-3xl md:text-4xl font-['Inter'] font-black tracking-tighter mr-3">{parts[0]}</span>
                    <span className="text-red-600 text-3xl md:text-4xl font-['Inter'] font-black tracking-tighter">VelDurSen</span>
                    {parts[1]}
                </>
            );
        }
        return <span className="text-white text-3xl md:text-4xl font-['Inter'] font-black tracking-tighter">{text}</span>;
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] bg-[#1a1c23] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Multi-Panel Background System */}
                    <div className="absolute inset-0 z-0 flex w-full h-full opacity-60">
                        {/* Left Panel - Hidden on mobile */}
                        <div
                            className="hidden md:flex flex-1 bg-cover bg-center bg-no-repeat border-r border-white/5"
                            style={{ backgroundImage: `url(${getImage(0, loadingLeft)})` }}
                        />

                        {/* Center Panel (Main Building) - Full width on mobile, centered on desktop */}
                        <div
                            className="flex-1 md:flex-[1.5] bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${getImage(1, loadingBg)})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}
                        />

                        {/* Right Panel - Hidden on mobile */}
                        <div
                            className="hidden md:flex flex-1 bg-cover bg-center bg-no-repeat border-l border-white/5"
                            style={{ backgroundImage: `url(${getImage(2, loadingRight)})` }}
                        />
                    </div>

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/70" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Container */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <img
                                src={logo}
                                alt="VelDurSen Logo"
                                className="h-24 md:h-32 w-auto filter drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                            />
                        </motion.div>

                        {/* Welcome Text */}
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                                className="text-center drop-shadow-lg"
                            >
                                {renderText()}
                            </motion.h1>
                        </div>

                        {/* Loading Bar */}
                        <div className="mt-12 w-48 h-[2px] bg-white/20 rounded-full overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut"
                                }}
                                className="h-full w-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="mt-6 text-[10px] font-black text-slate-200 uppercase tracking-[0.5em] text-center drop-shadow-md"
                        >
                            Architecting Excellence
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
