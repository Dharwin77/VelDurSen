import React, { useState, useRef, useCallback, ReactNode } from 'react';
import './GlareHover.css';

interface GlareHoverProps {
    children: ReactNode;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
    className?: string; // Added className for better integration
}

const GlareHover: React.FC<GlareHoverProps> = ({
    children,
    glareColor = '#ffffff',
    glareOpacity = 0.3,
    glareAngle = -30,
    glareSize = 300,
    transitionDuration = 800,
    playOnce = false,
    className = '',
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [hasPlayed, setHasPlayed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || (playOnce && hasPlayed)) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setGlarePosition({ x, y });
    }, [playOnce, hasPlayed]);

    const handleMouseEnter = () => {
        if (playOnce && hasPlayed) return;
        setIsHovered(true);
        if (playOnce) setHasPlayed(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            ref={containerRef}
            className={`glare-hover-container ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="glare-hover-content">
                {children}
            </div>
            <div
                className="glare-hover-overlay"
                style={{
                    '--glare-x': `${glarePosition.x}%`,
                    '--glare-y': `${glarePosition.y}%`,
                    '--glare-color': glareColor,
                    '--glare-opacity': isHovered ? glareOpacity : 0,
                    '--glare-size': `${glareSize}px`,
                    '--glare-angle': `${glareAngle}deg`,
                    '--transition-duration': `${transitionDuration}ms`,
                } as React.CSSProperties}
            />
        </div>
    );
};

export default GlareHover;
