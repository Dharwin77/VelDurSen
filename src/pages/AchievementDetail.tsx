
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Award, CheckCircle2, Trophy, TrendingUp, Shield } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { SEO } from "@/components/shared/SEO";
import { achievementsData } from "@/data/achievements";

const AchievementDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const achievement = achievementsData.find((a) => a.id === slug);

    useEffect(() => {
        if (!achievement) {
            navigate("/");
        }
        window.scrollTo(0, 0);
    }, [achievement, navigate]);

    if (!achievement) return null;

    return (
        <PageLayout>
            <SEO
                title={`${achievement.title} | VelDurSen Achievements`}
                description={achievement.description}
                ogImage={achievement.image}
            />
            {/* 1. HERO IMAGE BANNER */}
            <section className="relative h-[calc(50vh-5cm)] min-h-[calc(400px-5cm)]">
                <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="enterprise-container absolute bottom-0 left-0 right-0 pb-12 z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center text-white/80 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors bg-transparent border-none cursor-pointer p-0"
                    >
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </button>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-none tracking-tighter"
                    >
                        {achievement.title.split(" ").slice(0, -1).join(" ")} <span className="text-red-600">{achievement.title.split(" ").slice(-1)}</span>
                    </motion.h1>
                </div>
            </section>

            {/* 2. CONTENT SECTION */}
            <section className="py-20 bg-white">
                <div className="enterprise-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left Column: Metadata & Details */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Project Overview */}
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-red-600 mb-4">Project Overview</h3>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                    {achievement.fullDescription}
                                </p>
                            </div>

                            {/* What We Delivered */}
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">What We <span className="text-red-600">Delivered.</span></h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {achievement.delivered.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                                        >
                                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                                            <span className="font-medium text-slate-700">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Business Impact */}
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-8 flex items-center gap-3">
                                    <TrendingUp className="text-amber-500" /> Business <span className="text-red-600">Impact.</span>
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {achievement.impact.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-amber-50/50 border border-amber-100"
                                        >
                                            <CheckCircle2 className="text-amber-600 shrink-0 mt-0.5" size={20} />
                                            <span className="font-medium text-amber-900">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Trophy Narrative */}
                            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                                        <Trophy size={40} className="text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-amber-400 mb-2">Award Recognition</h4>
                                        <p className="text-slate-300 italic leading-relaxed">"{achievement.trophyText}"</p>
                                    </div>
                                </div>
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
                            </div>

                        </div>

                        {/* Right Column: Metadata Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 bg-white sticky top-24">
                                <h4 className="text-xl font-black text-slate-900 tracking-tight mb-6 pb-4 border-b border-slate-100">Award <span className="text-red-600">Details.</span></h4>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                                            <Award size={20} className="text-amber-600" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Category</span>
                                            <span className="block font-semibold text-slate-900">{achievement.category}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                            <MapPin size={20} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Venue</span>
                                            <span className="block font-semibold text-slate-900">{achievement.venue}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                                            <Calendar size={20} className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Date</span>
                                            <span className="block font-semibold text-slate-900">{achievement.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-3">
                                        <Shield size={14} /> Official Recognition
                                    </span>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        This award is officially verified by the awarding body. VelDurSen holds all rights to the associated intellectual property and case study data.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </PageLayout>
    );
};

export default AchievementDetail;
