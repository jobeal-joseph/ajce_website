import RevealText from '../components/layout/RevealText.jsx';

const Faculty = () => (
    <section id="faculty" className="min-h-screen text-white flex flex-col justify-center p-8 border-t border-white/10">
        <div className="container mx-auto">
            <RevealText text="EXPERT FACULTY" className="text-4xl md:text-6xl font-serif mb-12 text-ajce-gold" />
            <p className="text-xl text-gray-400">
                Learn from the best minds in the industry and academia.
            </p>
        </div>
    </section>
);

export default Faculty;
