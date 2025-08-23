import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { WorkSection } from "../components/WorkSection";

export const Home = () => {
    return <div className="min-h-screen text-foreground overflow-x-hidden">
    {/* Background */}
    <div class="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    {/* Navbar */}
    <NavBar/>
    {/* Main Body */}
    <main>
        <HeroSection/>
        <ProjectSection/>
        <WorkSection/>
    </main>
 
    {/* Footer */}
    </div>;
};

