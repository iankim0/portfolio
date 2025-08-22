import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle??? */}
    {/* <ThemeToggle /> */}
    {/* Background */}
    
    
    {/* Navbar */}
    <NavBar/>
    {/* Main Body */}
    <main>
        <HeroSection/>
        <ProjectSection/>
    </main>
 
    {/* Footer */}
    </div>;
};

