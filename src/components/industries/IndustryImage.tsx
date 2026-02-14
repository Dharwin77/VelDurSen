import { motion } from "framer-motion";
import { useState } from "react";

interface IndustryImageProps {
    src: string;
    alt: string;
    animationType?: 'fadeIn' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'float' | 'tilt' | 'parallax';
    className?: string;
    containerClassName?: string;
}

export const IndustryImage = ({
    src,
    alt,
    animationType = 'fadeIn',
    className = '',
    containerClassName = ''
}: IndustryImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const getAnimationVariants = () => {
        switch (animationType) {
            case 'slideLeft':
                return {
                    initial: { opacity: 0, x: -60 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 }
                };
            case 'slideRight':
                return {
                    initial: { opacity: 0, x: 60 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 }
                };
            case 'zoomIn':
                return {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { duration: 0.7 }
                };
            case 'float':
                return {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.7 }
                };
            case 'tilt':
                return {
                    initial: { opacity: 0, rotateY: -10 },
                    whileInView: { opacity: 1, rotateY: 0 },
                    transition: { duration: 0.8 }
                };
            case 'parallax':
                return {
                    initial: { opacity: 0, y: 50, scale: 0.95 },
                    whileInView: { opacity: 1, y: 0, scale: 1 },
                    transition: { duration: 0.8 }
                };
            default:
                return {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.6 }
                };
        }
    };

    const animation = getAnimationVariants();

    // Placeholder when image fails to load or is loading
    if (hasError) {
        return (
            <motion.div
                {...animation}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl overflow-hidden ${containerClassName}`}
            >
                <div className="aspect-[3/2] flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{alt}</p>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            {...animation}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative overflow-hidden rounded-2xl shadow-xl ${containerClassName}`}
            whileHover={animationType === 'tilt' ? {
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
            } : animationType === 'zoomIn' ? {
                scale: 1.05,
                transition: { duration: 0.3 }
            } : undefined}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Loading skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse" />
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className}`}
            />

            {/* Subtle overlay for better text contrast if needed */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
        </motion.div>
    );
};
