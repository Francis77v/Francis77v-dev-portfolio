import React from 'react';

const ExperienceEntry = ({ role, company, date, location, bullets }) => (
    <div className="relative pl-8 md:pl-0">
        {/* Desktop Timeline Dot */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-dark border-2 border-accent rounded-full z-10 transition-shadow duration-300 group-hover:shadow-[0_0_10px_#00f5ff]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="md:text-right">
                <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
                <p className="text-accent font-mono text-sm mb-1">{company}</p>
                <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider mb-2">{location}</p>
                <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">{date}</p>
            </div>

            <div className="relative">
                {/* Mobile Timeline Line & Dot */}
                <div className="md:hidden absolute -left-8 top-1 bottom-0 w-[1px] bg-accent/20"></div>
                <div className="md:hidden absolute -left-10 top-1 w-4 h-4 bg-dark border-2 border-accent rounded-full z-10"></div>

                <ul className="space-y-4 text-gray-400 font-sans text-sm leading-relaxed">
                    {bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3">
                            <span className="text-accent mt-1.5 shrink-0">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                            </span>
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Backend Developer Intern",
            company: "Valens Research Asia, Inc.",
            location: "Pasig, Metro Manila, Philippines",
            date: "Jul 2025 — Jan 2026",
            bullets: [
                "Developed an automated Python script to optimize data retrieval for 25,000 company records, reducing manual processing time (from 2 weeks to 1 day).",
                "Contributed to the architectural redesign and revitalization of a large-scale legacy project, revamping core backend services within a team environment.",
                "Designed and implemented normalized database models to replace outdated schemas, improving data integrity and query performance for financial datasets.",
                "Collaborated with senior engineers in an Agile workflow using Jira and Bitbucket to maintain code quality through peer reviews."
            ]
        },
        {
            role: "Full Stack Developer",
            company: "DOH - Treatment and Rehabilitation Center",
            location: "City of San Fernando, La Union, PH",
            date: "Feb 2025 — May 2025",
            bullets: [
                "Led a development team in the creation and launch of a web-based patient information system, successfully digitizing a manual, paper-based data entry process.",
                "Designed and managed a relational database using MySQL, ensuring structured data storage and high-speed retrieval for healthcare records.",
                "Developed custom reporting modules to automate patient documentation, significantly reducing the time spent by administrative staff on monthly statistics.",
                "Collaborated with department heads to translate complex healthcare workflows into functional technical requirements, improving overall operational efficiency."
            ]
        }
    ];

    return (
        <section id="experience" className="bg-dark/50 overflow-hidden">
            <div className="section-container">
                <h2 className="text-3xl font-bold flex items-center gap-4 mb-20">
                    <span className="text-accent text-sm">04.</span> Experience
                </h2>

                <div className="relative">
                    {/* Vertical Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>

                    <div className="space-y-4">
                        {experiences.map((exp, index) => (
                            <ExperienceEntry key={index} {...exp} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="font-mono text-xs text-gray-500 hover:text-accent transition-colors tracking-widest uppercase">
                        &gt; View Detailed Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
