import { cn } from '@/lib/utils.js';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Work Experience", href: "#work" },
    { name: "Projects", href: "#projects" },

]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className='flex justify-center mt-4'>
            <nav className={cn("fixed w-0.4 z-40 transition-all duration-300 items-center",
                "py-3 glass-effect"
            )}>
                <div className='container flex items-center justify-center'>
                    {/* Desktop NavBar */}
                    <div className='flex space-x-8'>
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'> {item.name} </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}

