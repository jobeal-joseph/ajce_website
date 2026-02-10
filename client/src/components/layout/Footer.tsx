const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                    AJCE<span className="text-ajce-gold">.</span>
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                    Amal Jyothi College of Engineering <br />
                    Kanjirapally, Kerala
                </p>
                <div className="flex justify-center space-x-6 text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
                <div className="mt-12 text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} AJCE. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
