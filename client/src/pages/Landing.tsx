import { ReactLenis } from 'lenis/react';
import Navbar from '../components/layout/Navbar';
import Home from './Home';
import Courses from './Courses';
import Departments from './Departments';
import Placements from './Placements';
import About from './About';
import Contact from './Contact';

const Landing = () => {
    return (
        <ReactLenis root>
            <div className="antialiased text-white min-h-screen selection:bg-ajce-gold selection:text-black">
                <Navbar />
                <main>
                    <Home />
                    <Courses />
                    <Departments />
                    <Placements />
                    <About />
                    <Contact />
                </main>
            </div>
        </ReactLenis>
    );
};

export default Landing;
