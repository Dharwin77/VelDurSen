import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import aboutTeam from '@/assets/about-team.jpg';
import aiImage from '@/assets/blog-10.png';
import mobImage from '@/assets/blog-3.png';
import deImage from '@/assets/blog-8.png';
import cloudImage from '@/assets/blog-2.png';
import csImage from '@/assets/blog-9.png';
import aImage from '@/assets/blog-5.png';
import './MagicBento.css';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData = [
    {
        color: '#060010',
        title: 'Artificial Intelligence',
        description: 'Smart analytics and insights powered by AI',
        label: 'AI',
        image: aiImage,
        merged: true,
        aiServiceText: 'Predictive Analytics\nMachine Learning Models'
    },
    {
        color: '#060010',
        title: 'Automation & Security',
        description: 'Streamline workflows and protect your enterprise',
        label: 'Efficiency',
        image: mobImage,
        merged: true
    },
    {
        color: '#060010',
        title: 'Data Engineer',
        description: 'Transform data into actionable insights',
        label: 'Data',
        image: deImage
    },
    {
        color: '#060010',
        title: 'Cloud & Devops',
        description: 'Scale infrastructure with confidence',
        label: 'Cloud',
        image: cloudImage,
        merged: true
    },
    {
        color: '#060010',
        title: 'Cyber Security',
        description: 'Protect against threats with advanced defense',
        label: 'Security',
        image: csImage,
        merged: true
    },
    {
        color: '#060010',
        title: 'Automation',
        description: 'Simplify complex processes with intelligent workflows',
        label: 'Auto',
        image: aImage,
        merged: true
    },
];

