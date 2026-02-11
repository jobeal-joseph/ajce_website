import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Mail, Phone, ExternalLink, Award } from 'lucide-react';
import RevealText from '../components/layout/RevealText.jsx';
import Button from '../components/Button';
import { departmentDetails } from '../data/departmentsData';

const DepartmentDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const dept = departmentDetails[id as keyof typeof departmentDetails] || departmentDetails['CSE']; // Fallback to CSE for demo

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-ajce-gold selection:text-black">
            {/* Header Hero */}
            <header className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img
                        src={(dept as any).heroImage || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"}
                        alt={dept.name}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="fixed top-10 left-6 z-50 flex items-center text-gray-400 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <ArrowLeft className="mr-2" size={20} /> Back
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-6">
                            {dept.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-ajce-gold font-light tracking-wide max-w-3xl mx-auto">
                            {dept.tagline}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Content Body */}
            <main className="container mx-auto px-6 py-20 relative z-20 bg-black">

                {/* Introduction & HOD Message */}
                <div className="grid md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <RevealText text="About the Department" className="text-3xl font-serif text-white mb-6" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {dept.description}
                        </p>

                        {(dept as any).history && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-white mb-4">Our History</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {(dept as any).history}
                                </p>
                            </div>
                        )}

                        <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                            <h3 className="text-xl font-serif text-ajce-gold mb-4">Vision</h3>
                            <p className="text-white italic">"{dept.vision}"</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-ajce-gold to-ajce-blue opacity-20 blur-xl rounded-full" />
                        <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <div className="flex items-center mb-6">
                                <img
                                    src={dept.hod.image}
                                    alt={dept.hod.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-ajce-gold"
                                />
                                <div>
                                    <h4 className="text-xl font-bold text-white">{dept.hod.name}</h4>
                                    <p className="text-sm text-ajce-gold uppercase tracking-wider">Head of Department</p>
                                </div>
                            </div>
                            <blockquote className="text-gray-300 italic border-l-4 border-ajce-gold pl-4">
                                "{dept.hod.message}"
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-24">
                    <RevealText text="Why Choose Us?" className="text-3xl font-serif text-white mb-12 text-center justify-center" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {dept.features?.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                                <feature.icon size={40} className="text-ajce-gold mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Facilities Gallery */}
                <div className="mb-24">
                    <div className="flex justify-between items-end mb-12">
                        <RevealText text="World-Class Facilities" className="text-3xl font-serif text-white" />
                        <Button variant="ghost">View All Labs <ArrowRight className="ml-2" size={16} /></Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dept.facilities?.map((facility, idx) => (
                            <div key={idx} className="group relative aspect-video overflow-hidden rounded-xl">
                                <img
                                    src={facility.image}
                                    alt={facility.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                                    <h3 className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{facility.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty Showcase */}
                <div className="mb-24">
                    <RevealText text="Meet Our Faculty" className="text-3xl font-serif text-white mb-12 text-center justify-center" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {dept.faculty?.map((member, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-ajce-gold/50 transition-colors">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <p className="text-ajce-gold text-sm uppercase mb-2">{member.role}</p>
                                <p className="text-gray-400 text-xs">{member.specialization}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Placement Stats */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 rounded-3xl p-12">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-white mb-6">Career Opportunities</h2>
                        <p className="text-gray-400 mb-8">
                            Our graduates are highly sought after by top-tier technology companies worldwide.
                            With a strong emphasis on practical skills, we ensure 100% placement assistance.
                        </p>
                        <ul className="space-y-4 text-gray-300 mb-8">
                            <li className="flex items-center"><Award className="text-ajce-gold mr-3" size={20} /> Highest Package: {dept.placementStats?.highestPackage}</li>
                            <li className="flex items-center"><Award className="text-ajce-gold mr-3" size={20} /> Average Package: {dept.placementStats?.averagePackage}</li>
                        </ul>
                        <Button>Download Placement Report</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-ajce-gold/10 p-6 rounded-xl text-center">
                            <div className="text-4xl font-bold text-ajce-gold mb-1">{dept.placementStats?.placedPercentage}%</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Placement Rate</div>
                        </div>
                        {/* Recruiters Logos Placeholder */}
                        <div className="bg-white/5 p-6 rounded-xl flex items-center justify-center col-span-2">
                            <p className="text-gray-500 text-sm">Trusted by Google, Microsoft, Amazon & 50+ others</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default DepartmentDetails;
