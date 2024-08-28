import { useEffect } from 'react';

export default function ArrowNavigation() {
    const sections = ["desc", "about"]; // List of section IDs

    const handleKeyDown = (event) => {
        // Get the position of each section relative to the viewport
        const sectionPositions = sections.map(id => {
            const element = document.getElementById(id);
            return element.getBoundingClientRect().top;
        });

        // Find the index of the first section that's currently in view
        let currentSectionIndex = sectionPositions.findIndex(pos => pos >= 0 && pos <= window.innerHeight / 2);

        if (event.key === 'ArrowDown') {
            if (currentSectionIndex < sections.length - 1) {
                const nextSection = document.getElementById(sections[currentSectionIndex + 1]);
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (event.key === 'ArrowUp') {
            if (currentSectionIndex > 0) {
                const previousSection = document.getElementById(sections[currentSectionIndex - 1]);
                previousSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null; // This component doesn't render anything
}