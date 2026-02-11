import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import RevealText from '../components/layout/RevealText.jsx';

const AboutDetailed = () => {
    const [activeSection, setActiveSection] = useState('overview');

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#001229] text-white">
            {/* Background gradients matching home page */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-ajce-gold/8 via-transparent to-transparent"
                    style={{
                        background: 'radial-gradient(circle at 15% 50%, rgba(207, 181, 59, 0.08), transparent 25%), radial-gradient(circle at 85% 30%, rgba(207, 181, 59, 0.08), transparent 25%)'
                    }}>
                </div>
            </div>

            {/* Back Button - Arrow in Circle */}
            <div className="fixed top-8 left-8 z-50">
                <Link
                    to="/"
                    onClick={() => {
                        setTimeout(() => {
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-transparent hover:border-ajce-gold hover:bg-ajce-gold/10 transition-all duration-300 group"
                >
                    <ArrowLeft className="text-white group-hover:text-ajce-gold transition-colors duration-300" size={20} />
                </Link>
            </div>

            <section className="relative min-h-screen text-white flex flex-col justify-center p-8 py-32">
                <div className="container mx-auto max-w-7xl">
                    <RevealText text="ABOUT AJCE" className="text-5xl md:text-7xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500" />

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-6">
                        <button
                            onClick={() => setActiveSection('overview')}
                            className={`px-6 py-3 rounded-full font-sans uppercase tracking-widest text-sm transition-all duration-300 ${activeSection === 'overview'
                                ? 'bg-ajce-gold text-black'
                                : 'bg-transparent border border-white/20 text-white hover:border-ajce-gold'
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveSection('vision-mission')}
                            className={`px-6 py-3 rounded-full font-sans uppercase tracking-widest text-sm transition-all duration-300 ${activeSection === 'vision-mission'
                                ? 'bg-ajce-gold text-black'
                                : 'bg-transparent border border-white/20 text-white hover:border-ajce-gold'
                                }`}
                        >
                            Vision & Mission
                        </button>
                        <button
                            onClick={() => setActiveSection('features')}
                            className={`px-6 py-3 rounded-full font-sans uppercase tracking-widest text-sm transition-all duration-300 ${activeSection === 'features'
                                ? 'bg-ajce-gold text-black'
                                : 'bg-transparent border border-white/20 text-white hover:border-ajce-gold'
                                }`}
                        >
                            Salient Features
                        </button>
                        <button
                            onClick={() => setActiveSection('management')}
                            className={`px-6 py-3 rounded-full font-sans uppercase tracking-widest text-sm transition-all duration-300 ${activeSection === 'management'
                                ? 'bg-ajce-gold text-black'
                                : 'bg-transparent border border-white/20 text-white hover:border-ajce-gold'
                                }`}
                        >
                            Management
                        </button>
                        <button
                            onClick={() => setActiveSection('accreditations')}
                            className={`px-6 py-3 rounded-full font-sans uppercase tracking-widest text-sm transition-all duration-300 ${activeSection === 'accreditations'
                                ? 'bg-ajce-gold text-black'
                                : 'bg-transparent border border-white/20 text-white hover:border-ajce-gold'
                                }`}
                        >
                            Accreditations
                        </button>
                        <button
                            onClick={() => setActiveSection('programs')}
                            className={`px-6 py-3 rounded-full font-sans uppercase tracking-widest text-sm transition-all duration-300 ${activeSection === 'programs'
                                ? 'bg-ajce-gold text-black'
                                : 'bg-transparent border border-white/20 text-white hover:border-ajce-gold'
                                }`}
                        >
                            Programs
                        </button>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-12">
                        {/* Overview Section */}
                        {activeSection === 'overview' && (
                            <div className="space-y-8 animate-fadeIn">
                                <div className="prose prose-invert max-w-none">
                                    <h2 className="text-3xl md:text-4xl font-serif text-ajce-gold mb-6">Origin</h2>
                                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                                        Amal Jyothi College of Engineering, Kanjirapally, is the first engineering college in Kerala to obtain NAAC accreditation with 'A' grade, and the first new generation engineering college in the State to secure the prestigious NBA accreditation for prime departments.
                                    </p>
                                    <p className="text-lg text-gray-400 leading-relaxed">
                                        The main features of the College comprise world-class infrastructure, top-flight faculty, high pass percentage, excellent placement record, unique student projects and first rate start-ups. Amal Jyothi is a mega complex of 16.5 lakh sq.ft. built-up area overlooking the busy Kanjirapally-Erumeli stretch of the Kottayam-Sabarimala state highway. The two campus hostels, taken care of by dedicated Catholic priests and sisters, have a capacity of 2500. The campus has 2.04 Gbps internet connectivity with WiFi.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-ajce-gold/10 to-white/5 backdrop-blur-sm border border-ajce-gold/30 rounded-lg p-8">
                                    <h3 className="text-2xl font-serif text-ajce-gold mb-4">The Name</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        The word "Amal" means immaculate and inviolate, and "Jyothi" means light. Thus "Amal Jyothi" stands for pure light, a universal symbol signifying the search for unblemished truth. By allusion, it stands for enlightenment through Mary Immaculate to whom the College is dedicated.
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                    <h3 className="text-2xl font-serif text-white mb-6">Campus Highlights</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl">🏛️</span>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg mb-2">16.5 Lakh Sq.Ft Campus</h4>
                                                <p className="text-gray-400">Mega complex on 65-acre campus with world-class infrastructure</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl">🏨</span>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg mb-2">2500 Hostel Capacity</h4>
                                                <p className="text-gray-400">Two campus hostels managed by Catholic priests and sisters</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl">🌐</span>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg mb-2">2.04 Gbps Internet</h4>
                                                <p className="text-gray-400">WiFi campus with high-speed connectivity</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl">🌉</span>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg mb-2">500m Skywalk</h4>
                                                <p className="text-gray-400">World's longest skywalk in any educational institution</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Campus Gallery */}
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                    <h3 className="text-2xl font-serif text-ajce-gold mb-6 text-center">Campus Gallery</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-ajce-gold/50 transition-all duration-300">
                                            <img
                                                src="https://www.ajce.in/home/images/college_small_pic_01.jpg"
                                                alt="AJCE Campus View 1"
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white font-semibold">Campus Infrastructure</p>
                                            </div>
                                        </div>
                                        <div className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-ajce-gold/50 transition-all duration-300">
                                            <img
                                                src="https://www.ajce.in/home/images/college_small_pic_02.jpg"
                                                alt="AJCE Campus View 2"
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white font-semibold">Academic Blocks</p>
                                            </div>
                                        </div>
                                        <div className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-ajce-gold/50 transition-all duration-300">
                                            <img
                                                src="https://www.ajce.in/home/images/college_small_pic_03.jpg"
                                                alt="AJCE Campus View 3"
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white font-semibold">Modern Facilities</p>
                                            </div>
                                        </div>
                                        <div className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-ajce-gold/50 transition-all duration-300">
                                            <img
                                                src="https://www.ajce.in/home/images/college_small_pic_04.jpg"
                                                alt="AJCE Campus View 4"
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white font-semibold">Campus Grounds</p>
                                            </div>
                                        </div>
                                        <div className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-ajce-gold/50 transition-all duration-300">
                                            <img
                                                src="https://www.ajce.in/home/images/college_small_pic_05.jpg"
                                                alt="AJCE Campus View 5"
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white font-semibold">Student Facilities</p>
                                            </div>
                                        </div>
                                        <div className="group relative overflow-hidden rounded-lg border border-white/20 hover:border-ajce-gold/50 transition-all duration-300">
                                            <img
                                                src="https://www.ajce.in/home/images/college_small_pic_06.jpg"
                                                alt="AJCE Campus View 6"
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <p className="text-white font-semibold">Campus Life</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Vision & Mission Section */}
                        {activeSection === 'vision-mission' && (
                            <div className="space-y-8 animate-fadeIn">
                                <div className="bg-gradient-to-br from-ajce-gold/20 to-white/5 backdrop-blur-sm border border-ajce-gold/30 rounded-lg p-10">
                                    <h2 className="text-3xl md:text-4xl font-serif text-ajce-gold mb-6">Vision</h2>
                                    <p className="text-xl text-gray-200 leading-relaxed italic">
                                        "To be a centre of excellence in technical higher education, research and support services, capable of making significant contribution to individual and societal empowerment."
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-10">
                                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Mission</h2>
                                    <p className="text-xl text-gray-200 leading-relaxed italic">
                                        "To create technically qualified world-class professionals with social commitment through career-oriented courses conducted by high profile faculty, complemented with globally interactive learning processes and leading-edge technology."
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Salient Features Section */}
                        {activeSection === 'features' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-3xl md:text-4xl font-serif text-ajce-gold mb-6">Salient Features</h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🏆 NBA Accreditation</h4>
                                        <p className="text-gray-300">Six B.Tech programmes accredited by NBA</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">📚 Wide Choice of Programs</h4>
                                        <p className="text-gray-300">810 B.Tech seats across 10 branches, 297 seats for 11 Master's programmes</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🎓 NEP 2020 Compliance</h4>
                                        <p className="text-gray-300">B.Tech Major and Minor courses in highest combinations</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🚀 Startups Valley TBI</h4>
                                        <p className="text-gray-300">First engineering college in Kerala with Government-funded TBI - 30 startups on campus</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🧬 Bio-TBI</h4>
                                        <p className="text-gray-300">Rs 5-crore Bio-TBI sponsored by BIRAC, Govt. of India</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🏭 Industrial Collaboration</h4>
                                        <p className="text-gray-300">Partnerships with Volvo, NeST, Royal Enfield, BOSCH, Yamaha</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">💡 IEDC</h4>
                                        <p className="text-gray-300">First in Kerala to establish IEDC sponsored by DST, Govt. of India</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">☀️ Green Energy</h4>
                                        <p className="text-gray-300">200 kW Solar Power Plant - Kerala State Akshaya Oorja Award 2017</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🌿 Environment Friendly</h4>
                                        <p className="text-gray-300">Best environment-friendly campus - Kerala State Pollution Control Board 2017</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🔬 Research Labs</h4>
                                        <p className="text-gray-300">AI & VR Lab, Fab Lab, Hardware Lab, SOPC Lab, Optical Fibre Lab, IoT Lab</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🌍 IELTS Center</h4>
                                        <p className="text-gray-300">Test and Training Centre approved by IDP</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-ajce-gold/50 transition-all duration-300">
                                        <h4 className="text-ajce-gold font-semibold text-lg mb-3">🏅 Guinness Record</h4>
                                        <p className="text-gray-300">Physical Education Dept. with Guinness World Record holder as fitness trainer</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Management Section */}
                        {activeSection === 'management' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-3xl md:text-4xl font-serif text-ajce-gold mb-6">Management</h2>

                                <div className="bg-gradient-to-br from-ajce-gold/10 to-white/5 backdrop-blur-sm border border-ajce-gold/30 rounded-lg p-8">
                                    <h3 className="text-2xl font-serif text-ajce-gold mb-4">Catholic Diocese of Kanjirapally</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                        A top-rated centre of technical higher education, Amal Jyothi College of Engineering is owned by the Catholic Diocese of Kanjirapally and is administered by the Diocesan Educational Trust. Helmed by the visionary and youthful Bishop Mar Jose Pulickal, the diocese has a glorious track record across a broad range of educational and social service activities.
                                    </p>
                                    <p className="text-gray-400">
                                        Founded in 2001, AJCE stands today as a beacon of technical education in Kerala, thanks to the foresight of His Excellency Mar Mathew Arackal, the newly appointed bishop of the Catholic Diocese of Kanjirapally at the time.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Patron */}
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                        <div className="flex flex-col items-center mb-6">
                                            <div className="w-48 h-56 mb-4 rounded-lg overflow-hidden border-2 border-ajce-gold/30">
                                                <img
                                                    src="https://www.ajce.in/home/images/JosePulickal-214x300.jpg"
                                                    alt="His Excellency Mar Jose Pulickal"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-serif text-ajce-gold mb-4 text-center">Patron</h3>
                                        <h4 className="text-white font-semibold text-lg mb-2 text-center">His Excellency Mar Jose Pulickal</h4>
                                        <p className="text-gray-400 mb-2 text-center">Bishop of Kanjirapally</p>
                                        <p className="text-gray-300 text-sm leading-relaxed text-center">
                                            Amal Jyothi's commitment to perfection springs from his inspiring leadership, unique world view and his firm refusal to compromise with mediocrity.
                                        </p>
                                    </div>

                                    {/* Chairman */}
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                        <div className="flex flex-col items-center mb-6">
                                            <div className="w-48 h-56 mb-4 rounded-lg overflow-hidden border-2 border-ajce-gold/30">
                                                <img
                                                    src="https://www.ajce.in/home/images/FrBobyAlexMannamplackal.jpg"
                                                    alt="V. Rev. Fr. Boby Alex Mannamplackal"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-serif text-ajce-gold mb-4 text-center">Chairman - Governing Body</h3>
                                        <h4 className="text-white font-semibold text-lg mb-2 text-center">V. Rev. Fr. Boby Alex Mannamplackal</h4>
                                        <p className="text-gray-400 mb-2 text-center">Vicar General, Diocese of Kanjirapally</p>
                                        <p className="text-gray-300 text-sm leading-relaxed text-center">
                                            Distinguished leader with international academic exposure from USA. Fulbright-Hays Scholar, former Editor-in-Chief of Deepika daily.
                                        </p>
                                    </div>

                                    {/* Director */}
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                        <div className="flex flex-col items-center mb-6">
                                            <div className="w-48 h-56 mb-4 rounded-lg overflow-hidden border-2 border-ajce-gold/30">
                                                <img
                                                    src="https://www.ajce.in/home/images/Fr-Roy-Pazhayaparampil.jpg"
                                                    alt="Rev. Fr. Dr. Roy Abraham Pazhayaparampil"
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-serif text-ajce-gold mb-4 text-center">Director (Administration)</h3>
                                        <h4 className="text-white font-semibold text-lg mb-2 text-center">Rev. Fr. Dr. Roy Abraham Pazhayaparampil</h4>
                                        <p className="text-gray-400 mb-2 text-center">MBA, MS, Ph.D. in Business</p>
                                        <p className="text-gray-300 text-sm leading-relaxed text-center">
                                            Brings wealth of experience as educationalist and administrator. Former Principal of Marian College Kuttikkanam for 8 years, former Director of XIME Bangalore.
                                        </p>
                                    </div>
                                </div>

                                {/* Organizational Structure */}
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                    <h3 className="text-2xl font-serif text-ajce-gold mb-6 text-center">Institutional Structure</h3>
                                    <div className="flex justify-center">
                                        <img
                                            src="https://www.ajce.in/home/images/Organogram.png"
                                            alt="AJCE Organizational Structure"
                                            className="max-w-full h-auto rounded-lg border border-white/20"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Accreditations Section */}
                        {activeSection === 'accreditations' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-3xl md:text-4xl font-serif text-ajce-gold mb-6">Accreditations & Rankings</h2>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-ajce-gold/20 to-white/5 backdrop-blur-sm border border-ajce-gold/30 rounded-lg p-8">
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src="https://www.ajce.in/home/images/naac.png"
                                                alt="NAAC Logo"
                                                className="h-24 object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-serif text-ajce-gold mb-4 text-center">NAAC 'A' Grade</h3>
                                        <p className="text-gray-300 mb-4 text-center">
                                            First engineering college in Kerala to secure 'A' Grade in NAAC accreditation.
                                        </p>
                                        <p className="text-gray-400 text-sm text-center">
                                            CGPA: 3.02 on a 4-point scale (25/05/2016)
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src="https://www.ajce.in/home/images/nba.png"
                                                alt="NBA Logo"
                                                className="h-24 object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4 text-center">NBA Accreditation</h3>
                                        <p className="text-gray-300 mb-4 text-center">
                                            First new generation engineering college in self-financing stream in Kerala to secure NBA Accreditation.
                                        </p>
                                        <p className="text-gray-400 text-sm text-center">
                                            B.Tech in CH, CE, CSE, ME, ECE & EEE and PG MCA are NBA accredited
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src="https://www.ajce.in/home/images/nirf.png"
                                                alt="NIRF Logo"
                                                className="h-24 object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4 text-center">NIRF Ranking</h3>
                                        <p className="text-gray-300 text-center">
                                            Recognized in the National Institutional Ranking Framework approved by MHRD.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src="https://www.ajce.in/home/images/ariia.png"
                                                alt="ARIIA Logo"
                                                className="h-24 object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-serif text-white mb-4 text-center">ARIIA 2021</h3>
                                        <p className="text-gray-300 text-center">
                                            Recognised in the band "EXCELLENT" in Atal Ranking of Institutions on Innovation Achievements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Programs Section */}
                        {activeSection === 'programs' && (
                            <div className="space-y-8 animate-fadeIn">
                                <h2 className="text-3xl md:text-4xl font-serif text-ajce-gold mb-6">Academic Programs</h2>

                                {/* B.Tech Programs */}
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                    <h3 className="text-2xl md:text-3xl font-serif text-ajce-gold mb-6">B.Tech Programs</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            'Artificial Intelligence and Data Science (60)',
                                            'Chemical Engineering (60)',
                                            'Civil Engineering (60)',
                                            'Computer Science and Engineering (180)',
                                            'CSE (Artificial Intelligence) (60)',
                                            'CSE (Cyber Security) (60)',
                                            'Electronics and Communication Engineering (120)',
                                            'Electrical and Electronics Engineering (60)',
                                            'Food Technology (60)',
                                            'Mechanical Engineering (60)',
                                            'Mechanical Engineering (Automobile) (30)',
                                            'Metallurgical and Materials Engineering (30)'
                                        ].map((program, index) => (
                                            <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                                                <span className="text-ajce-gold">•</span>
                                                <span className="text-gray-300">{program}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* M.Tech Programs */}
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                                    <h3 className="text-2xl md:text-3xl font-serif text-ajce-gold mb-6">M.Tech Programs</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            'Computer Science and Engineering',
                                            'Energy Systems',
                                            'Structural Engineering and Construction Management',
                                            'Environmental Engineering',
                                            'Electric Vehicle Technology',
                                            'VLSI Design and Embedded Systems'
                                        ].map((program, index) => (
                                            <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                                                <span className="text-ajce-gold">•</span>
                                                <span className="text-gray-300">{program}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Programs */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                        <h3 className="text-xl font-serif text-ajce-gold mb-4">MCA Programs</h3>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <span className="text-ajce-gold">•</span>
                                                <span>MCA (Regular) - 2 Year</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-ajce-gold">•</span>
                                                <span>MCA (Integrated) - 5 Year</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                        <h3 className="text-xl font-serif text-ajce-gold mb-4">BCA & BBA</h3>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <span className="text-ajce-gold">•</span>
                                                <span>BCA - 4 Year</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-ajce-gold">•</span>
                                                <span>BBA Honours - 4 Year</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                        <h3 className="text-xl font-serif text-ajce-gold mb-4">PhD Programs</h3>
                                        <p className="text-gray-300">
                                            Available in: CH, CE, CSE, CA, ECE, EEE, FT, ME, MT, BS, and more
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="bg-gradient-to-r from-ajce-gold/20 to-white/5 backdrop-blur-sm border border-ajce-gold/30 rounded-lg p-10">
                                    <h3 className="text-3xl font-serif text-white mb-8">Admissions Contact</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div>
                                            <h4 className="text-ajce-gold font-semibold text-lg mb-2">B.Tech</h4>
                                            <p className="text-gray-300 text-lg">+91 9072661600</p>
                                        </div>
                                        <div>
                                            <h4 className="text-ajce-gold font-semibold text-lg mb-2">M.Tech</h4>
                                            <p className="text-gray-300 text-lg">+91 9516666000</p>
                                        </div>
                                        <div>
                                            <h4 className="text-ajce-gold font-semibold text-lg mb-2">BBA</h4>
                                            <p className="text-gray-300 text-lg">+91 9074557708</p>
                                        </div>
                                        <div>
                                            <h4 className="text-ajce-gold font-semibold text-lg mb-2">BCA/MCA</h4>
                                            <p className="text-gray-300 text-lg">+91 8606309393</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Legacy Statement */}
                        <div className="text-center mt-16 py-12 border-t border-white/10">
                            <p className="text-2xl md:text-3xl font-serif text-gray-300 italic mb-4">
                                "Since 2001, shaping the future of engineering education in Kerala"
                            </p>
                            <p className="text-lg text-gray-400">
                                Amal Jyothi College of Engineering - Where Excellence Meets Innovation
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutDetailed;
