import img1 from "@/assets/Gemini_Generated_Image_ello0sello0sello.png";
import img2 from "@/assets/Gemini_Generated_Image_uugaqruugaqruuga.png";
import img3 from "@/assets/Gemini_Generated_Image_zh56h0zh56h0zh56.png";
import img4 from "@/assets/blog-10.png";
import img5 from "@/assets/blog-2.png";
import img6 from "@/assets/blog-3.png";

export interface Achievement {
    id: string;
    title: string;
    category: string;
    venue: string;
    date: string;
    description: string;
    image: string;
    fullDescription: string;
    delivered: string[];
    impact: string[];
    trophyText: string;
}

export const achievementsData: Achievement[] = [
    {
        id: "global-enterprise-ai-excellence",
        title: "Global Enterprise AI Excellence Award",
        category: "Artificial Intelligence Innovation",
        venue: "International Tech Summit, Singapore",
        date: "March 2025",
        description: "Awarded for deploying scalable enterprise AI systems that transformed multi-region operations and automated critical business workflows.",
        image: img1,
        fullDescription: "VelDurSen was recognized for designing and deploying enterprise AI systems that improved operational efficiency, automated workflows, and delivered measurable ROI across global business units. Our innovative approach to AI integration allowed seamless adoption within existing infrastructures, minimizing disruption while maximizing output.",
        delivered: [
            "AI model deployment at enterprise scale",
            "Real-time data analytics integration",
            "Secure multi-region architecture",
            "Performance optimization"
        ],
        impact: [
            "Increased operational efficiency",
            "Reduced infrastructure costs",
            "Enhanced security posture",
            "Scalable global expansion"
        ],
        trophyText: "Following successful implementation and measurable enterprise outcomes, VelDurSen was awarded the Global Enterprise AI Excellence Trophy for innovation and scalable digital transformation."
    },
    {
        id: "cloud-transformation-leadership",
        title: "Cloud Transformation Leadership Trophy",
        category: "Multi-Cloud Infrastructure Excellence",
        venue: "Global Cloud Expo, Dubai",
        date: "November 2024",
        description: "Recognized for designing resilient cloud-native architectures supporting high-availability enterprise platforms.",
        image: img2,
        fullDescription: "VelDurSen led a massive cloud transformation initiative for a Fortune 500 logistics partner, migrating legacy systems to a robust, multi-cloud environment. This project set new benchmarks for speed, reliability, and cost-efficiency in cloud architectural design.",
        delivered: [
            "Multi-cloud strategy implementation",
            "Containerization of legacy apps",
            "Automated disaster recovery setup",
            "Cost-optimization governance"
        ],
        impact: [
            "99.99% system availability",
            "40% reduction in operational overhead",
            "Faster time-to-market for new features",
            "Global scalability on demand"
        ],
        trophyText: "VelDurSen received the Cloud Transformation Leadership Trophy for demonstrating exceptional technical prowess and strategic vision in modernizing enterprise infrastructure."
    },
    {
        id: "cybersecurity-innovation-recognition",
        title: "Cybersecurity Innovation Recognition",
        category: "Zero-Trust Security Framework",
        venue: "World Cyber Defense Forum, London",
        date: "August 2024",
        description: "Honored for implementing enterprise-grade cybersecurity models across regulated industries.",
        image: img3,
        fullDescription: "In an era of increasing digital threats, VelDurSen implemented a pioneering Zero-Trust Security Framework for a global financial institution. This initiative secured critical assets and customer data against sophisticated cyber attacks while maintaining user accessibility.",
        delivered: [
            "Zero-Trust architecture rollout",
            "Identity and Access Management (IAM) overhaul",
            "Real-time threat monitoring systems",
            "Automated compliance reporting"
        ],
        impact: [
            "Zero breaches in first 12 months",
            "Full regulatory compliance achieved",
            "Enhanced customer trust metrics",
            "Streamlined secure access for remote workforce"
        ],
        trophyText: "The Cybersecurity Innovation Recognition highlights VelDurSen's commitment to protecting digital frontiers with state-of-the-art security methodologies."
    },
    {
        id: "sustainable-technology-impact",
        title: "Sustainable Technology Impact Award",
        category: "Green Computing & Ethical AI",
        venue: "Global Sustainability Tech Forum, Berlin",
        date: "January 2025",
        description: "Recognized for integrating carbon-aware cloud solutions and responsible AI governance into enterprise ecosystems.",
        image: img4,
        fullDescription: "VelDurSen champions sustainable technology. This award acknowledges our work in developing carbon-aware software solutions that optimize energy consumption in data centers without compromising performance, setting a standard for eco-friendly enterprise computing.",
        delivered: [
            "Carbon footprint analytics dashboard",
            "Energy-efficient code refactoring",
            "Green cloud provider selection algorithms",
            "Ethical AI assessment framework"
        ],
        impact: [
            "30% reduction in energy consumption",
            "Achievement of corporate sustainability goals",
            "Reduced long-term operational costs",
            "Positive brand alignment with eco-initiatives"
        ],
        trophyText: "We were honored with the Sustainable Technology Impact Award for proving that high-performance enterprise technology can and should be environmentally responsible."
    },
    {
        id: "industry-4-0-digital-turnaround",
        title: "Industry 4.0 Digital Transformation Award",
        category: "Smart Manufacturing Solutions",
        venue: "International Industry Innovation Expo, Tokyo",
        date: "May 2023",
        description: "Awarded for implementing predictive maintenance and real-time analytics in manufacturing operations.",
        image: img5,
        fullDescription: "Transforming traditional manufacturing into smart factories, VelDurSen deployed IoT sensors and predictive analytics to foresee equipment failures before they occurred. This Industry 4.0 initiative revolutionized production lines for a leading automotive manufacturer.",
        delivered: [
            "IoT sensor network deployment",
            "Predictive maintenance AI models",
            "Real-time production dashboard",
            "Digital twin implementation"
        ],
        impact: [
            "50% reduction in unplanned downtime",
            "20% increase in overall production efficiency",
            "Extended equipment lifespan",
            "Data-driven decision making on the floor"
        ],
        trophyText: "The Industry 4.0 Digital Transformation Award celebrates VelDurSen's role in driving the next industrial revolution through smart, connected technology."
    },
    {
        id: "global-agritech-innovation",
        title: "Global AgriTech Innovation Award",
        category: "Precision Agriculture & AI Analytics",
        venue: "World AgriTech Summit, Amsterdam",
        date: "September 2024",
        description: "Recognized for delivering AI-powered crop intelligence and IoT-based sustainable farming platforms.",
        image: img6,
        fullDescription: "VelDurSen's AgriTech solution utilized satellite imagery and soil sensors to provide farmers with actionable insights. This precision agriculture platform optimized resource usage and maximized crop yields, contributing to global food security efforts.",
        delivered: [
            "Satellite & drone data integration",
            "Soil moisture and nutrient sensing",
            "AI-driven crop yield forecasting",
            "Automated irrigation control systems"
        ],
        impact: [
            "25% increase in crop yields",
            "40% reduction in water usage",
            "Optimized fertilizer application",
            "Sustainable farming practices adoption"
        ],
        trophyText: "Receiving the Global AgriTech Innovation Award underscores VelDurSen's dedication to using technology to solve some of the world's most pressing challenges."
    }
];
