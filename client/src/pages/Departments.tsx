import RevealText from '../components/layout/RevealText.jsx';

const Departments = () => (
    <section id="departments" className="min-h-screen text-white flex flex-col justify-center p-8 scroll-mt-20">
        <div className="container mx-auto">
            <RevealText text="DEPARTMENTS" className="text-4xl md:text-6xl font-serif mb-12 text-white" />
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Home to 9 world-class engineering departments fostering innovation and research.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['CSE', 'ECE', 'EEE', 'ME', 'CE', 'CHE', 'IT', 'AI'].map((dept) => (
                    <div key={dept} className="h-32 flex items-center justify-center border border-white/10 hover:bg-ajce-gold hover:text-ajce-dark transition-all cursor-pointer">
                        <span className="font-serif text-xl">{dept}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Departments;
