import { Link } from 'react-router-dom';
import RevealText from '../components/layout/RevealText.jsx';

const About = () => (
    <section id="about" className="min-h-screen text-white flex flex-col justify-center p-8">
        <div className="container mx-auto">
            <RevealText text="ABOUT AJCE" className="text-4xl md:text-6xl font-serif mb-8 text-white" />

            {/* Learn More Button */}
            <div className="mt-6">
                <Link
                    to="/about-detailed"
                    className="inline-flex items-center gap-3 bg-ajce-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ajce-gold/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ajce-gold/20 group"
                >
                    <span>Learn More About AJCE</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>
        </div>
    </section>
);

export default About;
