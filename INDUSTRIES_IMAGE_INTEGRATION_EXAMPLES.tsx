// EXAMPLE: How to integrate images into Industries.tsx
// This shows the pattern for each section

import { IndustryImage } from '@/components/industries/IndustryImage';
import { industryImages } from '@/data/industryImages';

// HEALTHCARE OVERVIEW SECTION (Scroll 2)
// Replace the current icon-based illustration with:

{/* Right - Illustration */ }
<motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="relative"
>
    <IndustryImage
        src={industryImages.healthcare.overview.src}
        alt={industryImages.healthcare.overview.alt}
        animationType="zoomIn"
        containerClassName="shadow-2xl"
    />
</motion.div>

// EDUCATION OVERVIEW SECTION (Scroll 4) - LEFT SIDE
// Replace the current illustration:

{/* Left - Illustration (reversed order) */ }
<motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="relative lg:order-1"
>
    <IndustryImage
        src={industryImages.education.overview.src}
        alt={industryImages.education.overview.alt}
        animationType="slideLeft"
        containerClassName="shadow-2xl"
    />
</motion.div>

// MANUFACTURING OVERVIEW SECTION (Scroll 6)
// Replace the Factory icon visualization:

{/* Right - Illustration */ }
<motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="relative"
>
    <IndustryImage
        src={industryImages.manufacturing.overview.src}
        alt={industryImages.manufacturing.overview.alt}
        animationType="slideRight"
        containerClassName="shadow-2xl"
    />
</motion.div>

// FINTECH OVERVIEW SECTION (Scroll 8)
// Replace the Landmark icon with dashboard image:

{/* Left - Illustration */ }
<motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="relative lg:order-1"
>
    <IndustryImage
        src={industryImages.fintech.dashboard.src}
        alt={industryImages.fintech.dashboard.alt}
        animationType="fadeIn"
        containerClassName="shadow-2xl border border-accent/20"
    />
</motion.div>

// RETAIL OVERVIEW SECTION (Scroll 10)
// Add image above or beside the CTA content:

{/* Add before the title */ }
<div className="mb-12">
    <IndustryImage
        src={industryImages.retail.overview.src}
        alt={industryImages.retail.overview.alt}
        animationType="zoomIn"
        containerClassName="max-w-4xl mx-auto shadow-2xl"
    />
</div>

{/* Then your existing title and CTA content */ }

// FOR SOLUTIONS/FEATURES SECTIONS:
// You can add images within the feature grid areas:

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
    {/* Left: Feature List */}
    <div className="space-y-6">
        {features.map((feature) => (
      // ... existing feature cards
    ))}
    </div>

    {/* Right: Dashboard Image */}
    <div className="flex items-center">
        <IndustryImage
            src={industryImages.healthcare.dashboard.src}
            alt={industryImages.healthcare.dashboard.alt}
            animationType="float"
            containerClassName="sticky top-8"
        />
    </div>
</div>

// FULL EXAMPLE FOR ONE SECTION:
// Here's how a complete Healthcare Overview section would look:

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

            {/* Right - Dashboard Image (REPLACES ICON-BASED ILLUSTRATION) */}
            <div className="relative">
                <IndustryImage
                    src={industryImages.healthcare.overview.src}
                    alt={industryImages.healthcare.overview.alt}
                    animationType="zoomIn"
                    containerClassName="shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
            </div>
        </div>
    </div>
</section>

// NOTES:
// 1. The IndustryImage component handles all the motion.div wrappers internally
// 2. You can still add additional motion.div wrappers if needed for layout
// 3. The component automatically handles lazy loading, errors, and animations
// 4. All SEO alt text is already configured in industryImages.ts
// 5. The component is fully responsive and accessible
