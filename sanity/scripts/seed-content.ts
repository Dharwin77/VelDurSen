
console.log('Script started...')
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const homePage = {
    _id: 'home',
    _type: 'page',
    title: 'Home',
    slug: { _type: 'slug', current: 'home' },
    sections: [
        {
            _type: 'hero',
            _key: 'hero_section',
            heading: 'VelDurSen Digital Transformation.',
            subheading: 'Global Enterprise Technology Partner',
            description: 'We architect intelligent, secure, and sustainable enterprise ecosystems that power mission-critical operations across industries worldwide.',
            ctaButtons: [
                { _key: 'btn1', label: 'Talk to Experts', link: '/contact', variant: 'primary' }
            ]
        },
        {
            _type: 'globalOperations',
            _key: 'global_ops',
            heading: 'Global Delivery Network',
            description: 'Operating across multiple continents with a follow-the-sun delivery model, serving global enterprises around the clock.',
            stats: [
                { _key: 's1', label: 'Countries Served', value: '50+' },
                { _key: 's2', label: 'Enterprise Clients', value: '500+' },
                { _key: 's3', label: 'System Uptime', value: '99.9%' },
                { _key: 's4', label: 'Global Support', value: '24/7' }
            ]
        },
        {
            _type: 'professionalAssistance',
            _key: 'prof_assist',
            heading: 'Your Trusted Partner in Enterprise Transformation',
            description: "VelDurSen is a global Enterprise Technology & Digital Transformation company specializing in AI-first, security-first, and sustainability-driven solutions for the world's most demanding enterprises."
        },
        {
            _type: 'whatWeAreUpto',
            _key: 'what_upto',
            heading: 'What we are upto',
            highlights: [
                { _key: 'h1', label: 'GLOBAL ENTERPRISE CLIENTS', value: '500+', percentage: 85 },
                { _key: 'h2', label: 'YEARS OF TECHNOLOGY EXCELLENCE', value: '10+', percentage: 90 },
                { _key: 'h3', label: 'DIGITAL TRANSFORMATIONS DELIVERED', value: '1000+', percentage: 95 },
                { _key: 'h4', label: 'CLOUD-NATIVE ARCHITECTURES', value: '1000+', percentage: 80 },
                { _key: 'h5', label: 'AI & INTELLIGENT SYSTEMS', value: '500+', percentage: 75 }
            ]
        },
        {
            _type: 'founders',
            _key: 'founders_section',
            heading: 'Meet the Minds Behind VelDurSen',
            founders: [
                { _key: 'f1', name: 'Veldurthi Senthil', role: 'Founder & CEO', bio: 'Visionary leader with 20+ years of experience in global enterprise technology.' },
                { _key: 'f2', name: 'Dr. Elena Volkov', role: 'Co-Founder & CTO', bio: 'Expert in AI-driven architectures and scalable cloud solutions.' },
                { _key: 'f3', name: 'Marcus Dupont', role: 'Co-Founder & COO', bio: 'Operational strategist specializing in global talent acquisition.' }
            ]
        },
        {
            _type: 'timeline',
            _key: 'timeline_section',
            heading: 'Our Journey',
            description: 'A decade of relentless engineering innovation.',
            milestones: [
                { _key: 'm1', year: '2018', title: 'Foundation of VelDurSen', description: 'Established with a vision to build secure, scalable, and AI-driven enterprise technology.' },
                { _key: 'm2', year: '2020', title: 'Cloud & DevOps Integration', description: 'Introduced cloud-native engineering: Multi-cloud architecture and CI/CD pipelines.' },
                { _key: 'm3', year: '2022', title: 'AI & Data Engineering Adoption', description: 'Transitioned into an AI-first company. Introduced Generative AI solutions.' },
                { _key: 'm4', year: '2024', title: 'Global Delivery & Workforce Growth', description: 'Expanded operations internationally with multi-region project execution.' },
                { _key: 'm5', year: '2025', title: 'Sustainable & Future-Ready Innovation', description: 'Integrated sustainability into transformation. Focused on carbon-aware cloud systems.' }
            ]
        }
    ]
}

const careersPage = {
    _id: 'careers',
    _type: 'page',
    title: 'Careers',
    slug: { _type: 'slug', current: 'careers' },
    sections: [
        {
            _type: 'hero',
            _key: 'hero_car',
            heading: 'Build the Future.',
            subheading: 'Careers',
            description: 'Join a global team of engineers, architects, and innovators who are transforming how enterprises leverage technology.',
            ctaButtons: [
                { _key: 'btn_join', label: 'Join the Team', link: '/contact', variant: 'primary' }
            ]
        },
        {
            _type: 'culture',
            _key: 'culture_sec',
            heading: 'Life at Veldursen.',
            description: "We're built on trust, creativity, and a passion for solving complex problems.",
            values: [
                { _key: 'v1', title: 'Collaboration', description: 'We believe great things happen when diverse minds work together.' },
                { _key: 'v2', title: 'Learning', description: 'Continuous growth is part of our DNA.' },
                { _key: 'v3', title: 'Flexibility', description: 'Work when, where, and how you are most productive.' },
                { _key: 'v4', title: 'Ownership', description: 'You are not just an employee—you are a stakeholder.' }
            ]
        },
        {
            _type: 'careersList',
            _key: 'jobs_list',
            heading: 'Find Your Perfect Role.'
        },
        {
            _type: 'faq',
            _key: 'faq_sec',
            heading: 'Frequently Asked Questions.',
            faqs: [
                { _key: 'q1', question: 'Do you offer remote work opportunities?', answer: "Yes! We're a remote-first company." },
                { _key: 'q2', question: 'What is your interview process like?', answer: 'Application Review → HR Screening → Technical Interview → Final Round → Offer.' },
                { _key: 'q3', question: 'Do you offer internships?', answer: 'Absolutely! We offer internships across various departments.' },
                { _key: 'q4', question: 'What benefits do you provide?', answer: 'Comprehensive health insurance, mental health support, fitness stipend, and more.' }
            ]
        },
        {
            _type: 'testimonials',
            _key: 'team_testi',
            heading: 'Hear From Our Team.',
            testimonials: [
                { _key: 't1', name: 'Sarah Chen', role: 'Senior Frontend Developer', quote: 'I joined Veldursen three years ago and the growth has been incredible.' },
                { _key: 't2', name: 'Marcus Johnson', role: 'Product Designer', quote: 'What impressed me most was the autonomy. I am shaping product direction.' }
            ]
        }
    ]
}

async function seed() {
    console.log('Seeding content...')

    try {
        const tx = client.transaction()
        tx.createOrReplace(homePage)
        tx.createOrReplace(careersPage)

        await tx.commit()
        console.log('Seeding successful!')
    } catch (err) {
        console.error('Seeding failed:', err)
        process.exit(1)
    }
}

seed()
