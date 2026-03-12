import React from 'react';

const ProjectCard = ({ title, description, tags, github, live }) => {
    return (
        <div className="group bg-dark-card border border-dark-border p-6 transition-all duration-500 hover:border-accent/40 hover:translate-y-[-8px] relative overflow-hidden">
            {/* Background glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
                    </div>
                    <div className="flex gap-4 text-gray-400 group-hover:text-accent transition-colors">
                        {github !== "#" && (
                            <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub Source">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                        )}
                        {live !== "#" && (
                            <a href={live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed font-sans min-h-[60px]">
                    {description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                    {tags.map(tag => (
                        <span key={tag} className="font-mono text-[10px] tracking-tight text-gray-500 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Data Ingestion & Reporting Analytics",
            description: "A backend system that collects, processes, and organizes data from multiple sources to generate structured reports and analytics.",
            tags: ["C#", "ASP.NET Core", "PostgreSQL", "Postman", "Docker"],
            github: "https://github.com/Francis77v/DataIngestion-ReportingAnalytics",
            live: "#"
        },
        {
            title: "Civil Service Mock Exam Web API",
            description: "A backend API that manages exam questions, user attempts, scoring, and results for a civil service mock examination platform.",
            tags: ["C#", "ASP.NET Core", "PostgreSQL", "Postman", "Docker"],
            github: "https://github.com/LilArvinxx/CSEMockExam-Backend",
            live: "#"
        },
        {
            title: "HOSPITAL INFORMATION SYSTEM",
            description: "A system designed to manage hospital operations such as patient records, appointments, and medical information through a structured backend.",
            tags: ["PHP", "MySQL", "HTML", "CSS", "JS"],
            github: "https://github.com/Francis77v/his",
            live: "#"
        },
        {
            title: "IDMS",
            description: "A system designed for security agency to store, organize, and manage digital documents efficiently, enabling structured document retrieval and secure access.",
            tags: ["PHP", "MySQL", "HTML", "CSS", "JS"],
            github: "https://github.com/Francis77v/IDMS",
            live: "#"
        },
        {
            title: "VAWC Case Tracker System",
            description: "A full-stack information system for tracking and managing cases related to violence against women and children, enabling organized case handling, reporting, and secure data management.",
            tags: ["PHP", "MySQL", "HTML", "CSS", "JS"],
            github: "#",
            live: "https://vawctracker.com/"
        }
    ];

    return (
        <section id="projects" className="bg-dark">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold flex items-center gap-4">
                            <span className="text-accent text-sm">03.</span> Featured Projects
                        </h2>
                        <div className="h-1 w-20 bg-accent mt-4"></div>
                    </div>
                    <p className="text-gray-500 font-mono text-sm">/ EXPLORE MORE ON GITHUB</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
