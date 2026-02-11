import RevealText from '../components/layout/RevealText.jsx';
import Ballpit from '../components/Ballpit';

const Contact = () => {
    const contactSections = [
        {
            title: "B Tech & M Tech Admissions",
            email: "admissions@amaljyothi.ac.in",
            icon: "🎓"
        },
        {
            title: "B Tech NRI Admissions",
            email: "admissions@amaljyothi.ac.in",
            icon: "🌍"
        },
        {
            title: "MCA Admissions",
            email: "mcaadmissions@ajce.in",
            icon: "💻"
        }
    ];

    const officialEmails = [
        { label: "General Inquiries", email: "info@amaljyothi.ac.in", icon: "📧" },
        { label: "Admissions", email: "admissions@amaljyothi.ac.in", icon: "📝" },
        { label: "Manager", email: "manager@amaljyothi.ac.in", icon: "👔" },
        { label: "Principal", email: "principal@amaljyothi.ac.in", icon: "🏛️" }
    ];

    return (
        <section id="contact" className="relative min-h-screen flex flex-col justify-center p-8 border-t border-white/10 scroll-mt-20 overflow-hidden">
            {/* 3D Ballpit Background */}
            <div className="absolute inset-0 -z-10 opacity-60">
                <Ballpit
                    className="w-full h-full"
                    count={80}
                    colors={[
                        0xD4AF37,  // Gold
                        0xF4C430,  // Bright gold
                        0xFFD700,  // Rich gold
                        0xFFA500,  // Orange
                        0xFF8C00,  // Dark orange
                        0xFFFFFF   // White
                    ]}
                    ambientColor={0x1d1d1f}
                    ambientIntensity={0.3}
                    lightIntensity={150}
                    minSize={0.3}
                    maxSize={0.8}
                    gravity={0.3}
                    friction={0.998}
                    wallBounce={0.9}
                    maxVelocity={0.1}
                    followCursor={true}
                    materialParams={{
                        metalness: 0.7,
                        roughness: 0.3,
                        clearcoat: 1,
                        clearcoatRoughness: 0.1
                    }}
                />
            </div>

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ajce-dark/60 via-transparent to-ajce-dark/60"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <RevealText
                        text="GET IN TOUCH"
                        className="text-4xl md:text-8xl font-serif mb-6 text-white justify-center"
                    />
                    <p className="text-ajce-gold tracking-widest uppercase text-lg mb-4">Amal Jyothi College of Engineering</p>
                    <p className="text-white/70 text-sm max-w-2xl mx-auto">
                        A Christian Minority Institution Managed by the Catholic Diocese of Kanjirappally
                    </p>
                </div>

                {/* Admissions Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactSections.map((section, index) => (
                        <div
                            key={index}
                            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-ajce-gold/50"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-5xl mb-4">{section.icon}</div>
                            <h3 className="text-white font-serif text-xl mb-3">{section.title}</h3>
                            <a
                                href={`mailto:${section.email}`}
                                className="text-ajce-gold hover:text-white transition-colors text-sm break-all"
                            >
                                {section.email}
                            </a>
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ajce-gold/0 to-ajce-gold/0 group-hover:from-ajce-gold/5 group-hover:to-transparent transition-all duration-300 -z-10"></div>
                        </div>
                    ))}
                </div>

                {/* Official Email IDs */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                    <h3 className="text-white font-serif text-3xl mb-8 text-center">Official Email IDs</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {officialEmails.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="text-3xl">{item.icon}</div>
                                <div className="flex-1">
                                    <p className="text-white/70 text-sm mb-1">{item.label}</p>
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="text-ajce-gold group-hover:text-white transition-colors text-sm break-all"
                                    >
                                        {item.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Link */}
                <div className="text-center">
                    <a
                        href="https://www.ajce.in/home/career@ajce.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-ajce-gold to-amber-500 text-ajce-dark font-serif text-lg rounded-full hover:shadow-2xl hover:shadow-ajce-gold/50 transition-all duration-300 hover:scale-105 group"
                    >
                        <span>Careers @ AJCE</span>
                        <svg
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <p className="text-white/50 text-sm mt-8">© {new Date().getFullYear()} Amal Jyothi College of Engineering</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
