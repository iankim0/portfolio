import { ArrowDown, File, Github, Linkedin, Mail } from "lucide-react"
import { cn } from '@/lib/utils.js';

export const HeroSection = () => {



    const handleEmailClick = async () => {
        const email = "iank0426@gmail.com"
        try {
            await navigator.clipboard.writeText(email)
            alert("Email copied to clipboard")
        } catch (err) {
            const textArea = document.createElement("textarea")
            textArea.value = email
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)
            alert("Email copied to clipboard")
        }
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto z-10">
                <div className={cn("space-y-6 border border-blue-500/20 rounded-lg p-6 bg-blue-500/5 backdrop-blur-xs",
                    "shadow-lg shadow-black/10"
                )}>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight drop-shadow-lg">
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Ian Kim</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Computer Science | Williams College
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                        <a href="https://github.com/iankim0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300"> <Github size={40} /> </a>
                        <a href="https://www.linkedin.com/in/ian-kim9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300"> <Linkedin size={40} /> </a>
                        <button onClick={handleEmailClick} title="Copy Email" className="hover:text-primary transition-colors duration-300"> <Mail size={40} /> </button>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="View Resume" className="hover:text-primary transition-colors duration-300"> <File size={40} /> </a>
                    </div>


                    <div className="py-4">
                        <a href="#projects" className="py-4 blue-glass opacity-0 animate-fade-in-delay-4">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                {/* <span> Scroll </span> */}
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}