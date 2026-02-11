import RevealText from '../components/layout/RevealText.jsx';

const Contact = () => (
    <section id="contact" className="min-h-screen text-white flex flex-col justify-center p-8 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto text-center">
            <RevealText text="JOIN THE FUTURE" className="text-4xl md:text-8xl font-serif mb-8 text-white justify-center" />
            <p className="text-ajce-gold tracking-widest uppercase mb-12">Admissions Open 2026</p>
            <button className="px-12 py-4 bg-white text-ajce-dark font-serif text-lg hover:bg-ajce-gold transition-colors">
                Apply Now
            </button>
        </div>
    </section>
);

export default Contact;
