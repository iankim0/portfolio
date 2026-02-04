import { Github } from "lucide-react"

const WORK_EXPERIENCES = [
    {
        id: 1,
        role: "AI Research Intern",
        company: "WorldCare",
        period: "January 2026",
        description: (
            <>
                Working with a team of three, I helped engineer a <strong className="text-primary">clinical de-identification pipeline</strong> using open-source models to remove PHI and PII from clinical documents.
                In addition to creating the pipeline, I conducted research on the security and privacy implications of using large language models for clinical text processing.
            </>
        ),
        githubLink: "https://github.com/luhaza/wc_clinical_deid",
        imageSrc: "/work/worldcare.webp"
    },
    {
        id: 2,
        role: "Teaching Assistant",
        company: "Williams College",
        period: "September 2025 - Present",
        description: (
            <>
                I currently work with the Computer Science Department as a teaching assistant. Through lab and help hours, I help students debug code and reinforce core concepts.
                <div className="indent-0 mt-2">
                    <ul className="space-y-1 text-xs">
                        <li><span className="font-semibold">Fall 2025:</span> Data Structures and Advanced Programming</li>
                        <li><span className="font-semibold">Spring 2026:</span> Computer Organization</li>
                    </ul>
                </div>
            </>
        ),
        imageSrc: "work/williams.svg"
    },
    {
        id: 3,
        role: "Research Assistant",
        company: "Williams College",
        period: "June 2025 - August 2025",
        description: (
            <>
                Working on a team of four, I assisted in the development of a <strong className="text-primary">real-time interaction system</strong> that combined Unity, a Teensy microcontroller, and an ODrive motor controller to simulate tactile object collisions through robotic haptic feedback.
                Using a custom <strong className="text-primary">C-based driver</strong>, we synchronized VR object tracking, collision detection, and motor control in real time.
                Multiple experiments were run to measure feedback accuracy and motor latency.
            </>
        ),
        githubLink: "https://github.com/iankim0/wiglet",
        imageSrc: "/work/ssr.png",
        imageAlt: "Haptic Interface for Mixed Reality"
    },
]

export const WorkSection = () => {
    return (
        <section id="work" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-primary text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work Experience
                </h2>

                <div className="space-y-16">
                    {WORK_EXPERIENCES.map((experience) => (
                        <div key={experience.id} className="grid grid-cols-1 md:grid-cols-2 gap-x-0 items-center">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold">{experience.role}</h3>
                                <h4> <span className="italic">{experience.company}</span> | <span className="italic">{experience.period}</span></h4>
                                <div className="flex justify-center">
                                    <div className="indent-8 text-left text-sm text-muted-foreground max-w-80">
                                        {experience.description}
                                    </div>
                                </div>

                                {experience.githubLink && (
                                    <div className="flex gap-4 pt-4 justify-center">
                                        <a
                                            href={experience.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={24} />
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center py-6">
                                <img
                                    src={experience.imageSrc}
                                    alt={experience.imageAlt}
                                    className="w-1/2 h-auto object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                                    onClick={() => window.open(experience.imageSrc, '_blank')}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}