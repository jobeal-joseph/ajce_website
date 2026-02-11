
import RevealText from '../components/layout/RevealText.jsx';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <section id="home" className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/ajce_campus.jpg"
                    alt="Amal Jyothi College Campus"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ajce-dark via-ajce-dark/50 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center pointer-events-none">

                <RevealText
                    text="AMAL JYOTHI"
                    className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 justify-center"
                />

                <RevealText
                    text="COLLEGE OF ENGINEERING"
                    className="text-xl md:text-2xl text-ajce-gold uppercase tracking-[0.5em] mb-12 font-light justify-center"
                    delay={0.5}
                />

                <div className="pointer-events-auto mt-8">
                    <button className="group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden rounded-full hover:border-ajce-gold transition-colors duration-300">
                        <div className="absolute inset-0 w-full h-full bg-ajce-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                        <span className="relative flex items-center space-x-2 text-white font-sans uppercase tracking-widest text-sm">
                            <span>Explore Campus</span>
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center z-10 opacity-50 text-xs uppercase tracking-widest text-gray-500">
                Scroll to Discover
            </div>
        </section>
    );
};

export default Home;
