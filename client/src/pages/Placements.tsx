import RevealText from '../components/layout/RevealText.jsx';

const Placements = () => (
    <section id="placements" className="min-h-screen text-white flex flex-col justify-center p-8 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto">
            <RevealText text="PLACEMENTS" className="text-4xl md:text-6xl font-serif mb-12 text-ajce-gold" />
            <p className="text-xl text-gray-400">
                Top companies hiring our students every year.
            </p>
        </div>
    </section>
);

export default Placements;
