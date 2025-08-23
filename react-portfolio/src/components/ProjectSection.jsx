import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Stacked Lifts",
        description: "Full-Stack Workout Tracker using React",
        image: "/projects/stacked.png",
        tags: ["React", "Tailwind CSS", "Supabase"],
        githubUrl: "https://github.com/iankim0/stacked",
    },
    {
        id: 2,
        title: "Plaguebound",
        description: "2D Horror Game made in Unity",
        image: "/projects/pB.png",
        tags: ["C#", "Unity", "Photoshop"],
        demoUrl: "https://iankim0.itch.io/plaguebound?secret=vr749DjWo4zMj15FAsd5Rua5gcM",
        githubUrl: "https://github.com/iankim0/Final-Project",
    },
    {
        id: 3,
        title: "Lap Kings",
        description: "2D Arcade Game made in Unity",
        image: "/projects/lapKingsCover.png",
        tags: ["C#", "Unity", "Photoshop"],
        demoUrl: "https://iankim0.itch.io/lap-kings?secret=OzHZU91pS3kdCgQoJVYfsJWNuQ",
        githubUrl: "https://github.com/iankim0/LapKings",
    },
]

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4 text-center"> Featured Projects </h2>

        <p className="text-center text-muted-foregrond mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card glass-effect rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                  ))}
                </div>


                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20}/>
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        > 
                          <Github size={20}/> 
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
