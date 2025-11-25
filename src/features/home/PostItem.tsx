import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';

interface Post {
    id: string;
    user: {
        username: string;
        avatar: string;
        isVerified?: boolean;
    };
    image: string;
    likes: number;
    caption: string;
    comments: Array<{ username: string; text: string }>;
    timestamp: string;
    location?: string;
}

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showFullCaption, setShowFullCaption] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);
    const [comment, setComment] = useState('');
    const [showHeart, setShowHeart] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    const handleDoubleTap = () => {
        if (!isLiked) {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 1000);
        }
    };

    const formatLikes = (count: number): string => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (count >= 1000) {
            return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return count.toLocaleString();
    };

    const truncateCaption = (text: string, maxLength: number = 100) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength);
    };

    return (
        <div className="bg-black border-b border-gray-800 w-full mb-5">
            {/* Post Header */}
            <div className="flex items-center justify-between px-3 py-3">
                <div className="flex items-center gap-3">
                    <img
                        src={post.user.avatar}
                        alt={post.user.username}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-800"
                    />
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
                            {post.user.username}
                        </span>
                        {post.user.isVerified && (
                            <MdVerified className="text-blue-500" size={12} />
                        )}
                        {post.location && (
                            <>
                                <span className="text-white">•</span>
                                <span className="text-sm text-white">{post.location}</span>
                            </>
                        )}
                    </div>
                </div>
                <button className="text-white hover:text-gray-400 transition-colors">
                    <FiMoreHorizontal size={20} />
                </button>
            </div>

            {/* Post Image */}
            <div
                className="relative w-full bg-black cursor-pointer select-none"
                onDoubleClick={handleDoubleTap}
            >
                <img
                    src={post.image}
                    alt="post"
                    className="w-full object-contain"
                    style={{ maxHeight: '600px' }}
                    draggable={false}
                />
                {/* Heart Animation */}
                {showHeart && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <FiHeart
                            size={100}
                            className="text-white fill-white animate-ping"
                            style={{ animationDuration: '0.5s', animationIterationCount: '1' }}
                        />
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLike}
                        className="hover:text-gray-400 transition-all transform hover:scale-110"
                        aria-label="Like"
                    >
                        <FiHeart
                            size={24}
                            className={`transition-all ${isLiked ? 'fill-red-500 stroke-red-500' : 'stroke-white'
                                }`}
                        />
                    </button>
                    <button
                        className="text-white hover:text-gray-400 transition-all transform hover:scale-110"
                        aria-label="Comment"
                    >
                        <FiMessageCircle size={24} />
                    </button>
                    <button
                        className="text-white hover:text-gray-400 transition-all transform hover:scale-110"
                        aria-label="Share"
                    >
                        <FiSend size={24} />
                    </button>
                </div>
                <button
                    onClick={() => setIsSaved(!isSaved)}
                    className="hover:text-gray-400 transition-all transform hover:scale-110"
                    aria-label="Save"
                >
                    <FiBookmark
                        size={24}
                        className={`transition-all ${isSaved ? 'fill-white stroke-white' : 'stroke-white'
                            }`}
                    />
                </button>
            </div>

            {/* Likes */}
            <div className="px-3 pb-1">
                <span className="text-sm font-semibold text-white">
                    {formatLikes(likeCount)} likes
                </span>
            </div>

            {/* Caption */}
            <div className="px-3 pb-1">
                <span className="text-sm">
                    <span className="font-semibold text-white mr-2">
                        {post.user.username}
                    </span>
                    <span className="text-white">
                        {showFullCaption ? post.caption : truncateCaption(post.caption)}
                        {post.caption.length > 100 && (
                            <button
                                onClick={() => setShowFullCaption(!showFullCaption)}
                                className="text-gray-400 ml-1 hover:text-gray-300"
                            >
                                {showFullCaption ? 'less' : 'more'}
                            </button>
                        )}
                    </span>
                </span>
            </div>

            {/* Comments Preview */}
            {post.comments.length > 0 && (
                <div className="px-3 pb-1">
                    <button className="text-sm text-gray-400 hover:text-gray-300">
                        View all {post.comments.length} comments
                    </button>
                    {post.comments.slice(0, 2).map((comment, idx) => (
                        <div key={idx} className="text-sm mt-1">
                            <span className="font-semibold text-white mr-2">
                                {comment.username}
                            </span>
                            <span className="text-white">{comment.text}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Timestamp */}
            <div className="px-3 pb-2">
                <span className="text-xs text-gray-400 uppercase">
                    {post.timestamp}
                </span>
            </div>

            {/* Add Comment */}
            <div className="border-t border-gray-800 px-3 py-2 flex items-center gap-3">
                <button className="text-2xl hover:opacity-70 transition-opacity">
                    😊
                </button>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                />
                {comment && (
                    <button
                        onClick={() => setComment('')}
                        className="text-sm font-semibold text-blue-500 hover:text-blue-400"
                    >
                        Post
                    </button>
                )}
            </div>
        </div>
    );
};

export default PostItem;
