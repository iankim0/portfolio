import { Github, X } from "lucide-react"
import { useState } from "react"

export const WorkSection = () => {
    const [isImageOpen, setIsImageOpen] = useState(false)

    return (
        <section id="work" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-primary text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work Experience
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 items-center">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">Research Assistant</h3>
                        <h4> <span className="italic">Williams College</span> | <span className="italic">June 2025 - August 2025</span></h4>
                        <div className="flex justify-center">
                            <p className="indent-8 text-left text-sm text-muted-foreground max-w-80">
                                Working on a team of four, I assisted in the development of a <strong className="text-primary">real-time interaction system</strong> that combined Unity, a Teensy microcontroller, and an ODrive motor controller to simulate tactile object collisions through robotic haptic feedback. 
                                Using a custom <strong className="text-primary">C-based driver</strong>, we synchronized VR object tracking, collision detection, and motor control in real time. 
                                Multiple experiments were run to measure feedback accuracy and motor latency.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4 justify-center">
                            <a 
                                href="https://github.com/iankim0/wiglet" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <Github size={24}/>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center py-6">
                        <img 
                            src="/work/ssr.png" 
                            alt="Haptic Interface for Mixed Reality" 
                            className="w-1/2 h-auto object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                            onClick={() => setIsImageOpen(true)}
                        />
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {isImageOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={() => setIsImageOpen(false)}
                >
                    <div 
                    className="top-0 left-0 w-full h-1/2 flex items-center justify-center"
                    >
                        <div className="relative w-auto h-auto max-w-[30vw] max-h-[30vh]">
                            <button
                            onClick={() => setIsImageOpen(false)}
                            className="absolute -top-8 -right-8 text-black hover:text-gray-600 transition-colors bg-white rounded-full p-1 shadow-lg"
                            >
                                <X size={20} />
                            </button>
                            
                            <img 
                            src="/work/ssr.png" 
                            alt="Haptic Interface for Mixed Reality" 
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}