import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

interface Job {
    role: string;
    department: string;
    location: string;
    type: string;
    description: string;
    applyLink: string;
}

interface Props {
    data: {
        heading?: string;
        jobs?: Job[];
    }
}

export default function CareersList({ data }: Props) {
    const {
        heading = "Open Positions",
        jobs = []
    } = data || {};

    if (!jobs.length) return null;

    return (
        <section className="section-padding bg-slate-50">
            <div className="enterprise-container">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-slate-900">{heading}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                    {job.department}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                            <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{job.description}</p>

                            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-6">
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} /> {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Briefcase size={16} /> {job.type}
                                </div>
                            </div>

                            <Link
                                to={job.applyLink || "#"}
                                className="mt-auto w-full py-4 text-center rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                            >
                                Apply Now <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
