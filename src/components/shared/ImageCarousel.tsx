import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlareHover from "@/components/shared/GlareHover";

const ImageCarousel = ({ images, interval = 4000 }: { images: string[]; interval?: number }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images, interval]);

    if (!images || images.length === 0) return null;

    return (
        <GlareHover glareOpacity={0.15} glareSize={400}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                    />
                ))}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/50 hover:bg-white/70'
                                }`}
                        />
                    ))}
                </div>
            </motion.div>
        </GlareHover>
    );
};

export default ImageCarousel;
