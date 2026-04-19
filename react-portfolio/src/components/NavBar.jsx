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
            <nav className={cn(
                "fixed z-40 transition-all duration-300 items-center py-3",
                isScrolled
                    ? "w-0.4 nav-scrolled rounded-full"
                    : "w-auto bg-transparent"
            )}>
                <div className='container flex items-center justify-center'>
                    {/* Desktop NavBar */}
                    <div className='flex space-x-8'>
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className='text-white/90 hover:text-white border-b-2 border-transparent hover:border-white transition-all duration-300 pb-1'
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}

