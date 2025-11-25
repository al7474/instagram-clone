import React, { useRef, useEffect, useState } from 'react';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { MdVerified, MdMusicNote } from 'react-icons/md';
import { Reel } from '../../data/mockReels';

interface ReelItemProps {
    reel: Reel;
    isActive: boolean;
    onLike: (id: string) => void;
    onSave: (id: string) => void;
}

const ReelItem: React.FC<ReelItemProps> = ({ reel, isActive, onLike, onSave }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showCaption, setShowCaption] = useState(false);

    // Auto-play/pause based on isActive
    useEffect(() => {
        if (videoRef.current) {
            if (isActive) {
                videoRef.current.play().catch(() => {
                    // Auto-play might be blocked, that's okay
                });
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isActive]);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const formatNumber = (num: number): string => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    const truncateCaption = (text: string, maxLength: number = 80) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="relative w-full h-screen snap-start snap-always flex items-center justify-center bg-black">
            {/* Video */}
            <video
                ref={videoRef}
                src={reel.videoUrl}
                className="w-full h-full object-contain cursor-pointer"
                loop
                muted={isMuted}
                playsInline
                onClick={handleVideoClick}
            />

            {/* Mute/Unmute Button - Top Right */}
            <button
                onClick={toggleMute}
                className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-all"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
                {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
            </button>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 pb-20 md:pb-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="flex items-end justify-between gap-4">
                    {/* Left side - User info and caption */}
                    <div className="flex-1 min-w-0">
                        {/* User info */}
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src={reel.user.avatar}
                                alt={reel.user.username}
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-white font-semibold text-sm">
                                    {reel.user.username}
                                </span>
                                {reel.user.isVerified && (
                                    <MdVerified className="text-blue-500" size={14} />
                                )}
                            </div>
                            <button className="px-4 py-1 bg-transparent border border-white text-white text-xs font-semibold rounded-lg hover:bg-white/10 transition-all">
                                Follow
                            </button>
                        </div>

                        {/* Caption */}
                        <div className="text-white text-sm mb-3">
                            <p className="break-words">
                                {showCaption ? reel.caption : truncateCaption(reel.caption)}
                                {reel.caption.length > 80 && (
                                    <button
                                        onClick={() => setShowCaption(!showCaption)}
                                        className="ml-2 text-gray-300 font-medium"
                                    >
                                        {showCaption ? 'less' : 'more'}
                                    </button>
                                )}
                            </p>
                        </div>

                        {/* Audio info */}
                        <div className="flex items-center gap-2 text-white text-xs">
                            <MdMusicNote size={14} />
                            <span className="truncate">
                                {reel.audio.name} · {reel.audio.author}
                            </span>
                        </div>
                    </div>

                    {/* Right side - Action buttons */}
                    <div className="flex flex-col items-center gap-6 pb-2">
                        {/* Like */}
                        <button
                            onClick={() => onLike(reel.id)}
                            className="flex flex-col items-center gap-1 group"
                            aria-label="Like"
                        >
                            <div className="transition-transform group-hover:scale-110">
                                <FiHeart
                                    size={28}
                                    className={`transition-colors ${reel.isLiked
                                            ? 'fill-red-500 stroke-red-500'
                                            : 'stroke-white'
                                        }`}
                                />
                            </div>
                            <span className="text-white text-xs font-medium">
                                {formatNumber(reel.likes)}
                            </span>
                        </button>

                        {/* Comment */}
                        <button
                            className="flex flex-col items-center gap-1 group"
                            aria-label="Comment"
                        >
                            <div className="transition-transform group-hover:scale-110">
                                <FiMessageCircle size={28} className="stroke-white" />
                            </div>
                            <span className="text-white text-xs font-medium">
                                {formatNumber(reel.comments)}
                            </span>
                        </button>

                        {/* Share */}
                        <button
                            className="flex flex-col items-center gap-1 group"
                            aria-label="Share"
                        >
                            <div className="transition-transform group-hover:scale-110">
                                <FiSend size={28} className="stroke-white" />
                            </div>
                        </button>

                        {/* Save */}
                        <button
                            onClick={() => onSave(reel.id)}
                            className="flex flex-col items-center gap-1 group"
                            aria-label="Save"
                        >
                            <div className="transition-transform group-hover:scale-110">
                                <FiBookmark
                                    size={28}
                                    className={`transition-colors ${reel.isSaved
                                            ? 'fill-white stroke-white'
                                            : 'stroke-white'
                                        }`}
                                />
                            </div>
                        </button>

                        {/* More */}
                        <button
                            className="flex flex-col items-center gap-1 group"
                            aria-label="More options"
                        >
                            <div className="transition-transform group-hover:scale-110">
                                <FiMoreHorizontal size={28} className="stroke-white" />
                            </div>
                        </button>

                        {/* User avatar (spinning disc effect) */}
                        <div className="mt-2">
                            <div className="relative">
                                <img
                                    src={reel.user.avatar}
                                    alt={reel.user.username}
                                    className="w-8 h-8 rounded-full border-2 border-white animate-spin-slow"
                                    style={{ animationDuration: '3s' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReelItem;
