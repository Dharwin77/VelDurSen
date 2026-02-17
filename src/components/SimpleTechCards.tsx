import { Link } from 'react-router-dom';
import aiImage from '@/assets/blog-10.png';
import mobImage from '@/assets/blog-3.png';
import deImage from '@/assets/blog-8.png';
import cloudImage from '@/assets/blog-2.png';
import csImage from '@/assets/blog-9.png';
import aImage from '@/assets/blog-5.png';

const cardData = [
    {
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Advanced AI algorithms and machine learning models that provide intelligent automation, predictive analytics, and data-driven decision making for enterprise applications.',
        label: 'AI/ML Stack',
        image: aiImage,
    },
    {
        title: 'Automation & Security',
        description: 'Streamline workflows and protect your enterprise with intelligent automation and advanced security frameworks.',
        label: 'Efficiency',
        image: mobImage,
    },
    {
        title: 'Data Engineering',
        description: 'Transform data into actionable insights with modern data pipelines and analytics platforms.',
        label: 'Data Operations',
        image: deImage,
    },
    {
        title: 'Cloud & Infrastructure',
        description: 'Scalable cloud-native architecture with microservices, containerization, and orchestration technologies that ensure reliability, performance, and cost efficiency.',
        label: 'Cloud Engineering',
        image: cloudImage,
    },
    {
        title: 'Cybersecurity & Compliance',
        description: 'Zero-trust security frameworks, threat detection, and compliance technologies that protect sensitive enterprise data and maintain regulatory standards.',
        label: 'Security First',
        image: csImage,
    },
    {
        title: 'Automation',
        description: 'Simplify complex processes with intelligent workflows and automation technologies.',
        label: 'Process Automation',
        image: aImage,
    },
];

const SimpleTechCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-2 md:px-4">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-purple-500/30 bg-slate-950/90 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group min-h-[240px] sm:min-h-[260px] md:min-h-[280px]"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-5 md:p-6 flex flex-col h-full justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-3 leading-tight break-words hyphens-auto">
                                {card.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-4">
                                {card.description}
                            </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-700/50">
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                                {card.label}
                            </span>
                        </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SimpleTechCards;
