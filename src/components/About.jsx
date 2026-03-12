import React from 'react';

const About = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "HTML", "CSS", "Tailwind", "JavaScript"]
        },
        {
            title: "Backend",
            skills: ["C#", "ASP.NET Core", "Python", "Django", "PHP"]
        },
        {
            title: "Database",
            skills: ["MySQL", "PostgreSQL"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "Postman", "Docker"]
        }
    ];

    return (
        <section id="about" className="bg-dark/50">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Bio */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold flex items-center gap-4">
                            <span className="text-accent text-sm">01.</span> About Me
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed font-sans text-lg">
                            <p>
                                I am a <span className="text-white">backend-focused developer</span> interested in building reliable and well-structured software systems. I enjoy working on the parts of an application that run behind the scenes, such as designing APIs, organizing backend logic, and structuring applications in a clean and maintainable way.
                            </p>
                            <p>
                                My focus is on writing clear, maintainable code and understanding the engineering principles that support long-term software quality. This includes thinking about <span className="text-white">application architecture</span>, proper layering, and designing systems that are easier to maintain and extend as they grow.
                            </p>
                            <p>
                                I’m continuously improving my skills by learning new concepts, building projects, and deepening my understanding of backend development and software design. My goal is to grow as a developer while building software that is practical, reliable, and thoughtfully structured.
                            </p>
                        </div>

                        <div className="inline-block p-4 border-l-2 border-accent bg-accent/5 font-mono text-sm text-accent">
                            &quot;Commit to the process, and the results will follow.&quot;
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold flex items-center gap-4">
                            <span className="text-accent text-sm">02.</span> Tech Stack
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillCategories.map((cat) => (
                                <div key={cat.title} className="space-y-4">
                                    <h3 className="text-xs text-accent tracking-[0.2em]">{cat.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-dark-card border border-dark-border text-xs font-mono text-gray-400 hover:border-accent/50 hover:text-accent transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
