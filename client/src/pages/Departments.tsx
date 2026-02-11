import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import RevealText from '../components/layout/RevealText.jsx';

import {
    Monitor,
    Cpu,
    Wifi,
    Zap,
    Settings,
    HardHat,
    FlaskConical,
    Code,
    Database,
    ArrowRight
} from 'lucide-react';

const departments = [
    {
        id: 'CSE',
        name: 'Computer Science',
        icon: Monitor,
        description: 'Pioneering the digital future with cutting-edge software and systems.'
    },
    {
        id: 'ECE',
        name: 'Electronics & Comm.',
        icon: Wifi,
        description: 'Innovating connectivity and hardware for a smarter world.'
    },
    {
        id: 'EEE',
        name: 'Electrical & Electronics',
        icon: Zap,
        description: 'Powering sustainable energy solutions and smart grids.'
    },
    {
        id: 'ME',
        name: 'Mechanical Engineering',
        icon: Settings,
        description: 'Designing and building the machines that move our world.'
    },
    {
        id: 'CE',
        name: 'Civil Engineering',
        icon: HardHat,
        description: 'Constructing robust infrastructure for tomorrow’s cities.'
    },
    {
        id: 'CHE',
        name: 'Chemical Engineering',
        icon: FlaskConical,
        description: 'Transforming raw materials into vital products through innovation.'
    },
    {
        id: 'IT',
        name: 'Information Technology',
        icon: Code,
        description: 'Managing complex information systems and digital networks.'
    },
    {
        id: 'AI',
        name: 'AI & Data Science',
        icon: Database,
        description: 'Unlocking insights and intelligence from data.'
    },
    {
        id: 'MCA',
        name: 'Computer Applications',
        icon: Cpu,
        description: 'Advanced software development and application mastery.'
    },
];

const DepartmentCard = ({ dept, index }: { dept: typeof departments[0], index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const navigate = useNavigate();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => navigate(`/department/${dept.id}`)}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-ajce-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(207,181,59,0.15)] cursor-pointer"
        >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-ajce-gold/0 via-ajce-gold/0 to-ajce-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-white/5 text-ajce-gold group-hover:bg-ajce-gold group-hover:text-black transition-colors duration-300">
                        <dept.icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-ajce-gold transition-colors">0{index + 1}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {dept.name}
                </h3>

                <p className="text-sm text-gray-400 mb-8 line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {dept.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm font-medium text-ajce-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                    <span>Explore Department</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

const Departments = () => {
    return (
        <section id="departments" className="min-h-screen text-white bg-ajce-dark relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-ajce-blue/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-ajce-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <RevealText
                        text="ACADEMIC EXCELLENCE"
                        className="text-sm font-bold text-ajce-gold tracking-[0.2em] uppercase mb-4 justify-center"
                    />
                    <RevealText
                        text="Our Departments"
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 justify-center"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover our 9 world-class engineering departments, each a hub of innovation,
                        research, and hands-on learning designed to shape the future.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {departments.map((dept, index) => (
                        <DepartmentCard key={dept.id} dept={dept} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;
