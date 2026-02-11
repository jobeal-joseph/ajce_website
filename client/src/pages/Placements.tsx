import { useEffect, useState } from 'react';
import RevealText from '../components/layout/RevealText.jsx';
import './Placements.css';

const Placements = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const companies = [
        { name: 'Google', color: '#4285F4', delay: '0s' },
        { name: 'Microsoft', color: '#00A4EF', delay: '0.1s' },
        { name: 'Amazon', color: '#FF9900', delay: '0.2s' },
        { name: 'Apple', color: '#A2AAAD', delay: '0.3s' },
        { name: 'Meta', color: '#0668E1', delay: '0.4s' },
        { name: 'IBM', color: '#0F62FE', delay: '0.5s' },
        { name: 'Intel', color: '#0071C5', delay: '0.6s' },
        { name: 'Oracle', color: '#F80000', delay: '0.7s' },
        { name: 'Infosys', color: '#007CC3', delay: '0.8s' },
        { name: 'TCS', color: '#0F62FE', delay: '0.9s' },
        { name: 'Wipro', color: '#7B3FF2', delay: '1s' },
        { name: 'Accenture', color: '#A100FF', delay: '1.1s' },
    ];

    const stats = [
        { label: 'Placement Rate', value: '95%' },
        { label: 'Average Package', value: '₹8.5 LPA' },
        { label: 'Highest Package', value: '₹45 LPA' },
        { label: 'Companies Visited', value: '150+' },
    ];

    return (
        <section id="placements" className="min-h-screen text-white flex flex-col justify-center p-8 border-t border-white/10 scroll-mt-20">
            <div className="container mx-auto max-w-7xl">
                <RevealText text="PLACEMENTS" className="text-4xl md:text-6xl font-serif mb-6 text-ajce-gold" />
                <p className="text-xl text-gray-400 mb-16 max-w-2xl">
                    Top companies hiring our students every year, building successful careers in technology.
                </p>

                {/* Placement Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-card ${isVisible ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="stat-value text-3xl md:text-4xl font-bold text-ajce-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="stat-label text-sm md:text-base text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Companies Section */}
                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                        Our <span className="text-ajce-gold">Recruiting Partners</span>
                    </h3>
                </div>

                {/* Company Cards Scrolling Animation */}
                <div className="companies-marquee-container">
                    <div className="companies-marquee">
                        {/* First set of companies */}
                        {companies.map((company, index) => (
                            <div
                                key={`first-${index}`}
                                className="company-card-scroll"
                                style={{
                                    '--company-color': company.color,
                                } as React.CSSProperties}
                            >
                                <div className="company-logo-wrapper">
                                    <div className="company-initial" style={{ color: company.color }}>
                                        {company.name.charAt(0)}
                                    </div>
                                </div>
                                <div className="company-name">{company.name}</div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {companies.map((company, index) => (
                            <div
                                key={`second-${index}`}
                                className="company-card-scroll"
                                style={{
                                    '--company-color': company.color,
                                } as React.CSSProperties}
                            >
                                <div className="company-logo-wrapper">
                                    <div className="company-initial" style={{ color: company.color }}>
                                        {company.name.charAt(0)}
                                    </div>
                                </div>
                                <div className="company-name">{company.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-lg">
                        And many more leading companies across various sectors
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Placements;
