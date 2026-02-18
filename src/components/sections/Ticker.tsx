import { Link } from 'react-router-dom';
import { Code, Trophy, Factory, GraduationCap, Mail, Sparkles, Globe2, Circle, Star, Zap } from 'lucide-react';

const iconMap: any = {
    Code, Trophy, Factory, GraduationCap, Mail, Sparkles, Globe2, Circle, Star, Zap
};

export default function Ticker({ data }: { data: any }) {
    // Default items if no data
    const defaultItems = [
        { text: "Next-Gen Technology Stack: AI, Cloud & Modern Ops", link: "/services", icon: "Code" },
        { text: "Best Enterprise AI Innovation Award", link: "/", icon: "Trophy" },
        { text: "Empowering Industries: Finance, Healthcare, Retail & Manufacturing", link: "/services", icon: "Factory" },
        { text: "Global Technology Internship Program 2026", link: "/internships", icon: "GraduationCap" },
        { text: "Start Your Transformation Journey - Contact Us Today", link: "/contact", icon: "Mail" }
    ];

    const items = data?.items?.length ? data.items : defaultItems;

    const renderItems = () => (
        <div className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white px-8 gap-8">
            {items.map((item: any, idx: number) => {
                const Icon = iconMap[item.icon] || Circle;
                return (
                    <div key={idx} className="flex items-center gap-8">
                        <Link to={item.link || '#'} className="flex items-center gap-2 hover:text-red-300 hover:underline transition-all">
                            <Icon size={14} className="text-red-400" /> {item.text}
                        </Link>
                        <span className="opacity-50">•</span>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm py-4 overflow-hidden z-20">
            <div className="flex whitespace-nowrap animate-scroll-slow hover:[animation-play-state:paused] transition-all duration-300">
                {renderItems()}
                {renderItems()}
            </div>
        </div>
    );
}