const createParticleElement = (x: number, y: number, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'particle star-particle';
    el.style.cssText = `
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(${color}, 0.9) 40%, rgba(${color}, 0.6) 100%);
    box-shadow: 
      0 0 8px rgba(${color}, 0.8),
      0 0 12px rgba(${color}, 0.6),
      0 0 16px rgba(${color}, 0.4),
      0 0 2px rgba(255, 255, 255, 1);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;

    // Add sparkle animation elements
    const sparkle1 = document.createElement('div');
    sparkle1.style.cssText = `
    position: absolute;
    width: 12px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

    const sparkle2 = document.createElement('div');
    sparkle2.style.cssText = `
    position: absolute;
    width: 1px;
    height: 12px;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

    el.appendChild(sparkle1);
    el.appendChild(sparkle2);

    return el;
};

// Create bubble elements
const createBubbleElement = (x: number, y: number): HTMLElement => {
    const bubble = document.createElement('div');
    bubble.className = 'magic-bubble';
    const size = 8 + Math.random() * 16; // Random size between 8-24px

    bubble.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(132, 0, 255, 0.4));
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
      inset 0 0 ${size * 0.3}px rgba(255, 255, 255, 0.6),
      0 0 ${size * 0.5}px rgba(132, 0, 255, 0.3);
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
    z-index: 3;
    opacity: 0;
  `;

    return bubble;
};

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false
}: {
    children: React.ReactNode;
    className?: string;
    disableAnimations?: boolean;
    style?: React.CSSProperties;
    particleCount?: number;
    glowColor?: string;
    enableTilt?: boolean;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLElement[]>([]);
    const bubblesRef = useRef<HTMLElement[]>([]);
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
    const bubbleIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef<HTMLElement[]>([]);
    const particlesInitialized = useRef(false);
    const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

    const initializeParticles = useCallback(() => {
        if (particlesInitialized.current || !cardRef.current) return;

        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () =>
            createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();

        if (bubbleIntervalRef.current) {
            clearInterval(bubbleIntervalRef.current);
            bubbleIntervalRef.current = null;
        }

        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => {
                    particle.parentNode?.removeChild(particle);
                }
            });
        });
        particlesRef.current = [];

        // Clear bubbles
        bubblesRef.current.forEach(bubble => {
            gsap.to(bubble, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    bubble.parentNode?.removeChild(bubble);
                }
            });
        });
        bubblesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;

        if (!particlesInitialized.current) {
            initializeParticles();
        }

        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;

                const clone = particle.cloneNode(true) as HTMLElement;
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);

                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to(clone, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, index * 100);

            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);

    useEffect(() => {
        if (disableAnimations || !cardRef.current) return;

        const element = cardRef.current;

        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            animateParticles();

            // Start spawning bubbles
            if (cardRef.current) {
                bubbleIntervalRef.current = setInterval(() => {
                    if (!isHoveredRef.current || !cardRef.current) return;

                    const rect = cardRef.current.getBoundingClientRect();
                    const bubble = createBubbleElement(
                        Math.random() * rect.width,
                        rect.height + 20
                    );

                    cardRef.current.appendChild(bubble);
                    bubblesRef.current.push(bubble);

                    // Animate bubble floating up
                    gsap.to(bubble, {
                        y: -(rect.height + 40),
                        x: `+=${(Math.random() - 0.5) * 60}`,
                        opacity: 1,
                        duration: 2 + Math.random() * 2,
                        ease: 'power1.out',
                        onComplete: () => {
                            bubble.parentNode?.removeChild(bubble);
                            const index = bubblesRef.current.indexOf(bubble);
                            if (index > -1) bubblesRef.current.splice(index, 1);
                        }
                    });

                    // Fade out near top
                    gsap.to(bubble, {
                        opacity: 0,
                        delay: 1.5 + Math.random(),
                        duration: 0.8
                    });
                }, 300);
            }

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 5,
                    rotateY: 5,
                    duration: 0.3,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }

            if (enableMagnetism) {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!enableTilt && !enableMagnetism) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(element, {
                    rotateX,
                    rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }

            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;

                magnetismAnimationRef.current = gsap.to(element, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleClick = (e: MouseEvent) => {
            if (!clickEffect) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height)
            );

            const ripple = document.createElement('div');
            ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

            element.appendChild(ripple);

            gsap.fromTo(
                ripple,
                {
                    scale: 0,
                    opacity: 1
                },
                {
                    scale: 1,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                }
            );
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('click', handleClick);

        return () => {
            isHoveredRef.current = false;
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('click', handleClick);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

    return (
        <div
            ref={cardRef}
            className={`${className} particle-container`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            {children}
        </div>
    );
};

const GlobalSpotlight = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}: {
    gridRef: React.RefObject<HTMLDivElement>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}) => {
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const isInsideSection = useRef(false);

    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled) return;

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current || !gridRef.current) return;

            const section = gridRef.current.closest('.bento-section');
            const rect = section?.getBoundingClientRect();
            const mouseInside =
                rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

            isInsideSection.current = mouseInside || false;
            const cards = gridRef.current.querySelectorAll('.magic-bento-card');

            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                return;
            }

            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
            let minDistance = Infinity;

            cards.forEach(card => {
                const cardElement = card as HTMLElement;
                const cardRect = cardElement.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance =
                    Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                const effectiveDistance = Math.max(0, distance);

                minDistance = Math.min(minDistance, effectiveDistance);

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });

            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.8
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                        : 0;

            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            isInsideSection.current = false;
            gridRef.current?.querySelectorAll('.magic-bento-card').forEach(card => {
                (card as HTMLElement).style.setProperty('--glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

    return null;
};

const BentoCardGrid = ({ children, gridRef }: { children: React.ReactNode; gridRef: React.RefObject<HTMLDivElement> }) => (
    <div className="card-grid bento-section" ref={gridRef}>
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const MagicBento = ({
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    disableAnimations = false,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    particleCount = DEFAULT_PARTICLE_COUNT,
    enableTilt = false,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true,
    enableMagnetism = true
}: {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    enableTilt?: boolean;
    glowColor?: string;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;

    return (
        <>
            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <BentoCardGrid gridRef={gridRef}>
                {cardData.map((card, index) => {
                    const baseClassName = `magic-bento-card ${textAutoHide ? 'magic-bento-card--text-autohide' : ''} ${enableBorderGlow ? 'magic-bento-card--border-glow' : ''}`;
                    const cardProps = {
                        className: baseClassName,
                        style: {
                            backgroundColor: card.color,
                            '--glow-color': glowColor
                        } as React.CSSProperties
                    };

                    if (enableStars) {
                        return (
                            <ParticleCard
                                key={index}
                                {...cardProps}
                                disableAnimations={shouldDisableAnimations}
                                particleCount={particleCount}
                                glowColor={glowColor}
                                enableTilt={enableTilt}
                                clickEffect={clickEffect}
                                enableMagnetism={enableMagnetism}
                            >
                                <div className="magic-bento-card__header">
                                    <div className="magic-bento-card__label">{card.label}</div>
                                </div>
                                {index === 0 && card.aiServiceText && (
                                    <div className="magic-bento-card__sidebar">
                                        {card.aiServiceText.split('\n').map((line, i) => (
                                            <div key={i}>{line}</div>
                                        ))}
                                    </div>
                                )}
                                {card.image && (
                                    <div className="magic-bento-card__image">
                                        <img src={card.image} alt={card.title} />
                                    </div>
                                )}
                                <div className="magic-bento-card__content">
                                    <h2 className="magic-bento-card__title">{card.title}</h2>
                                    <p className="magic-bento-card__description">{card.description}</p>
                                </div>
                            </ParticleCard>
                        );
                    }

                    return (
                        <div key={index} {...cardProps}>
                            <div className="magic-bento-card__header">
                                <div className="magic-bento-card__label">{card.label}</div>
                            </div>
                            {index === 0 && card.aiServiceText && (
                                <div className="magic-bento-card__sidebar">
                                    {card.aiServiceText.split('\n').map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>
                            )}
                            {card.image && (
                                <div className="magic-bento-card__image">
                                    <img src={card.image} alt={card.title} />
                                </div>
                            )}
                            <div className="magic-bento-card__content">
                                <h2 className="magic-bento-card__title">{card.title}</h2>
                                <p className="magic-bento-card__description">{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </BentoCardGrid>
        </>
    );
};

export default MagicBento;
