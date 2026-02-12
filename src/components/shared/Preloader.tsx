import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import loadingBg from "@/assets/loading.png";
import loadingLeft from "@/assets/loading1.png";
import loadingRight from "@/assets/loading2.png";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Artificial loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

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
                        {/* Left Panel */}
                        <div
                            className="flex-1 bg-cover bg-center bg-no-repeat border-r border-white/5"
                            style={{ backgroundImage: `url(${loadingLeft})` }}
                        />

                        {/* Center Panel (Main Building) */}
                        <div
                            className="flex-[1.5] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${loadingBg})` }}
                        />

                        {/* Right Panel */}
                        <div
                            className="flex-1 bg-cover bg-center bg-no-repeat border-l border-white/5"
                            style={{ backgroundImage: `url(${loadingRight})` }}
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
                                className="text-white text-2xl md:text-3xl font-black tracking-[0.2em] uppercase text-center drop-shadow-lg"
                            >
                                Welcome to <span className="text-red-600">VelDurSen</span>
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
