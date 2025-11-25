import React, { useState, useRef, useEffect } from 'react';
import ReelItem from './ReelItem';
import { mockReels, Reel } from '../../data/mockReels';

const Reels: React.FC = () => {
    const [reels, setReels] = useState<Reel[]>(mockReels);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<number | null>(null);

    // Handle scroll to detect which reel is active
    const handleScroll = () => {
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = window.setTimeout(() => {
            if (containerRef.current) {
                const scrollTop = containerRef.current.scrollTop;
                const windowHeight = window.innerHeight;
                const newIndex = Math.round(scrollTop / windowHeight);
                setCurrentIndex(newIndex);
            }
        }, 100);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }
            };
        }
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' && currentIndex < reels.length - 1) {
                scrollToReel(currentIndex + 1);
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                scrollToReel(currentIndex - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, reels.length]);

    const scrollToReel = (index: number) => {
        if (containerRef.current) {
            const windowHeight = window.innerHeight;
            containerRef.current.scrollTo({
                top: index * windowHeight,
                behavior: 'smooth',
            });
        }
    };

    const handleLike = (id: string) => {
        setReels((prevReels) =>
            prevReels.map((reel) =>
                reel.id === id
                    ? {
                        ...reel,
                        isLiked: !reel.isLiked,
                        likes: reel.isLiked ? reel.likes - 1 : reel.likes + 1,
                    }
                    : reel
            )
        );
    };

    const handleSave = (id: string) => {
        setReels((prevReels) =>
            prevReels.map((reel) =>
                reel.id === id ? { ...reel, isSaved: !reel.isSaved } : reel
            )
        );
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-black scrollbar-hide"
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}
        >
            {reels.map((reel, index) => (
                <ReelItem
                    key={reel.id}
                    reel={reel}
                    isActive={index === currentIndex}
                    onLike={handleLike}
                    onSave={handleSave}
                />
            ))}
        </div>
    );
};

export default Reels;
