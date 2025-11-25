import React, { useRef, useState } from "react";
import Suggestions from "./Suggestions";
import PostItem from "./PostItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface HomeFeedProps {
  user: string;
  showSuggestions: boolean;
  isMobileWidth: boolean;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ user, showSuggestions, isMobileWidth }) => {
  const storiesRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const mockPosts = [
    {
      id: '1',
      user: {
        username: 'nature_explorer',
        avatar: 'https://i.pravatar.cc/150?img=12',
        isVerified: true,
      },
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      likes: 215674,
      caption: 'A beautiful day at the lake! 🏞️ The mountains in the background make this view absolutely stunning. Can\'t wait to come back here next summer! #nature #mountains #lake #travel',
      comments: [
        { username: 'user123', text: 'Amazing view! 😍' },
        { username: 'traveler_pro', text: 'Where is this? I need to visit!' },
        { username: 'photo_lover', text: 'Great shot! 📸' },
      ],
      timestamp: '2 DAYS AGO',
      location: 'Lake Tahoe, CA',
    },
    {
      id: '2',
      user: {
        username: 'sunset_chaser',
        avatar: 'https://i.pravatar.cc/150?img=8',
        isVerified: false,
      },
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      likes: 98123,
      caption: 'Sunset vibes 🌅 Nothing beats watching the sun go down by the ocean',
      comments: [
        { username: 'beach_lover', text: 'Beautiful colors!' },
        { username: 'photographer_daily', text: 'Perfect timing 👌' },
      ],
      timestamp: '1 DAY AGO',
    },
    {
      id: '3',
      user: {
        username: 'city_wanderer',
        avatar: 'https://i.pravatar.cc/150?img=5',
        isVerified: true,
      },
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      likes: 45230,
      caption: 'Exploring the city 🏙️ Urban adventures are the best!',
      comments: [
        { username: 'urban_explorer', text: 'Love this!' },
      ],
      timestamp: '5 HOURS AGO',
      location: 'New York, NY',
    },
    {
      id: '4',
      user: {
        username: 'coffee_addict',
        avatar: 'https://i.pravatar.cc/150?img=3',
        isVerified: false,
      },
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      likes: 12345,
      caption: 'Coffee break ☕ Best part of my day!',
      comments: [
        { username: 'coffee_lover', text: 'Same! ☕❤️' },
        { username: 'barista_life', text: 'Perfect cup!' },
      ],
      timestamp: '1 HOUR AGO',
    },
  ];

  const scrollStories = (direction: 'left' | 'right') => {
    if (storiesRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? storiesRef.current.scrollLeft - scrollAmount
        : storiesRef.current.scrollLeft + scrollAmount;

      storiesRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Update arrow visibility after scroll
      setTimeout(() => {
        if (storiesRef.current) {
          setShowLeftArrow(storiesRef.current.scrollLeft > 0);
          setShowRightArrow(
            storiesRef.current.scrollLeft <
            storiesRef.current.scrollWidth - storiesRef.current.clientWidth - 10
          );
        }
      }, 300);
    }
  };

  return (
    <div className="flex w-full justify-center overflow-y-auto scrollbar-hide">
      <div className={`flex flex-col items-center ${isMobileWidth ? 'w-full max-w-full' : 'max-w-[630px]'} min-w-0`}>
        {/* Stories */}
        <div className="relative w-full max-w-[630px] mb-6 py-6">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scrollStories('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              aria-label="Previous stories"
            >
              <FiChevronLeft size={20} className="text-black" />
            </button>
          )}

          {/* Stories Container */}
          <div
            ref={storiesRef}
            className="flex gap-4 overflow-x-auto px-2 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* User Stories - 15 total to test scroll */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="flex-none w-[88px] flex flex-col items-center cursor-pointer group"
              >
                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <img
                      src={`https://i.pravatar.cc/150?img=${(i % 70) + 1}`}
                      alt="story"
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs mt-2 text-white truncate w-full text-center font-normal">user{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scrollStories('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              aria-label="Next stories"
            >
              <FiChevronRight size={20} className="text-black" />
            </button>
          )}
        </div>

        {/* Posts */}
        <div className="w-full max-w-[470px]">
          {mockPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Suggestions Column */}
      {showSuggestions && (
        <div className="flex flex-col w-[319px] pt-4 ml-16 sticky top-0 h-screen overflow-y-auto scrollbar-hide">
          <Suggestions user={user} />
        </div>
      )}
    </div>
  );
};

export default HomeFeed;

