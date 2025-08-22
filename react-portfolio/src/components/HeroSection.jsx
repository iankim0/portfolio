import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto z-10">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ian Kim</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Computer Science student at Williams College
                    </p>

                    <div>
                        <a href="#projects" className="py-4 fancy-button opacity-0 animate-fade-in-delay-4">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                {/* <span> Scroll </span> */}
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}