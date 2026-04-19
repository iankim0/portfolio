import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { WorkSection } from "../components/WorkSection";

export const Home = () => {
    return <div className="min-h-screen text-foreground overflow-x-hidden">
        {/* Background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-background"></div>
        {/* Navbar */}
        <NavBar />
        {/* Main Body */}
        <main>
            <HeroSection />
            <WorkSection />
            <ProjectSection />
        </main>

        {/* Footer */}
    </div>;
};

