import React from 'react';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section id="contact" className="bg-dark relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/5 blur-[120px] rounded-[100%]"></div>

            <div className="section-container relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-accent font-mono text-sm tracking-[0.4em] uppercase opacity-80">What's Next?</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Get In Touch</h2>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-sans">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 pt-6">
                        <a
                            href="mailto:florefrancisjoseph28@gmail.com"
                            className="group flex flex-col items-center gap-3 transition-all hover:translate-y-[-5px]"
                        >
                            <div className="w-14 h-14 rounded-full border border-dark-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-accent transition-colors"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Email</span>
                        </a>

                        <a
                            href="https://github.com/Francis77v"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 transition-all hover:translate-y-[-5px]"
                        >
                            <div className="w-14 h-14 rounded-full border border-dark-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-accent transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/francis-joseph-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 transition-all hover:translate-y-[-5px]"
                        >
                            <div className="w-14 h-14 rounded-full border border-dark-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-accent transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">LinkedIn</span>
                        </a>
                    </div>

                    <div className="pt-20">
                        <a href="mailto:florefrancisjoseph28@gmail.com" className="btn-primary">
                            Say Hello
                        </a>
                    </div>
                </div>

                <footer className="mt-32 pb-8 border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 font-mono text-[10px] tracking-widest uppercase">
                    <div>Built by Francis J. &copy; {currentYear}</div>
                    <div className="flex gap-6">
                        <span>React.js</span>
                        <span>Tailwind CSS</span>
                        <span>Vite</span>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
