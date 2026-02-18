import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    // Extract numeric value and handle different formats
    const parseValue = (val: string) => {
        // Handle percentage values
        if (val.includes('%')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: '%', isDecimal: val.includes('.') };
        }
        // Handle values with + suffix
        if (val.includes('+')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: '+', isDecimal: val.includes('.') };
        }
        // Handle 24/7 format
        if (val.includes('/')) {
            return { numeric: 0, suffix: val, isDecimal: false, isSpecial: true };
        }
        // Handle M+ values (millions)
        if (val.includes('M+')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: 'M+', isDecimal: val.includes('.') };
        }
        // Handle K+ values (thousands)  
        if (val.includes('K+')) {
            return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: 'K+', isDecimal: val.includes('.') };
        }
        // Default numeric extraction
        return { numeric: parseFloat(val.replace(/[^0-9.]/g, '')), suffix: '', isDecimal: val.includes('.') };
    };

    const { numeric: numericValue, suffix: valueSuffix, isDecimal, isSpecial } = parseValue(value);

    useEffect(() => {
        if (!isInView || isSpecial) return;

        let start = 0;
        const end = numericValue;
        const duration = 2000; // 2 seconds
        const incrementTime = 20; // Update every 20ms
        const steps = duration / incrementTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isInView, numericValue, isSpecial]);

    if (isSpecial) {
        return <span ref={ref}>{value}</span>;
    }

    const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count);

    return (
        <span ref={ref}>
            {displayValue}{valueSuffix}{suffix}
        </span>
    );
};

export default AnimatedCounter;
