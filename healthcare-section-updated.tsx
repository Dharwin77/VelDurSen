// Updated Healthcare Overview Section with Image
// Replace lines ~175-247 in Industries.tsx

{/* SCROLL 2 - HEALTHCARE OVERVIEW */ }
<section className="relative min-h-screen flex items-center bg-gradient-to-br from-muted/30 to-background overflow-hidden">
    <div className="enterprise-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 shadow-lg"
                    >
                        <Heart className="w-8 h-8" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Healthcare CRM Solutions
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Healthcare providers and medical institutions require specialized CRM software to manage patient relationships effectively. Our cloud CRM platform streamlines appointment scheduling, patient communication, and healthcare data management while ensuring HIPAA compliance and data security.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        From small clinics to large hospital networks, our scalable CRM systems integrate with electronic health records (EHR) and enable seamless patient engagement. Our customer relationship management platform helps healthcare organizations improve patient outcomes and operational efficiency.
                    </p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-accent group inline-flex items-center"
                >
                    Explore Healthcare CRM
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
            </motion.div>

            {/* Right - Dashboard Image */}
            <div className="relative">
                <IndustryImage
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop&q=85"
                    alt="Healthcare CRM Software Dashboard - Patient Management System with EHR Integration and Medical Analytics"
                    animationType="zoomIn"
                    containerClassName="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
            </div>
        </div>
    </div>
</section>
