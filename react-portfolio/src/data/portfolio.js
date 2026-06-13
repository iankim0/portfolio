export const WORK = [
    {
        id: 1,
        role: "AI Research Intern",
        company: "WorldCare",
        period: "January 2026",
        description: "Working with a team of three, I helped engineer a clinical de-identification pipeline using open-source models to remove PHI and PII from clinical documents. I also conducted research on the security and privacy implications of using LLMs for clinical text processing.",
        github: "github.com/luhaza/wc_clinical_deid",
        githubUrl: "https://github.com/luhaza/wc_clinical_deid",
    },
    {
        id: 2,
        role: "Teaching Assistant",
        company: "Williams College",
        period: "September 2025 – June 2026",
        description: "I worked with the Williams College Computer Science Department as a teaching assistant. Through lab and help hours, I helped students debug code and reinforce core concepts.",
        courses: [
            { term: "Fall 2025",   name: "Data Structures and Advanced Programming" },
            { term: "Spring 2026", name: "Computer Organization" },
        ],
    },
    {
        id: 3,
        role: "Research Assistant",
        company: "Williams College",
        period: "June 2025 – August 2025",
        description: "Working on a team of four, I assisted in the development of a real-time interaction system combining Unity, a Teensy microcontroller, and an ODrive motor controller to simulate tactile object collisions through robotic haptic feedback. Using a custom C-based driver, we synchronized VR object tracking, collision detection, and motor control in real time.",
        github: "github.com/iankim0/wiglet",
        githubUrl: "https://github.com/iankim0/wiglet",
    },
]

export const PROJECTS = [
    {
        slug: "exercise-dsl",
        title: "LIFT",
        description: "Workout app with custom DSL to streamline input processes",
        tags: ["React", "TypeScript"],
        github: "github.com/iankim0/exercise-dsl",
        githubUrl: "https://github.com/iankim0/exercise-dsl",
        demo: "exercise-dsl.vercel.app",
        demoUrl: "https://exercise-dsl.vercel.app",
    },
    {
        slug: "red-prompt",
        title: "RedPrompt",
        description: "LLM Prompt Injection Testing Framework",
        tags: ["Python", "LLMs"],
        github: "github.com/iankim0/red-prompt",
        githubUrl: "https://github.com/iankim0/red-prompt",
    }
]

export const CONTACT = [
    { label: "github",   url: "https://github.com/iankim0",           display: "github.com/iankim0" },
    { label: "linkedin", url: "https://www.linkedin.com/in/ian-kim9", display: "linkedin.com/in/ian-kim9" },
    { label: "email",    email: "iank0426@gmail.com" },
    { label: "resume",   url: "/resume.pdf",                          display: "/resume.pdf" },
]
