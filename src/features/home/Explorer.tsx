import React, { useState } from 'react';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';
import { MdPlayArrow, MdViewCarousel } from 'react-icons/md';
import { mockExplorePosts } from '../../data/mockExplorePosts';

const Explorer: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <div className="w-full max-w-[975px] mx-auto px-0">
      {/* Masonry Grid */}
      <div className="grid grid-cols-3 gap-1 auto-rows-[293px]">
        {mockExplorePosts.map((post) => (
          <div
            key={post.id}
            className={`relative overflow-hidden cursor-pointer group bg-gray-800 ${post.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              }`}
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <img
              src={post.imageUrl}
              alt={`explore-${post.id}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />

            {/* Type Indicator - Top Right */}
            {post.type === 'video' && (
              <div className="absolute top-3 right-3 text-white">
                <MdPlayArrow size={24} />
              </div>
            )}
            {post.type === 'carousel' && (
              <div className="absolute top-3 right-3 text-white">
                <MdViewCarousel size={20} />
              </div>
            )}

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-6 transition-opacity duration-200 ${hoveredId === post.id ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {/* Likes */}
              <div className="flex items-center gap-2 text-white font-semibold">
                <FiHeart size={24} className="fill-white" />
                <span className="text-lg">{formatNumber(post.likes)}</span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-2 text-white font-semibold">
                <FiMessageCircle size={24} className="fill-white" />
                <span className="text-lg">{formatNumber(post.comments)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
