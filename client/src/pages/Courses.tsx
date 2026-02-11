import RevealText from '../components/layout/RevealText.jsx';

const Courses = () => (
    <section id="courses" className="min-h-screen text-white flex flex-col justify-center p-8 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto">
            <RevealText text="OUR COURSES" className="text-4xl md:text-6xl font-serif mb-12 text-ajce-gold" />
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-white/10 hover:border-ajce-gold transition-colors duration-300 bg-white/5 backdrop-blur-sm">
                    <h3 className="text-2xl font-serif mb-4">Undergraduate</h3>
                    <p className="text-gray-400">Computer Science, AI & DS, Mechanical, Civil, and more.</p>
                </div>
                <div className="p-6 border border-white/10 hover:border-ajce-gold transition-colors duration-300 bg-white/5 backdrop-blur-sm">
                    <h3 className="text-2xl font-serif mb-4">Postgraduate</h3>
                    <p className="text-gray-400">MCA, M.Tech in various specializations.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Courses;
