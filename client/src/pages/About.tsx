import RevealText from '../components/layout/RevealText.jsx';

const About = () => (
    <section id="about" className="min-h-screen bg-black text-white flex flex-col justify-center p-8">
        <div className="container mx-auto">
            <RevealText text="OUR LEGACY" className="text-4xl md:text-6xl font-serif mb-12 text-white" />
            <div className="prose prose-invert max-w-2xl">
                <p className="text-2xl font-serif text-gray-300">
                    Since 2001, Amal Jyothi College of Engineering has been a beacon of technical excellence in Kerala.
                </p>
            </div>
        </div>
    </section>
);

export default About;
