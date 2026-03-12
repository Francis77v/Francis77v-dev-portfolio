import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { name: '// HOME', href: '#hero', id: 'hero' },
        { name: '// ABOUT', href: '#about', id: 'about' },
        { name: '// PROJECTS', href: '#projects', id: 'projects' },
        { name: '// EXPERIENCE', href: '#experience', id: 'experience' },
        { name: '// CONTACT', href: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Section highlighting logic
            const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-accent/20 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#hero" className="font-mono text-xl font-bold tracking-tighter text-white group">
                    <span className="text-accent group-hover:text-white transition-colors">DEV</span>_PORTFOLIO
                </a>

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`nav-link ${activeSection === item.id ? 'text-accent' : 'text-gray-400'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button could go here, but focusing on the clean desktop look first as per "minimal-dark" vibes */}
                <div className="md:hidden text-accent font-mono text-xs">
                    [MENU]
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
