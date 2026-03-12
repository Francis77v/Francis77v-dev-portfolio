import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[120px]"></div>

            <div className="section-container relative z-10 pt-20">
                <div className="font-mono text-accent mb-4 tracking-widest text-sm lg:text-base animate-pulse">
                    &gt; INITIALIZING SYSTEM...
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    FRANCIS <span className="text-accent">J.</span><br />
                    <span className="text-4xl md:text-6xl lg:text-7xl opacity-90">BACKEND ENGINEER</span>
                    <span className="text-accent cursor-blink">_</span>
                </h1>

                <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-sans">
                    Building robust backend systems with
                    <span className="text-white"> clean, maintainable code</span>,
                    <span className="text-white"> scalable architecture</span>, and
                    <span className="text-white"> reliable, high-performance APIs</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#projects" className="btn-primary flex items-center justify-center">
                        View Projects
                    </a>
                    <a
                        href="/Flores_Francis Joseph_ P - CV.pdf"
                        download="Flores_Francis Joseph_ P - CV.pdf"
                        className="btn-secondary flex items-center justify-center"
                    >
                        Download CV
                    </a>
                </div>

                <div className="mt-20 flex gap-12 font-mono text-xs text-gray-500 uppercase tracking-widest">
                    <div>
                        <span className="block text-accent mb-2">Location</span>
                        La Union, PH
                    </div>
                    <div>
                        <span className="block text-accent mb-2">Experience</span>
                        &lt; 1 Year
                    </div>
                    <div>
                        <span className="block text-accent mb-2">Availability</span>
                        Open to work
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] rotate-90 mb-8 text-accent">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
