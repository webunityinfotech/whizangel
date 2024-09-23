"use client"
import { useEffect } from 'react';

const Marquee = () => {
    useEffect(() => {
        const marquee = document.querySelector('.marquee-content');
        let scrollAmount = 0;

        const animateMarquee = () => {
            scrollAmount -= 1; // Speed of the scrolling
            if (Math.abs(scrollAmount) >= marquee.scrollWidth) {
                scrollAmount = 0; // Reset scroll to the beginning
            }
            marquee.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(animateMarquee);
        };

        animateMarquee(); // Start animation
    }, []);

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <span>Welcome to the Scrolling Marquee Section!</span>
                <span>Check out our latest updates!</span>
                <span>New products are available now!</span>
                <span>Welcome to the Scrolling Marquee Section!</span>
                <span>Check out our latest updates!</span>
                <span>New products are available now!</span>
                <span>Welcome to the Scrolling Marquee Section!</span>
                <span>Check out our latest updates!</span>
                <span>New products are available now!</span>
            </div>
        </div>
    );
};

export default Marquee;
