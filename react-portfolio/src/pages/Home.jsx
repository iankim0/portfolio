import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle??? */}
    <ThemeToggle />
    {/* Background */}
    
    
    {/* Navbar */}
    <NavBar/>
    {/* Main Body */}
 
    {/* Footer */}
    </div>;
};

