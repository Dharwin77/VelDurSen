import { useRef, useEffect, forwardRef, Children, isValidElement, cloneElement, ReactElement, ReactNode, useImperativeHandle } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CardSwapRef {
    swap: () => void;
    swapBack: () => void;
}

export interface CardSwapProps {
    // Config
    width?: number | string;
    height?: number | string;
    cardDistance?: number;
    verticalDistance?: number;
    delay?: number; // Time (ms) between swaps
    transitionDuration?: number; // How long the swap animation takes
    ease?: string; // GSAP easing string (e.g. "power2.inOut")

    // Content
    children: ReactNode;

    // Interaction (optional)
    pauseOnHover?: boolean;
    showControls?: boolean;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    // If user wants to pass custom classes
    className?: string;
}

// --------------------------------------------------------
// CARD COMPONENT
// --------------------------------------------------------
export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={`absolute rounded-[2rem] shadow-2xl overflow-hidden bg-white border border-slate-200 ${className ?? ""
                    }`}
                style={{
                    // We want the card to be centered or positioned by the parent GSAP logic
                    // But to be safe, let's keep it clean here.
                    // The parent will set x, y, z, zIndex.
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                }}
                {...rest}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";

// --------------------------------------------------------
// CARDSWAP COMPONENT
// --------------------------------------------------------
const CardSwap = forwardRef<CardSwapRef, CardSwapProps>(({
    width = "100%",
    height = "600px",
    cardDistance = 40,
    verticalDistance = 40,
    delay = 2000,
    transitionDuration = 1.0,
    ease = "power2.inOut",
    pauseOnHover = true,
    showControls = true,
    children,
}, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Convert children to array to manage them
    const childArray = Children.toArray(children) as ReactElement<CardProps>[];
    const totalCards = childArray.length;

    // We need refs for each card to animate them
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // We'll keep track of the logical "order" of indices
    // e.g. [0, 1, 2, 3] where 0 is front, 3 is back
    const orderRef = useRef<number[]>(Array.from({ length: totalCards }, (_, i) => i));

    // GSAP Timeline to handle the animation queue
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    // Interval for auto-swap
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Helper: Calculate visual slot properties based on index (0 = front)
    // idx 0: x=0, y=0, z=0, zIndex=100
    // idx 1: x=OFFSET, y=-OFFSET, z=-Depth, zIndex=99
    const getSlot = (index: number) => {
        return {
            x: index * cardDistance,        // Shift right
            y: -index * verticalDistance,   // Shift up slightly (negative Y is up)
            z: -index * 50,                 // Push back in 3D
            zIndex: totalCards - index,     // Front is highest
            scale: 1 - index * 0.05,        // Optional: shrink slightly as they go back
            opacity: 1 - index * 0.1,        // Optional: fade slightly
            rotation: 0
        };
    };

    // 1. Initial Setup
    useEffect(() => {
        // Populate refs array to match children length
        cardRefs.current = cardRefs.current.slice(0, totalCards);

        // Initial positioning
        orderRef.current.forEach((originalIndex, visualPositionIndex) => {
            const el = cardRefs.current[originalIndex];
            if (!el) return;

            const slot = getSlot(visualPositionIndex);

            gsap.set(el, {
                x: slot.x,
                y: slot.y,
                z: slot.z,
                zIndex: slot.zIndex,
                scale: slot.scale,
                opacity: slot.opacity,
                transformOrigin: "center center",
            });
        });
    }, [totalCards, cardDistance, verticalDistance]);

    // 2. The Swap Logic
    const swap = () => {
        // Need at least 2 cards to swap
        if (totalCards < 2) return;
        if (tlRef.current && tlRef.current.isActive()) return; // Don't swap if animating

        // Current front card index in the `orderRef` array is at index 0
        // [front, ...others, back]
        const currentOrder = [...orderRef.current];
        const frontCardIdx = currentOrder[0];
        const remainingCards = currentOrder.slice(1);

        // We move front card to the very back
        const newOrder = [...remainingCards, frontCardIdx];

        // Create animation timeline
        const tl = gsap.timeline({
            onComplete: () => {
                // Update the order reference visually for next time
                orderRef.current = newOrder;
            }
        });
        tlRef.current = tl;

        const frontEl = cardRefs.current[frontCardIdx];
        if (!frontEl) return;

        // A. Animate Front Card: Slide OUT (to the right/fadeOut)
        tl.to(frontEl, {
            x: "+=300",
            y: "+=100",
            rotation: 10,
            opacity: 0,
            zIndex: 0, // Drop behind immediately (visually handled by opacity)
            duration: transitionDuration * 0.5,
            ease: "power2.in"
        });

        // B. Simultaneously animate all other cards forward one slot
        remainingCards.forEach((cardIdx, i) => {
            const el = cardRefs.current[cardIdx];
            if (!el) return;

            // They are moving from slot (i+1) to slot (i)
            const targetSlot = getSlot(i); // i is the NEW visual position (0, 1, 2...)

            tl.to(el, {
                x: targetSlot.x,
                y: targetSlot.y,
                z: targetSlot.z,
                zIndex: targetSlot.zIndex,
                scale: targetSlot.scale,
                opacity: targetSlot.opacity,
                rotation: targetSlot.rotation,
                duration: transitionDuration,
                ease: ease
            }, "<"); // Access start ("<") to run parallel with Front Card exit
        });

        // C. Animate Front Card coming back in at the BACK of the stack
        const lastSlot = getSlot(totalCards - 1); // The very last visual slot

        // First: set its state instantly to "behind" everything, invisible
        tl.set(frontEl, {
            x: lastSlot.x,
            y: lastSlot.y,
            z: lastSlot.z,
            zIndex: lastSlot.zIndex,
            scale: lastSlot.scale,
            rotation: 0
            // opacity is still 0 from step A
        });

        // Then: fade it in at that position
        tl.to(frontEl, {
            opacity: lastSlot.opacity,
            duration: transitionDuration * 0.5,
            ease: "power2.out"
        }, "-=0.5"); // Overlap slightly with the main shift
    };

    const swapBack = () => {
        // Reverse logic roughly
        if (totalCards < 2) return;
        if (tlRef.current && tlRef.current.isActive()) return;

        // [front, ...others, back]
        // We want to bring BACK to FRONT
        const currentOrder = [...orderRef.current];
        const backCardIdx = currentOrder[totalCards - 1]; // The current visual "back"
        const remainingCards = currentOrder.slice(0, totalCards - 1);

        // New order will be [back, front, ...others]
        const newOrder = [backCardIdx, ...remainingCards];

        const tl = gsap.timeline({
            onComplete: () => {
                orderRef.current = newOrder;
            }
        });
        tlRef.current = tl;

        const backEl = cardRefs.current[backCardIdx];
        if (!backEl) return;


        // 1. Move visuals BACK one slot (everyone moves deeper except the one coming forward)
        remainingCards.forEach((cardIdx, i) => {
            const el = cardRefs.current[cardIdx];
            if (!el) return;
            // They are moving from slot (i) to slot (i+1)
            const targetSlot = getSlot(i + 1);
            tl.to(el, {
                x: targetSlot.x,
                y: targetSlot.y,
                z: targetSlot.z,
                zIndex: targetSlot.zIndex,
                scale: targetSlot.scale,
                opacity: targetSlot.opacity,
                duration: transitionDuration,
                ease: ease
            }, i === 0 ? undefined : "<");
        });

        // 2. Animate Back Card appearing from hidden/right to Front
        const frontSlot = getSlot(0);

        // Instantly place it "off screen" to the right/bottom where the front usually exits to
        tl.set(backEl, {
            x: frontSlot.x + 300,
            y: frontSlot.y + 100,
            rotation: 10,
            zIndex: frontSlot.zIndex + 1, // On top of everything
            opacity: 0,
            scale: frontSlot.scale
        }, 0);

        // Animate it IN to the front slot
        tl.to(backEl, {
            x: frontSlot.x,
            y: frontSlot.y,
            rotation: 0,
            opacity: 1,
            zIndex: frontSlot.zIndex,
            duration: transitionDuration,
            ease: "power2.out"
        }, 0);
    };

    useImperativeHandle(ref, () => ({
        swap,
        swapBack
    }));

    // 3. Auto-Play Interval
    useEffect(() => {
        const startTimer = () => {
            timerRef.current = setInterval(swap, delay);
        };
        const stopTimer = () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };

        startTimer();

        // Pause on Hover Logic
        const node = containerRef.current;
        if (pauseOnHover && node) {
            const onEnter = () => stopTimer();
            const onLeave = () => startTimer();
            node.addEventListener("mouseenter", onEnter);
            node.addEventListener("mouseleave", onLeave);

            return () => {
                stopTimer();
                node.removeEventListener("mouseenter", onEnter);
                node.removeEventListener("mouseleave", onLeave);
            };
        }

        return () => stopTimer();
    }, [delay, pauseOnHover, totalCards, ease, transitionDuration]);

    // Render Children
    return (
        <div
            className="flex flex-col items-center justify-center relative"
            style={{ width, minHeight: typeof height === 'number' ? `${height + 100}px` : height, height: 'auto' }}
        >
            <div
                className="relative perspective-[1200px] flex items-center justify-center p-20 w-full"
                style={{ height }}
                ref={containerRef}
            >
                <div className="relative w-full h-full max-w-4xl mx-auto preserve-3d">
                    {childArray.map((child, i) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return cloneElement(child as any, {
                            ref: (el: HTMLDivElement) => { cardRefs.current[i] = el; },
                            key: child.key || i
                        });
                    })}
                </div>
            </div>

            {showControls && (
                <div className="mt-8 flex gap-4 z-20">
                    <button
                        onClick={() => {
                            if (timerRef.current) clearInterval(timerRef.current);
                            swapBack();
                        }}
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors"
                        aria-label="Previous Card"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => {
                            if (timerRef.current) clearInterval(timerRef.current);
                            swap();
                        }}
                        className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 shadow-lg flex items-center justify-center text-white hover:bg-slate-800 transition-colors"
                        aria-label="Next Card"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
});
CardSwap.displayName = 'CardSwap';

export default CardSwap;
